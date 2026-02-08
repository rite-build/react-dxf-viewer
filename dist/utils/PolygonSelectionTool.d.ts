type DxfViewer = import('../core/dxf-viewer-library').DxfViewer;
/**
 * Polygon Selection Tool
 *
 * Allows users to draw a polygon on the canvas and find all DXF entities
 * whose centers fall within that polygon. Returns the handles via callback.
 */
export declare class PolygonSelectionTool {
    private viewer;
    private canvas;
    private isActive;
    private points;
    private previewLine;
    private polygonLine;
    private pointsMesh;
    private startPointMesh;
    private mousePosition;
    private completedPolygonLine;
    private completedPointsMesh;
    private isHoveringNearStart;
    private onComplete;
    private onCancel;
    private validHandles;
    private _boundOnPointerDown;
    private _boundOnPointerMove;
    private _boundOnKeyDown;
    private _boundOnDblClick;
    constructor(viewer: DxfViewer, onComplete: (handles: string[]) => void, onCancel: () => void);
    /**
     * Set the valid handles that can be selected by polygon selection.
     * If null/undefined or empty array is passed, nothing will be selectable.
     * @param handles Array of valid handle strings, or null/undefined
     */
    setValidHandles(handles: string[] | null | undefined): void;
    /**
     * Check if a handle is in the valid handles list
     */
    private isHandleValid;
    activate(): void;
    deactivate(): void;
    clearCompletedPolygon(): void;
    clearInProgressPolygon(): void;
    private clearDrawingVisuals;
    private getSnapThreshold;
    private isNearStartPoint;
    private _getWorldPosition;
    private _onPointerDown;
    private _onPointerMove;
    private _onDblClick;
    private _onKeyDown;
    private updateVisuals;
    private drawRegularPoints;
    private drawStartPoint;
    private drawPolygonLine;
    private clearDrawingVisualsOnly;
    private updatePreview;
    private clearPreviewLine;
    private calculatePreviewEndPoint;
    private createPreviewMaterial;
    private completeSelection;
    private createCompletedPolygonBoundary;
    private cancelSelection;
    private findEntitiesInPolygon;
    private isPointInPolygon;
}
export {};
