import { defineManifest } from 'rollup-plugin-chrome-extension';
import { version, author, homepage as homepage_url } from './package.json';

export const manifest = defineManifest({
  manifest_version: 3,
  name: 'Pixiv Bookmark Rate Extension',
  description: '作品一覧画面のサムネイル下部に閲覧数・ブックマーク数・ブックマーク率を追加表示します',
  author,
  version,
  homepage_url,
  icons: {
    '16': 'icons/icon16.png',
    '48': 'icons/icon48.png',
    '128': 'icons/icon128.png',
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
