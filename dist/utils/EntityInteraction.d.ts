type DxfViewer = import('../core/dxf-viewer-library').DxfViewer;
/**
 * Generic Entity Interaction Handler
 *
 * Handles click/hover interactions with DXF entities.
 * This is a decoupled version that works with any DXF entities, not just rebars.
 */
export declare class EntityInteraction {
    private viewer;
    private hoveredObject;
    private isMouseDown;
    private isDragging;
    private interactionLayer;
    private activeOverlays;
    private selectedHandles;
    private validHandles;
    private intersectableObjectsCache;
    private cacheLastUpdated;
    private readonly CACHE_TTL;
    private dxfEntities;
    private _boundOnPointerMove;
    private _boundOnPointerLeave;
    private _boundOnPointerDown;
    private _boundOnPointerUp;
    private _boundOnViewChanged;
    private isEnabled;
    private onClick?;
    private boundingBoxMesh;
    private animationFrameId;
    private _boundOnLoaded;
    private _boundOnCleared;
    constructor(viewer: DxfViewer, onClick?: (handle: string) => void);
    private _onLoaded;
    private _onCleared;
    private initLine2Helper;
    private updateResolution;
    setEnabled(enabled: boolean): void;
    private setupEventListeners;
    destroy(): void;
    private resolveDxfObject;
    private ensureDxfIndex;
    private getGeometryFromHandle;
    private addOverlay;
    private removeOverlay;
    private clearAllOverlays;
    private cleanupOverlayResource;
    setValidHandles(handles: string[] | null): void;
    /**
     * Check if a handle is in the valid/interactive handles list.
     * Returns true if interaction is allowed, false if blocked.
     * If validHandles is empty, NOTHING is interactive.
     */
    private isHandleInteractive;
    private getIntersectableObjects;
    private _onPointerMove;
    private _startHover;
    private _clearHover;
    private _onPointerDown;
    private _onPointerUp;
    private _onPointerLeave;
    highlightHandles(handles: string[]): void;
    highlightContext(handles: string[]): void;
    selectHandles(handles: string[], contextHandles?: string[], shouldZoom?: boolean): void;
    private highlightContextInBounds;
    clearHighlights(): void;
    private createBoundingBoxOverlay;
    private animateToFit;
}
export {};
