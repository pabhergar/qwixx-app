import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: 'v2',
  build: {
    target: 'esnext',
    outDir: '../dist/test',
    emptyOutDir: false
  }
});
