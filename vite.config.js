import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // Fix relative path issues
  build: {
    outDir: 'dist',
  },
});
