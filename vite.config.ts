import { defineConfig, type Plugin } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Plugin to replace Node.js fs module with browser-safe empty stub
function stubNodeBuiltins(): Plugin {
  const nodeBuiltins = ['fs', 'path', 'crypto', 'stream', 'buffer', 'util', 'os', 'child_process'];
  
  return {
    name: 'stub-node-builtins',
    enforce: 'pre',
    resolveId(id) {
      // Intercept Node.js built-in modules
      if (nodeBuiltins.includes(id)) {
        return { id: `\0stub:${id}`, moduleSideEffects: false };
      }
      return null;
    },
    load(id) {
      if (id.startsWith('\0stub:')) {
        // Return empty module for Node.js built-ins
        return `
          export const readFileSync = () => { throw new Error('fs.readFileSync is not available in browser'); };
          export const readFile = (path, opts, cb) => { 
            const callback = typeof opts === 'function' ? opts : cb;
            if (callback) callback(new Error('fs.readFile is not available in browser'));
          };
          export const writeFileSync = () => { throw new Error('fs.writeFileSync is not available in browser'); };
          export const writeFile = () => null;
          export const existsSync = () => false;
          export const exists = () => false;
          export const join = (...args) => args.filter(Boolean).join('/');
          export const resolve = (...args) => args.filter(Boolean).join('/');
          export const dirname = (p) => p ? p.substring(0, p.lastIndexOf('/')) : '';
          export const basename = (p) => p ? p.split('/').pop() : '';
          export const extname = (p) => { const b = p ? p.split('/').pop() : ''; const i = b.lastIndexOf('.'); return i > 0 ? b.slice(i) : ''; };
          export default {
            readFileSync: () => { throw new Error('fs.readFileSync is not available in browser'); },
            readFile: (path, opts, cb) => { const callback = typeof opts === 'function' ? opts : cb; if (callback) callback(new Error('fs.readFile is not available in browser')); },
            writeFileSync: () => { throw new Error('fs.writeFileSync is not available in browser'); },
            writeFile: () => null,
            existsSync: () => false,
            exists: () => false,
          };
        `;
      }
      return null;
    },
    // Transform require('fs') calls in the code
    transform(code, id) {
      if (id.includes('node_modules') && code.includes('require(')) {
        // Replace require("fs") and require('fs') with inline empty object
        let transformed = code;
        for (const builtin of nodeBuiltins) {
          // Match require("fs") or require('fs')
          const regex = new RegExp(`require\\(["']${builtin}["']\\)`, 'g');
          if (regex.test(transformed)) {
            transformed = transformed.replace(regex, `({ 
              readFileSync: function() { throw new Error('${builtin} not available in browser'); },
              readFile: function(p, o, c) { var cb = typeof o === 'function' ? o : c; if (cb) cb(new Error('${builtin} not available')); },
              existsSync: function() { return false; },
              writeFileSync: function() {},
            })`);
          }
        }
        if (transformed !== code) {
          return { code: transformed, map: null };
        }
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    stubNodeBuiltins(),
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/index.ts', 'src/components/**/*.ts', 'src/components/**/*.tsx', 'src/utils/**/*.ts'],
      exclude: ['src/core/**', 'src/demo.tsx', '**/*.js'],
      rollupTypes: false,
      copyDtsFiles: false,
      compilerOptions: {
        skipLibCheck: true,
        noEmit: false,
        declaration: true,
        emitDeclarationOnly: true,
      },
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactDxfViewer',
      fileName: (format) => `react-dxf-viewer.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'three'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          three: 'THREE',
        },
        sourcemap: true,
      },
    },
    watch: {
      include: 'src/**',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
