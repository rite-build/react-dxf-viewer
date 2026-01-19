import * as THREE from 'three';
import { getSafeObjectsBounds, getNDC } from './threeUtils';

// Type import only - runtime import is dynamic
type DxfViewer = import('@/core/dxf-viewer-library').DxfViewer;

// These are imported at runtime from JS files - declare their types inline
declare function getLineMaterial(color: number, linewidth: number, opacity?: number): THREE.Material;
declare function createOverlayFromCoordinates(
  vertices: Array<{x: number, y: number, z: number}>,
  material: THREE.Material,
  isClosed: boolean,
  matrixWorld: THREE.Matrix4
): THREE.Object3D | null;
declare function createOverlay(line: THREE.LineSegments, material: THREE.Material): THREE.Object3D | null;
declare function updateResolution(width: number, height: number): void;
declare function clearLineMaterialCache(): void;

// Dynamic import wrapper for Line2Helper functions
let line2HelperModule: any = null;
async function getLine2Helper() {
  if (!line2HelperModule) {
    line2HelperModule = await import('@/core/dxf-viewer-library/Line2Helper.js');
  }
  return line2HelperModule;
}

// Synchronous versions that use cached module (assumes already loaded)
function getLineMaterialSync(color: number, linewidth: number, opacity: number = 1.0): THREE.Material {
  if (!line2HelperModule) {
    // Fallback to basic material if not yet loaded
    return new THREE.LineBasicMaterial({ color, linewidth, transparent: true, opacity });
  }
  return line2HelperModule.getLineMaterial(color, linewidth, opacity);
}

function createOverlayFromCoordinatesSync(
  vertices: Array<{x: number, y: number, z: number}>,
  material: THREE.Material,
  isClosed: boolean,
  matrixWorld: THREE.Matrix4
): THREE.Object3D | null {
  if (!line2HelperModule) return null;
  return line2HelperModule.createOverlayFromCoordinates(vertices, material, isClosed, matrixWorld);
}

function createOverlaySync(line: THREE.LineSegments, material: THREE.Material): THREE.Object3D | null {
  if (!line2HelperModule) return null;
  return line2HelperModule.createOverlay(line, material);
}

function updateResolutionSync(width: number, height: number): void {
  if (line2HelperModule) {
    line2HelperModule.updateResolution(width, height);
  }
}

function clearLineMaterialCacheSync(): void {
  if (line2HelperModule) {
    line2HelperModule.clearLineMaterialCache();
  }
}

/**
 * Generic Entity Interaction Handler
 * 
 * Handles click/hover interactions with DXF entities.
 * This is a decoupled version that works with any DXF entities, not just rebars.
 */
export class EntityInteraction {
    private viewer: DxfViewer;
    private hoveredObject: THREE.Object3D | null = null;
    private isMouseDown: boolean = false;
    private isDragging: boolean = false;
    
    private interactionLayer: THREE.Group;
    private activeOverlays: Map<THREE.Object3D, THREE.Object3D> = new Map();
    private selectedHandles: Set<string> = new Set();
    private validHandles: Set<string> | null = null;
    
    private intersectableObjectsCache: THREE.Object3D[] | null = null;
    private cacheLastUpdated: number = 0;
    private readonly CACHE_TTL = 2000;
    
    private dxfEntities: Map<string, any> | null = null;

    private _boundOnPointerMove: (e: PointerEvent) => void;
    private _boundOnPointerLeave: (e: PointerEvent) => void;
    private _boundOnPointerDown: (e: PointerEvent) => void;
    private _boundOnPointerUp: (e: PointerEvent) => void;
    private _boundOnViewChanged: () => void;

    private isEnabled: boolean = true;
    private onClick?: (handle: string) => void;

    private boundingBoxMesh: THREE.Mesh | null = null;
    private animationFrameId: number | null = null;

    private _boundOnLoaded: () => void;
    private _boundOnCleared: () => void;

