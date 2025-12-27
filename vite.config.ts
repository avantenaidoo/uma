import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/videos\/.*\.(mp4|webm)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'video-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200, 206],
              },
              rangeRequests: true,
            },
          },
          {
            urlPattern: /^.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'all-pages',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
      manifest: {
        name: 'UMA',
        short_name: 'UMA',
        theme_color: '#ffffff',
        icons: [],
      },
    }),
  ],

  resolve: {
    dedupe: ['three'],
    alias: {
      three: path.resolve('./node_modules/three'),
      '@react-three/fiber': path.resolve('./node_modules/@react-three/fiber'),
      '@react-three/xr': path.resolve('./node_modules/@react-three/xr'),
    },
  },

  optimizeDeps: {
    include: ['three'],
  },
});