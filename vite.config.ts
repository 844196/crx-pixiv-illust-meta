import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { manifest } from './manifest.config';

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  test: {
    globals: true, // see https://vitest.dev/config/#globals
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globalSetup: './vitest.setup.global.ts',
    coverage: {
      reporter: 'cobertura',
    },
  },
});
