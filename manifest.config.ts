import { defineManifest } from 'rollup-plugin-chrome-extension';

import {
  author,
  description,
  homepage as homepage_url,
  displayName as name,
  version,
} from './package.json';

export const manifest = defineManifest({
  manifest_version: 3,
  name,
  description,
  author,
  version,
  homepage_url,
  icons: {
    16: 'icons/icon16.png',
    48: 'icons/icon48.png',
    128: 'icons/icon128.png',
  },
  permissions: [
    'tabs',
    'scripting',
  ],
  background: {
    service_worker: 'src/sw.ts',
  },
  host_permissions: [
    'https://www.pixiv.net/*',
  ],
});
