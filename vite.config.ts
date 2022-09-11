// see https://vitest.dev/config/#configuration
/// <reference types="vitest" />

import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import GithubActionsReporter from 'vitest-github-actions-reporter';

import { manifest } from './manifest.config';

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  test: {
    globals: true, // see https://vitest.dev/config/#globals
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globalSetup: './vitest.setup.global.ts',
    reporters: [
      process.env.GITHUB_ACTIONS === 'true'
        ? new GithubActionsReporter()
        : 'default',
      'junit',
    ],
    outputFile: {
      junit: 'tests/results/results.xml',
    },
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
