import { crx } from '@crxjs/vite-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { manifest } from './manifest.config';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    crx({ manifest }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globalSetup: './vitest.setup.global.ts',
    deps: {
      // SEE: https://github.com/seek-oss/vanilla-extract/issues/666#issuecomment-1112736262
      fallbackCJS: true,
    },
  },
});
