import react from '@vitejs/plugin-react';
import { chromeExtension } from 'rollup-plugin-chrome-extension';
import { defineConfig } from 'vite';

import { manifest } from './manifest.config';

export default defineConfig({
  plugins: [
    react(),
    chromeExtension({ manifest }),
  ],
});
