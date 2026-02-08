export interface SelectionChangeOptions {
    isReset?: boolean;
    isPolygonSelection?: boolean;
}
export interface DxfViewerProps {
    /** DXF file as ArrayBuffer */
    file?: ArrayBuffer;
    /** DXF file URL */
    url?: string;
    /** File name to display */
    fileName?: string;
    /** Font URLs for text rendering */
    fonts?: string[];
    /** Container className */
    className?: string;
    /**
     * Currently selected entity handles to highlight.
     * When this changes, viewer will highlight and zoom to these entities.
     * Example: User clicks a table row → parent passes handle IDs here.
     */
    selectedHandles?: string[];
    /**
     * Handles that are currently visible/filtered.
     * Used to restrict which entities can be interacted with.
     * If null, all entities are interactable.
     */
    visibleHandles?: string[] | null;
    /**
     * Handles to highlight without zooming (e.g., filter results).
     */
    filteredHandles?: string[] | null;
    /**
     * Handles that are interactive (can be hovered/clicked).
     * If provided, only entities with handles in this list will respond to mouse events.
     * If null/undefined, all entities are interactive (default behavior).
     * This is separate from visibleHandles - entities can be visible but not interactive.
     */
    interactiveHandles?: string[] | null;
    /**
     * Whether polygon selection mode should be active.
     * Controlled externally by parent.
     */
    isPolygonMode?: boolean;
    /** Called when viewer finishes loading */
    onLoad?: () => void;
    /** Called on error */
    onError?: (error: Error) => void;
    /**
     * Called when selection changes (via click or polygon selection).
     * The parent should use this to update its state/table.
     *
     * @param handles - Array of selected entity handle IDs
     * @param options - Additional context about the selection
     *   - isReset: true when user clicked "reset" button
     *   - isPolygonSelection: true when selection was made via polygon tool
     */
    onSelectionChange?: (handles: string[], options?: SelectionChangeOptions) => void;
    /**
     * Called when polygon mode is toggled internally (e.g., via toolbar button).
     * Parent should update isPolygonMode prop accordingly.
     */
    onPolygonModeChange?: (active: boolean) => void;
    /** Enable/disable built-in toolbar (default: true) */
    showToolbar?: boolean;
    /** Enable/disable polygon selection feature (default: true) */
    enablePolygonSelection?: boolean;
    /** Enable/disable entity click interaction (default: true) */
    enableInteraction?: boolean;
    /** Enable zoom animation when selecting entities (default: true) */
    enableZoomOnSelect?: boolean;
}
export declare function DxfViewer({ file, url, fileName: _fileName, fonts, className, selectedHandles, visibleHandles, filteredHandles, interactiveHandles, isPolygonMode: isPolygonModeProp, onLoad, onError, onSelectionChange, onPolygonModeChange, showToolbar, enablePolygonSelection, enableInteraction, enableZoomOnSelect, }: DxfViewerProps): import("react/jsx-runtime").JSX.Element;
export default DxfViewer;
