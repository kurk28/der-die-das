/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  plugins: [solidPlugin()],
  publicDir: resolve(__dirname, 'public'),
  server: {
    port: 6767,
  },
  preview: {
    port: 6666,
    strictPort: true,
  },
  test: {
    setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
    dir: './src/',
    environment: 'jsdom',
    globals: true,
    // if you have few tests, try commenting this
    // out to improve performance:
    // isolate: false,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'),
    },
    conditions: ['development', 'browser'],
  },
});
