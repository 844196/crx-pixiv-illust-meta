import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { manifest } from './manifest.config';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    crx({ manifest }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globalSetup: './vitest.setup.global.ts',
  },
});