    constructor(viewer: DxfViewer, onClick?: (handle: string) => void) {
        this.viewer = viewer;
        this.onClick = onClick;

        this.interactionLayer = new THREE.Group();
        this.interactionLayer.name = "InteractionLayer";
        this.interactionLayer.renderOrder = 999;
        this.viewer.GetScene().add(this.interactionLayer);

        this.updateResolution();

        this._boundOnPointerMove = this._onPointerMove.bind(this);
        this._boundOnPointerLeave = this._onPointerLeave.bind(this);
        this._boundOnPointerDown = this._onPointerDown.bind(this);
        this._boundOnPointerUp = this._onPointerUp.bind(this);
        this._boundOnViewChanged = this.updateResolution.bind(this);
        this._boundOnLoaded = this._onLoaded.bind(this);
        this._boundOnCleared = this._onCleared.bind(this);

        this.setupEventListeners();
        
        // Initialize Line2Helper module
        this.initLine2Helper();
    }

    private _onLoaded() {
        this.viewer.GetScene().add(this.interactionLayer);
        this.dxfEntities = null;
        this.clearHighlights();
    }

    private _onCleared() {
         this.clearHighlights();
         this.dxfEntities = null;
         this.intersectableObjectsCache = null;
    }

    private async initLine2Helper() {
        await getLine2Helper();
    }

    private updateResolution() {
        const canvas = this.viewer.GetCanvas();
        if (canvas) {
            updateResolutionSync(canvas.width, canvas.height);
        }
    }

    public setEnabled(enabled: boolean) {
        this.isEnabled = enabled;
        if (!enabled) {
            this._clearHover();
            this.clearHighlights();
        }
    }

    private setupEventListeners() {
        const canvas = this.viewer.GetCanvas();
        if (!canvas) return;
        
        canvas.addEventListener('pointermove', this._boundOnPointerMove);
        canvas.addEventListener('pointerleave', this._boundOnPointerLeave);
        canvas.addEventListener('pointerdown', this._boundOnPointerDown);
        canvas.addEventListener('pointerup', this._boundOnPointerUp);

        this.viewer.Subscribe("pointerdown", this._boundOnPointerDown);
        this.viewer.Subscribe("resized", this._boundOnViewChanged);
        this.viewer.Subscribe("loaded", this._boundOnLoaded);
        this.viewer.Subscribe("cleared", this._boundOnCleared);
    }

    public destroy() {
        const canvas = this.viewer.GetCanvas();
        if (canvas) {
            canvas.removeEventListener('pointermove', this._boundOnPointerMove);
            canvas.removeEventListener('pointerleave', this._boundOnPointerLeave);
            canvas.removeEventListener('pointerdown', this._boundOnPointerDown);
            canvas.removeEventListener('pointerup', this._boundOnPointerUp);
        }

        this.viewer.Unsubscribe("pointerdown", this._boundOnPointerDown);
        this.viewer.Unsubscribe("resized", this._boundOnViewChanged);
        this.viewer.Unsubscribe("loaded", this._boundOnLoaded);
        this.viewer.Unsubscribe("cleared", this._boundOnCleared);

        this._clearHover();
        this.clearHighlights();
        
        clearLineMaterialCacheSync();
        
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        this.viewer.GetScene().remove(this.interactionLayer);
    }

    private resolveDxfObject(object: THREE.Object3D): THREE.Object3D | null {
        let curr: THREE.Object3D | null = object;
        while (curr) {
            if (curr.userData && curr.userData.dxfHandle) {
                return curr;
            }
            curr = curr.parent;
        }
        return null;
    }

    private ensureDxfIndex() {
        if (this.dxfEntities) return;
        const dxf = this.viewer.GetDxf();
        if (!dxf) return;

        this.dxfEntities = new Map();
        
        const indexEntities = (entities: any[]) => {
            if (!entities) return;
            for (const ent of entities) {
                if (ent.handle) this.dxfEntities!.set(ent.handle, ent);
            }
        };

        if (dxf.entities) indexEntities(dxf.entities);
        
        if (dxf.blocks) {
            if (dxf.blocks instanceof Map) {
                dxf.blocks.forEach((block: any) => {
                   if (block.entities) indexEntities(block.entities);
                });
            } else {
                for (const key in dxf.blocks) {
                    const block = dxf.blocks[key];
                    if (block.entities) indexEntities(block.entities);
                }
            }
        }
    }

