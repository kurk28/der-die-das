/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 6767,
  },
  preview: {
    port: 6666,
    strictPort: true,
  },
  test: {
    setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
    dir: './tests/unit/',
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
    conditions: ['development', 'browser'],
  },
});
