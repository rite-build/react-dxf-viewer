/**
 * @rite/react-dxf-viewer
 * 
 * A React component for viewing DXF (AutoCAD) files.
 */

// Main component
export { default as DxfViewer } from './components/dxfViewer';
export type { DxfViewerProps, SelectionChangeOptions } from './components/dxfViewer';

// Utilities
export { EntityInteraction } from './utils/EntityInteraction';
export { PolygonSelectionTool } from './utils/PolygonSelectionTool';
export * from './utils/threeUtils';
