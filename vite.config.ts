import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('office_small')) return 'office_small';
          if (id.includes('meeting_room')) return 'meeting_room';
          if (id.includes('living_room')) return 'living_room';
          if (id.includes('music_room')) return 'music_room';
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
});
