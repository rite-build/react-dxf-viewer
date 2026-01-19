# @my-org/react-dxf-viewer

A React component for viewing DXF (AutoCAD) files with interactive entity selection.

---

## 🔄 Update DXF Viewer (Workflow)

> ⚠️ **Important:** This library is installed directly from Git (not NPM).  
> Therefore, you **must** build the `dist` folder before pushing changes, otherwise the consuming app won't see the updates.

---

### Step 1: Updating the Library (react-dxf-viewer)

1. **Make code changes** in the `src/` folder

2. **Build the library** (mandatory!):
   ```bash
   pnpm run build
   ```

3. **Verify that dist files were updated** - check in Git:
   ```bash
   git status
   ```
   You should see changes in the `dist/` folder

4. **Commit and Push:**
   ```bash
   git add .
   git commit -m "feat: description of the change"
   git push
   ```

---

### Step 2: Updating the brain App monoRepo  (apps/platform)

1. **Navigate to the platform directory:**
   ```bash
   cd apps/platform
   ```

2. **Update the library:**
   ```bash
   pnpm update @my-org/react-dxf-viewer
   ```

3. **If the update doesn't work**, remove and reinstall:
   ```bash
   pnpm remove @my-org/react-dxf-viewer
   pnpm add git+https://github.com/YOUR_ORG/react-dxf-viewer.git
   ```

4. **Run the project to verify:**
   ```bash
   pnpm run dev
   ```

---

## 📦 Installation

```bash
# Via Git
pnpm add git+https://github.com/YOUR_ORG/react-dxf-viewer.git

# Or via NPM (if published)
pnpm add @my-org/react-dxf-viewer
```

---

## 🚀 Usage

```tsx
import { DxfViewer } from '@my-org/react-dxf-viewer';
import '@my-org/react-dxf-viewer/dist/style.css';

function MyComponent() {
  const [selectedHandles, setSelectedHandles] = useState<string[]>([]);

  return (
    <DxfViewer
      file={dxfArrayBuffer}
      // or: url="/path/to/file.dxf"
      selectedHandles={selectedHandles}
      onSelectionChange={(handles) => setSelectedHandles(handles)}
      onLoad={() => console.log('DXF loaded!')}
    />
  );
}
```

---

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `file` | `ArrayBuffer` | - | DXF file as ArrayBuffer |
| `url` | `string` | - | URL to DXF file |
| `fonts` | `string[]` | - | Font URLs for text rendering |
| `selectedHandles` | `string[]` | `[]` | Entity handles to highlight |
| `visibleHandles` | `string[] \| null` | `null` | Filter visible entities |
| `interactiveHandles` | `string[] \| null` | `null` | Entities that respond to mouse |
| `filteredHandles` | `string[] \| null` | `null` | Handles to highlight without zoom |
| `isPolygonMode` | `boolean` | `false` | Enable polygon selection mode |
| `showToolbar` | `boolean` | `true` | Show/hide toolbar |
| `enablePolygonSelection` | `boolean` | `true` | Enable polygon selection feature |
| `enableInteraction` | `boolean` | `true` | Enable click/hover interactions |
| `enableZoomOnSelect` | `boolean` | `true` | Zoom to selected entities |
| `onLoad` | `() => void` | - | Called when DXF loads |
| `onError` | `(error: Error) => void` | - | Called on error |
| `onSelectionChange` | `(handles: string[], options?) => void` | - | Called when selection changes |
| `onPolygonModeChange` | `(active: boolean) => void` | - | Called when polygon mode toggles |

---

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Start dev server with demo
pnpm dev

# Build for production
pnpm build
```

---

## 📁 Project Structure

```
src/
├── index.ts                    # Library exports
├── components/
│   ├── dxfViewer.tsx          # Main React component
│   └── dxfViewer.css          # Styles
├── utils/
│   ├── EntityInteraction.ts   # Click/hover logic
│   ├── PolygonSelectionTool.ts
│   └── threeUtils.ts
└── core/
    └── dxf-viewer-library/    # Core DXF engine
```

---

## ⚠️ Troubleshooting

### CSS not loading
Make sure you're importing the CSS:
```tsx
import '@my-org/react-dxf-viewer/dist/style.css';
```

### Changes not reflecting in consumer app
1. Make sure you ran `pnpm run build` in the library
2. Make sure `dist/` is included in the commit
3. Try removing and reinstalling the library in the consumer app

### Module not found errors
Check that the `exports` in `package.json` match your import paths.
