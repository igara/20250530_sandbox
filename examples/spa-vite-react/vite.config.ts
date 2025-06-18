import {
  defineConfig,
} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {
  tanstackRouter,
} from '@tanstack/router-plugin/vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tanstackRouter(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      output: {
        // https://rollupjs.org/configuration-options/#output-assetfilenames
        assetFileNames: 'assets/[name][extname]',
        // https://rollupjs.org/configuration-options/#output-chunkfilenames
        chunkFileNames: 'assets/chunk.js',
        // https://rollupjs.org/configuration-options/#output-entryfilenames
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