    private getGeometryFromHandle(handle: string): { vertices: any[], isClosed: boolean } | null {
        this.ensureDxfIndex();
        if (!this.dxfEntities) return null;
        
        const ent = this.dxfEntities.get(handle);
        if (!ent) return null;

        if (ent.type === 'LWPOLYLINE') {
            const z = ent.elevation || 0;
            const vertices = (ent.vertices || []).map((v: any) => ({ x: v.x ?? 0, y: v.y ?? 0, z: z }));
            return { vertices, isClosed: !!(ent.shape || ent.closed) };
        } else if (ent.type === 'POLYLINE') {
             const vertices = (ent.vertices || []).map((v: any) => ({ x: v.x ?? 0, y: v.y ?? 0, z: v.z ?? 0 }));
             return { vertices, isClosed: !!(ent.shape || ent.closed) };
        } else if (ent.type === 'LINE') {
            if (ent.vertices) {
                const vertices = ent.vertices.map((v: any) => ({ x: v.x ?? 0, y: v.y ?? 0, z: v.z ?? 0 }));
                return { vertices, isClosed: false };
            }
            if (ent.start && ent.end) {
                return { 
                    vertices: [
                        { x: ent.start.x ?? 0, y: ent.start.y ?? 0, z: ent.start.z ?? 0 }, 
                        { x: ent.end.x ?? 0, y: ent.end.y ?? 0, z: ent.end.z ?? 0 }
                    ], 
                    isClosed: false 
                };
            }
        }
        
        return null;
    }

