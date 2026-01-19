import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { DxfViewer } from './index';

function App() {
  const [file, setFile] = useState<ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [selectedHandles, setSelectedHandles] = useState<string[]>([]);
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFileName(selectedFile.name);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      setFile(arrayBuffer);
    };
    reader.readAsArrayBuffer(selectedFile);
  }, []);

  const handleSelectionChange = useCallback((handles: string[], options?: { isReset?: boolean }) => {
    console.log('Selection changed:', handles, options);
    if (options?.isReset) {
      setSelectedHandles([]);
    } else {
      setSelectedHandles(handles);
    }
  }, []);

  const handleLoad = useCallback(() => {
    console.log('DXF loaded successfully!');
  }, []);

  const handleError = useCallback((error: Error) => {
    console.error('DXF load error:', error);
  }, []);

  return (
    <>
      <div className="header">
        <h1>🔧 DXF Viewer Dev</h1>
        <input 
          type="file" 
          accept=".dxf" 
          onChange={handleFileChange}
        />
        {fileName && <span style={{ opacity: 0.7 }}>{fileName}</span>}
        {selectedHandles.length > 0 && (
          <span style={{ opacity: 0.7, marginLeft: 'auto' }}>
            Selected: {selectedHandles.length} entities
          </span>
        )}
      </div>
      <div className="viewer-container">
        {file ? (
          <DxfViewer
            file={file}
            fileName={fileName}
            selectedHandles={selectedHandles}
            onSelectionChange={handleSelectionChange}
            onLoad={handleLoad}
            onError={handleError}
            showToolbar={true}
            enablePolygonSelection={true}
            enableInteraction={true}
            interactiveHandles={[]}
          />
        ) : (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>Select a DXF file to view</p>
          </div>
        )}
      </div>
    </>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

