"use client";

import { useEffect, useRef, useCallback, useState, useMemo } from "react";
import * as THREE from "three";
import "./dxfViewer.css";
import { EntityInteraction } from "@/utils/EntityInteraction";
import { PolygonSelectionTool } from "@/utils/PolygonSelectionTool";
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  SquareDashedMousePointer
} from "lucide-react";

// Hook to store latest callback in ref (prevents effect re-runs)
function useLatest<T>(value: T): React.MutableRefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}

// =============================================================================
// TYPES
// =============================================================================

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

  // ===== INPUTS (from parent - replaces store reads) =====
  
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

  // ===== OUTPUTS (callbacks - replaces store writes) =====
  
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
  
  // ===== OPTIONS =====
  
  /** Enable/disable built-in toolbar (default: true) */
  showToolbar?: boolean;
  
  /** Enable/disable polygon selection feature (default: true) */
  enablePolygonSelection?: boolean;
  
  /** Enable/disable entity click interaction (default: true) */
  enableInteraction?: boolean;
  
  /** Enable zoom animation when selecting entities (default: true) */
  enableZoomOnSelect?: boolean;
}

// =============================================================================
// TOOLBAR BUTTON COMPONENT
// =============================================================================

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}

function ToolbarButton({ onClick, active, title, children }: ToolbarButtonProps) {
  return (
    <button
      className={`dxf-toolbar-btn ${active ? 'dxf-toolbar-btn-active' : ''}`}
      onClick={onClick}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
}

// =============================================================================
// COMPONENT
// =============================================================================

export function DxfViewer({
  file,
  url,
  fileName: _fileName = "drawing.dxf",
  fonts,
  className,
  // Inputs
  selectedHandles = [],
  visibleHandles = null,
  filteredHandles = null,
  interactiveHandles = null,
  isPolygonMode: isPolygonModeProp = false,
  // Outputs
  onLoad,
  onError,
  onSelectionChange,
  onPolygonModeChange,
  // Options
  showToolbar = true,
  enablePolygonSelection = true,
  enableInteraction = true,
  enableZoomOnSelect = true,
}: DxfViewerProps) {
  
  // Compute valid handles for interaction (memoized)
  // interactiveHandles takes precedence over visibleHandles for restricting interactions
  const validHandlesForInteraction = useMemo(
    () => interactiveHandles ?? visibleHandles,
    [interactiveHandles, visibleHandles]
  );

  // Store callbacks in refs to prevent effect re-runs
  const onSelectionChangeRef = useLatest(onSelectionChange);
  const onPolygonModeChangeRef = useLatest(onPolygonModeChange);
  const onLoadRef = useLatest(onLoad);
  const onErrorRef = useLatest(onError);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const entityInteractionRef = useRef<EntityInteraction | null>(null);
  const polygonToolRef = useRef<PolygonSelectionTool | null>(null);
  const isPolygonSelectionRef = useRef<boolean>(false);
  // Internal state
  const [isPolygonModeInternal, setIsPolygonModeInternal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPhase, setLoadingPhase] = useState<string>("Initializing...");
  const [error, setError] = useState<Error | null>(null);
  const [DxfViewerClass, setDxfViewerClass] = useState<any>(null);

  // Sync polygon mode from prop
  useEffect(() => {
    setIsPolygonModeInternal(isPolygonModeProp);
  }, [isPolygonModeProp]);

  // Dynamically import DxfViewer
  useEffect(() => {
    if (typeof window === "undefined") return;

    import("@/core/dxf-viewer-library")
      .then((module) => {
        setDxfViewerClass(() => module.DxfViewer);
      })
      .catch((err) => {
        console.error("Failed to load DxfViewer:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
        setIsLoading(false);
      });
  }, []);

  // Initialize viewer when class is loaded
  const initViewer = useCallback(() => {
    if (!containerRef.current || !DxfViewerClass) return null;

    // Destroy existing viewer
    if (viewerRef.current) {
      try {
        viewerRef.current.Destroy();
      } catch (e) {
        console.warn("Error destroying viewer:", e);
      }
      viewerRef.current = null;
    }

    try {
      const options: any = {
        autoResize: true,
        clearColor: new THREE.Color("#ffffff"),
        clearAlpha: 1.0,
        antialias: true,
        colorCorrection: true,
        blackWhiteInversion: true,
      };

      const viewer = new DxfViewerClass(containerRef.current, options);

      if (!viewer.HasRenderer()) {
        throw new Error("WebGL not available. Please check your browser supports WebGL.");
      }

      viewerRef.current = viewer;
      
      // Subscribe to events (use refs to avoid stale closures)
      viewer.Subscribe("loaded", () => {
        console.log("DXF loaded successfully");
        
        // Fit to view
        const bounds = viewer.GetBounds();
        if (bounds) {
          const origin = viewer.GetOrigin();
          viewer.FitView(
            bounds.minX - origin.x,
            bounds.maxX - origin.x,
            bounds.minY - origin.y,
            bounds.maxY - origin.y,
            0.1
          );
        }
        
        viewer.Render();
        setIsLoading(false);
        onLoadRef.current?.();
      });

      viewer.Subscribe("message", (event: CustomEvent) => {
        const { message, level } = event.detail;
        if (level === "error") {
          console.error("[DxfViewer]", message);
        } else if (level === "warn") {
          console.warn("[DxfViewer]", message);
        }
      });

      return viewer;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      setIsLoading(false);
      onErrorRef.current?.(error);
      return null;
    }
  }, [DxfViewerClass, onLoadRef, onErrorRef]);

  // Load DXF file
  const loadDxf = useCallback(
    async (viewer: any, source: ArrayBuffer | string) => {
      setIsLoading(true);
      setError(null);
      setLoadingPhase("Loading...");

      try {
        let loadUrl: string;

        if (typeof source === "string") {
          loadUrl = source;
        } else {
          // Create blob URL from ArrayBuffer
          const blob = new Blob([source], { type: "application/octet-stream" });
          loadUrl = URL.createObjectURL(blob);
        }

        await viewer.Load({
          url: loadUrl,
          fonts: fonts ?? null,
          progressCbk: (
            phase: string,
            processedSize: number,
            totalSize: number | null
          ) => {
            let phaseText = phase;
            if (phase === "fetch") phaseText = "Downloading...";
            else if (phase === "parse") phaseText = "Parsing DXF...";
            else if (phase === "prepare") phaseText = "Preparing scene...";
            else if (phase === "font") phaseText = "Loading fonts...";
            
            if (totalSize && processedSize) {
              const percent = Math.round((processedSize / totalSize) * 100);
              setLoadingPhase(`${phaseText} ${percent}%`);
            } else {
              setLoadingPhase(phaseText);
            }
          },
        });

        // Clean up blob URL if created
        if (typeof source !== "string") {
          URL.revokeObjectURL(loadUrl);
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error("Failed to load DXF:", error);
        setError(error);
        setIsLoading(false);
        onErrorRef.current?.(error);
      }
    },
    [fonts, onErrorRef]
  );

  // Effect: Initialize and load when ready
  // Note: callbacks use refs to prevent re-initialization when parent re-renders
  useEffect(() => {
    if (!DxfViewerClass || !containerRef.current) return;
    
    const viewer = initViewer();
    if (!viewer) return;

    // Init entity interaction (if enabled)
    if (enableInteraction) {
      entityInteractionRef.current = new EntityInteraction(viewer, (handle: string) => {
         // Handle single click selection (use refs for latest callbacks)
         setIsPolygonModeInternal(false);
         onPolygonModeChangeRef.current?.(false);
         isPolygonSelectionRef.current = false;
         onSelectionChangeRef.current?.([handle]);
      });
      
      // Set initial valid handles immediately after creation
      if (validHandlesForInteraction) {
        entityInteractionRef.current.setValidHandles(validHandlesForInteraction);
      }
    }
    
    // Init polygon tool (if enabled)
    if (enablePolygonSelection) {
      polygonToolRef.current = new PolygonSelectionTool(
        viewer,
        (handles: string[]) => {
          setIsPolygonModeInternal(false);
          onPolygonModeChangeRef.current?.(false);
          isPolygonSelectionRef.current = true;
          onSelectionChangeRef.current?.(handles, { isPolygonSelection: true });
        },
        () => {
          setIsPolygonModeInternal(false);
          onPolygonModeChangeRef.current?.(false);
        }
      );
      
      // Set initial valid handles immediately after creation
      if (validHandlesForInteraction) {
        polygonToolRef.current.setValidHandles(validHandlesForInteraction);
      }
    }

    if (file) {
      loadDxf(viewer, file);
    } else if (url) {
      loadDxf(viewer, url);
    }

    return () => {
      entityInteractionRef.current?.destroy();
      entityInteractionRef.current = null;
      
      polygonToolRef.current?.deactivate();
      polygonToolRef.current = null;

      if (viewerRef.current) {
        try {
          viewerRef.current.Destroy();
        } catch (e) {
          console.warn("Error destroying viewer:", e);
        }
        viewerRef.current = null;
      }
    };
  }, [DxfViewerClass, file, url, initViewer, loadDxf, enableInteraction, enablePolygonSelection, onSelectionChangeRef, onPolygonModeChangeRef]);

  // Effect: Handle polygon mode changes
  useEffect(() => {
    if (!entityInteractionRef.current || !polygonToolRef.current) return;

    if (isPolygonModeInternal) {
      entityInteractionRef.current.setEnabled(false);
      polygonToolRef.current.activate();
    } else {
      polygonToolRef.current.deactivate();
      entityInteractionRef.current.setEnabled(true);
      
      // Re-apply selection highlighting if needed (only for direct selection, not polygon)
      if (selectedHandles.length > 0 && !isPolygonSelectionRef.current) {
        entityInteractionRef.current.selectHandles(selectedHandles, [], enableZoomOnSelect);
      }
    }
  }, [isPolygonModeInternal, selectedHandles, enableZoomOnSelect]);

  // Effect: Handle selectedHandles prop changes (Table → Viewer sync)
  useEffect(() => {
    if (!entityInteractionRef.current || isLoading || error) return;
    
    // Check if this update came from polygon selection
    const wasPolygonSelection = isPolygonSelectionRef.current;
    // Reset the flag immediately so next updates work correctly
    isPolygonSelectionRef.current = false;
    
    const contextHandles = visibleHandles || [];
    
    if (selectedHandles.length > 0) {
      // Determine zoom behavior:
      // - Single selection (length === 1): ALWAYS zoom - user explicitly clicked a row
      // - Multi-selection from polygon: don't zoom, stay on polygon area
      // - Multi-selection from other source: respect enableZoomOnSelect
      const isSingleSelection = selectedHandles.length === 1;
      const shouldZoom = enableZoomOnSelect && (isSingleSelection || !wasPolygonSelection);
      entityInteractionRef.current.selectHandles(selectedHandles, contextHandles, shouldZoom);
    } 
    else if (filteredHandles && filteredHandles.length > 0) {
      entityInteractionRef.current.highlightHandles(filteredHandles);
    }
    else {
      entityInteractionRef.current.selectHandles([], contextHandles, false);
    }
  }, [selectedHandles, visibleHandles, filteredHandles, isLoading, error, enableZoomOnSelect]);

  // Effect: Update valid handles for interaction restriction
  useEffect(() => {
    if (entityInteractionRef.current) {
      entityInteractionRef.current.setValidHandles(validHandlesForInteraction);
    }
    // Also update polygon tool's valid handles
    if (polygonToolRef.current) {
      polygonToolRef.current.setValidHandles(validHandlesForInteraction);
    }
  }, [validHandlesForInteraction, interactiveHandles]);

  // Toolbar actions
  const handleTogglePolygonMode = useCallback(() => {
    const newMode = !isPolygonModeInternal;
    setIsPolygonModeInternal(newMode);
    onPolygonModeChangeRef.current?.(newMode);
  }, [isPolygonModeInternal, onPolygonModeChangeRef]);

  const handleFitToView = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const bounds = viewer.GetBounds();
    if (bounds) {
      const origin = viewer.GetOrigin();
      viewer.FitView(
        bounds.minX - origin.x,
        bounds.maxX - origin.x,
        bounds.minY - origin.y,
        bounds.maxY - origin.y,
        0.1
      );
      viewer.Render();
    }
  }, []);

  const handleResetView = useCallback(() => {
    // Exit polygon mode if active
    setIsPolygonModeInternal(false);
    onPolygonModeChangeRef.current?.(false);
    
    // Clear highlights
    if (entityInteractionRef.current) {
      entityInteractionRef.current.clearHighlights();
    }
    
    // Clear the completed polygon boundary
    if (polygonToolRef.current) {
      polygonToolRef.current.clearCompletedPolygon();
      polygonToolRef.current.clearInProgressPolygon();
    }
    
    // Reset polygon selection flag
    isPolygonSelectionRef.current = false;
    
    // Notify parent to reset selection
    onSelectionChangeRef.current?.([], { isReset: true });
    
    // Reset view
    handleFitToView();
  }, [handleFitToView, onSelectionChangeRef, onPolygonModeChangeRef]);

  const handleZoomIn = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const camera = viewer.GetCamera();
    camera.zoom *= 1.25;
    camera.updateProjectionMatrix();
    viewer.Render();
  }, []);

  const handleZoomOut = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const camera = viewer.GetCamera();
    camera.zoom *= 0.8;
    camera.updateProjectionMatrix();
    viewer.Render();
  }, []);

  return (
    <div className={`dxf-viewer-wrapper ${className ?? ""}`}>
      <div className="dxf-main-content">
        <div className="dxf-viewer-container">
          <div
            ref={containerRef}
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
          />

          {isLoading && (
            <div className="dxf-loading-overlay">
              <div className="dxf-loading-spinner" />
              <div className="dxf-loading-progress">{loadingPhase}</div>
            </div>
          )}

          {error && (
            <div className="dxf-error-overlay">
              <svg className="dxf-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M15 9l-6 6M9 9l6 6" />
              </svg>
              <div className="dxf-error-title">Failed to load DXF</div>
              <div className="dxf-error-message">{error.message}</div>
            </div>
          )}

          {showToolbar && !isLoading && !error && (
            <div className="dxf-bottom-toolbar">
              <ToolbarButton onClick={handleResetView} title="Reset View">
                <RotateCcw size={18} />
              </ToolbarButton>
              
              {enablePolygonSelection && (
                <ToolbarButton
                  active={isPolygonModeInternal}
                  onClick={handleTogglePolygonMode}
                  title="Polygon Selection Tool"
                >
                  <SquareDashedMousePointer size={18} />
                </ToolbarButton>
              )}

              <div className="dxf-toolbar-separator" />

              <ToolbarButton onClick={handleZoomOut} title="Zoom Out">
                <ZoomOut size={18} />
              </ToolbarButton>

              <ToolbarButton onClick={handleZoomIn} title="Zoom In">
                <ZoomIn size={18} />
              </ToolbarButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DxfViewer;