    private addOverlay(originalObj: THREE.Object3D, color: number, linewidth: number = 3, opacity: number = 1.0, isSimpleLine: boolean = false): boolean {
        const target = this.resolveDxfObject(originalObj);
        if (!target) return false;

        if (this.activeOverlays.has(target)) return false;

        target.updateMatrixWorld(true);

        let overlay: THREE.Object3D | null = null;
        const handle = target.userData.dxfHandle;

        const geomData = !isSimpleLine ? this.getGeometryFromHandle(handle) : null;
        
        if (geomData) {
            const material = getLineMaterialSync(color, linewidth, opacity);
            overlay = createOverlayFromCoordinatesSync(
                geomData.vertices, 
                material, 
                geomData.isClosed, 
                target.matrixWorld
            );
        } 
        
        if (!overlay) {
            if (target instanceof THREE.LineSegments || target instanceof THREE.Line) {
                if (isSimpleLine) {
                    const material = new THREE.LineBasicMaterial({
                        color: color,
                        linewidth: 1,
                        depthTest: false,
                        transparent: true,
                        opacity: opacity
                    });
                    overlay = target.clone();
                    (overlay as THREE.Line | THREE.LineSegments).material = material;
                    overlay.renderOrder = 999;
                } else {
                    const material = getLineMaterialSync(color, linewidth, opacity);
                    overlay = createOverlaySync(target as THREE.LineSegments, material);
                }
            } else if (target instanceof THREE.Mesh) {
                const material = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: opacity,
                    depthTest: false
                });
                overlay = target.clone();
                (overlay as THREE.Mesh).material = material;
                overlay.renderOrder = 999;
            }
        }

        if (overlay) {
            this.interactionLayer.add(overlay);
            this.activeOverlays.set(target, overlay);
            return true;
        }
        return false;
    }

    private removeOverlay(originalObj: THREE.Object3D) {
        const target = this.resolveDxfObject(originalObj);
        if (!target) return;

        const overlay = this.activeOverlays.get(target);
        if (overlay) {
            this.cleanupOverlayResource(overlay);
            this.activeOverlays.delete(target);
            this.viewer.Render();
        }
    }

    private clearAllOverlays() {
        this.activeOverlays.forEach((overlay) => {
            this.cleanupOverlayResource(overlay);
        });
        this.activeOverlays.clear();
        this.viewer.Render();
    }

    private cleanupOverlayResource(overlay: THREE.Object3D) {
        if (!overlay) return;

        if (overlay.parent) {
            overlay.parent.remove(overlay);
        }

        if ((overlay as any).geometry) {
            (overlay as any).geometry.dispose();
        }
        
        const material = (overlay as any).material;
        if (material) {
             const isLineSegments2 = (overlay as any).isLineSegments2 || overlay.type === 'LineSegments2';
             const isLine2 = (overlay as any).isLine2 || overlay.type === 'Line2';
             
             if (!isLineSegments2 && !isLine2) {
                if (Array.isArray(material)) {
                    material.forEach(m => m.dispose());
                } else {
                    material.dispose();
                }
             }
        }
        
        if (overlay.children) {
            [...overlay.children].forEach(child => this.cleanupOverlayResource(child));
        }
    }

    public setValidHandles(handles: string[] | null) {
        this.validHandles = handles ? new Set(handles.map(h => h.toLowerCase())) : null;
        this.intersectableObjectsCache = null;
    }

    private getIntersectableObjects(): THREE.Object3D[] {
        const now = Date.now();
        if (this.intersectableObjectsCache && (now - this.cacheLastUpdated < this.CACHE_TTL)) {
            return this.intersectableObjectsCache;
        }

        const objects: THREE.Object3D[] = [];
        this.viewer.GetScene().traverse((obj: THREE.Object3D) => {
            if (obj.userData.dxfHandle && obj.parent !== this.interactionLayer) {
                if (this.validHandles && !this.validHandles.has(obj.userData.dxfHandle.toLowerCase())) {
                    return;
                }
                objects.push(obj);
            }
        });

        this.intersectableObjectsCache = objects;
        this.cacheLastUpdated = now;
        return objects;
    }

    private _onPointerMove(event: PointerEvent) {
        if (!this.isEnabled) return;

        if (this.isMouseDown) {
            this.isDragging = true;
        }

        const canvas = this.viewer.GetCanvas();
        if (!canvas) {
            this._clearHover();
            return;
        }

        const mouse = getNDC(event.clientX, event.clientY, canvas);
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.viewer.GetCamera());
        raycaster.params.Line.threshold = 6.0;

        const intersects = raycaster.intersectObjects(this.getIntersectableObjects());

        let hitObject: THREE.Object3D | null = null;
        if (intersects.length > 0) {
            hitObject = this.resolveDxfObject(intersects[0].object);
        }

        if (hitObject) {
            if (hitObject !== this.hoveredObject) {
                this._clearHover();
                this._startHover(hitObject);
            }
        } else {
            if (this.hoveredObject) {
                this._clearHover();
            }
        }
    }

    private _startHover(object: THREE.Object3D) {
        this.hoveredObject = object;

        const canvas = this.viewer.GetCanvas();
        if (canvas) {
            canvas.style.cursor = 'pointer';
        }

        this.addOverlay(object, 0x0099ff, 4, 0.5);
        this.viewer.Render();  
    }

    private _clearHover() {
        if (this.hoveredObject) {
            const handle = this.hoveredObject.userData.dxfHandle;
            if (!handle || !this.selectedHandles.has(handle.toLowerCase())) {
                this.removeOverlay(this.hoveredObject);
            }
            this.hoveredObject = null;
        }

        const canvas = this.viewer.GetCanvas();
        if (canvas) {
            canvas.style.cursor = 'default';
        }
    }

    private _onPointerDown(_event: PointerEvent) {
        if (!this.isEnabled) return;
        this.isMouseDown = true;
        this.isDragging = false;
    }

    private _onPointerUp(event: PointerEvent) {
        if (!this.isEnabled) return;

        if(this.isDragging) {
            this.isMouseDown = false;
            this.isDragging = false;
            return;
        }

        if (this.hoveredObject) {
            const handle = this.hoveredObject.userData.dxfHandle;
            if (this.onClick) {
                this.onClick(handle);
            }
            this.isMouseDown = false;
            this.isDragging = false;
            return;
        }

        const canvas = this.viewer.GetCanvas();
        if (!canvas) return;

        const mouse = getNDC(event.clientX, event.clientY, canvas);
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.viewer.GetCamera());
        raycaster.params.Line.threshold = 3.0;

        const intersects = raycaster.intersectObjects(this.getIntersectableObjects());
        if (intersects.length > 0) {
            const hit = this.resolveDxfObject(intersects[0].object);
            if (hit) {
                const handle = hit.userData.dxfHandle;
                if (this.onClick) {
                    this.onClick(handle);
                }
            }
        }
        
        this.isMouseDown = false;
        this.isDragging = false;
    }

    private _onPointerLeave() {
        this._clearHover();
        this.isMouseDown = false;
        this.isDragging = false;
    }

    public highlightHandles(handles: string[]): void {
        this.clearHighlights();
        if (handles.length === 0) return;

        const lowerHandles = handles.map(h => h.toLowerCase());
        
        this.viewer.GetScene().traverse((obj: THREE.Object3D) => {
            const dxfHandle = obj.userData.dxfHandle;
            if (dxfHandle && lowerHandles.includes(dxfHandle.toLowerCase()) && obj.parent !== this.interactionLayer) {
                this.addOverlay(obj, 0x0099ff, 6);
            }
        });
        this.viewer.Render();
    }

    public highlightContext(handles: string[]): void {
        if (handles.length === 0) return;

        const lowerHandles = handles.map(h => h.toLowerCase());
        
        this.viewer.GetScene().traverse((obj: THREE.Object3D) => {
            const dxfHandle = obj.userData.dxfHandle;
            if (dxfHandle && lowerHandles.includes(dxfHandle.toLowerCase()) && obj.parent !== this.interactionLayer) {
                if (this.selectedHandles.has(dxfHandle.toLowerCase())) return;
                this.addOverlay(obj, 0xcccccc, 2); 
            }
        });

        this.viewer.Render();
    }

    public selectHandles(handles: string[], contextHandles: string[] = [], shouldZoom: boolean = true): void {
        this.clearHighlights();

        if (handles.length === 0) return;

        const lowerHandles = handles.map(h => h.toLowerCase());
        handles.forEach(h => this.selectedHandles.add(h.toLowerCase()));

        if (contextHandles.length > 0) {
            this.highlightContext(contextHandles);
        }

        const matchedObjects: THREE.Object3D[] = [];

        this.viewer.GetScene().traverse((obj: THREE.Object3D) => {
            const dxfHandle = obj.userData.dxfHandle;
            if (dxfHandle) {
                if (lowerHandles.includes(dxfHandle.toLowerCase()) && obj.parent !== this.interactionLayer) {
                    if (obj instanceof THREE.LineSegments || obj instanceof THREE.Line) {
                        if (obj.geometry && !obj.geometry.boundingBox) {
                            obj.geometry.computeBoundingBox();
                        }
                    }
                    matchedObjects.push(obj);
                }
            }
        });

        if (matchedObjects.length === 0) return;

        matchedObjects.forEach(obj => {
            const dxfType = obj.userData.dxfType;
            const isText = dxfType === 'TEXT' || dxfType === 'MTEXT' || dxfType === 'ATTRIB';

            if (isText && obj instanceof THREE.LineSegments) { 
                 this.addOverlay(obj, 0x0099ff, 2, 1.0, true); 
            } else {
                 this.addOverlay(obj, 0x0099ff, 5);
            }
        });
        
        this.viewer.Render();

        const boundingBox = getSafeObjectsBounds(matchedObjects);

        if (!boundingBox || boundingBox.isEmpty()) return;

        if (contextHandles.length === 0) {
             this.highlightContextInBounds(boundingBox, Array.from(this.selectedHandles));
        }

        this.createBoundingBoxOverlay(boundingBox);

        if (shouldZoom) {
            this.animateToFit(boundingBox, 800);
        }
    }

    private highlightContextInBounds(boundingBox: THREE.Box3, selectedHandles: string[]): void {
        const expandedBox = boundingBox.clone();
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        expandedBox.expandByVector(size.multiplyScalar(0.1));

        const lowerSelectedHandles = selectedHandles.map(h => h.toLowerCase());

        this.viewer.GetScene().traverse((obj: THREE.Object3D) => {
            if (obj.parent === this.interactionLayer) return;
            
            const dxfHandle = obj.userData.dxfHandle;
            if (dxfHandle && lowerSelectedHandles.includes(dxfHandle.toLowerCase())) return;

            if (!(obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.LineSegments)) return;

            const objectPosition = new THREE.Vector3();
            obj.getWorldPosition(objectPosition);

            if (expandedBox.containsPoint(objectPosition)) {
                this.addOverlay(obj, 0xcccccc, 2);
            }
        });
        
        this.viewer.Render();
    }

    public clearHighlights(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        this.selectedHandles.clear();
        this.clearAllOverlays();
        
        if (this.boundingBoxMesh) {
            this.cleanupOverlayResource(this.boundingBoxMesh);
            this.boundingBoxMesh = null;
        }

        this.viewer.Render();
    }

    private createBoundingBoxOverlay(box: THREE.Box3): void {
        if (box.isEmpty() || 
            !isFinite(box.min.x) || !isFinite(box.min.y) || !isFinite(box.min.z) ||
            !isFinite(box.max.x) || !isFinite(box.max.y) || !isFinite(box.max.z)) {
            return;
        }

        if (this.boundingBoxMesh) {
            this.cleanupOverlayResource(this.boundingBoxMesh);
            this.boundingBoxMesh = null;
        }

        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        
        const minSize = 10;
        if (size.x < minSize) size.x = minSize;
        if (size.y < minSize) size.y = minSize;
        if (size.z < minSize) size.z = minSize;

        try {
            const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
            const material = new THREE.MeshBasicMaterial({
                color: 0x9333ea,
                transparent: true,
                opacity: 0.2,
                side: THREE.DoubleSide,
                depthTest: false
            });

            this.boundingBoxMesh = new THREE.Mesh(geometry, material);
            this.boundingBoxMesh.position.copy(center);

            const edges = new THREE.EdgesGeometry(geometry);
            const lineMaterial = new THREE.LineBasicMaterial({ 
                color: 0x9333ea, 
                linewidth: 2,
                depthTest: false 
            });
            const wireframe = new THREE.LineSegments(edges, lineMaterial);
            this.boundingBoxMesh.add(wireframe);

            this.viewer.GetScene().add(this.boundingBoxMesh);
            this.viewer.Render();
        } catch (error) {
            console.error('[EntityInteraction] Error creating bounding box overlay:', error);
        }
    }

    private animateToFit(box: THREE.Box3, duration: number): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        const origin = this.viewer.GetOrigin();
        if (box.isEmpty() || !isFinite(box.min.x) || !isFinite(box.min.y)) return;
        
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        
        const targetCenterX = center.x - origin.x;
        const targetCenterY = center.y - origin.y;
        
        const canvas = this.viewer.GetCanvas();
        const canvasWidth = canvas ? canvas.width : 800;
        const canvasHeight = canvas ? canvas.height : 600;
        const aspect = canvasWidth / canvasHeight;
        
        const paddingFactor = 1.5;
        let viewWidth = size.x * paddingFactor;
        if (size.y * paddingFactor * aspect > viewWidth) {
            viewWidth = size.y * paddingFactor * aspect;
        }
        
        const minViewSize = 30;
        viewWidth = Math.max(viewWidth, minViewSize);
        
        let startState: { cx: number, cy: number, vw: number } | null = null;
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
            if (!startState) {
                const camera = this.viewer.GetCamera();
                if (!isFinite(camera.position.x) || !isFinite(camera.zoom)) {
                    this.animationFrameId = null;
                    return;
                }
                startState = {
                    cx: camera.position.x - origin.x,
                    cy: camera.position.y - origin.y,
                    vw: camera.right - camera.left
                };

                const dist = Math.hypot(targetCenterX - startState.cx, targetCenterY - startState.cy);
                if (dist < startState.vw * 0.01 && Math.abs(viewWidth - startState.vw) < startState.vw * 0.01) {
                    this.animationFrameId = null;
                    return;
                }
            }
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            const curCX = startState.cx + (targetCenterX - startState.cx) * eased;
            const curCY = startState.cy + (targetCenterY - startState.cy) * eased;
            const curVW = startState.vw + (viewWidth - startState.vw) * eased;
            this.viewer.SetView({ x: curCX + origin.x, y: curCY + origin.y }, curVW);
            this.viewer.Render();
            
            if (progress < 1) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.animationFrameId = null;
            }
        };
        
        this.animationFrameId = requestAnimationFrame(animate);
    }
}

