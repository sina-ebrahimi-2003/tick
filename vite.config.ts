import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/static',  // Builds into Flask's static folder
    emptyOutDir: true,           // Clears old files on rebuild
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5000',  // Force IPv4
      '/static/uploads': 'http://127.0.0.1:5000',
      '/register': 'http://127.0.0.1:5000',
      '/login': 'http://127.0.0.1:5000',
      
    },
  },
});
