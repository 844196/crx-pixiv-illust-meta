<h1 align="center">Pixiv Bookmark Rate Extension</h1>

<p align="center">
  <a href="https://github.com/844196/chrome-pixiv-bookmark-rate-ext/actions/workflows/ci.yml">
    <img src="https://github.com/844196/chrome-pixiv-bookmark-rate-ext/actions/workflows/ci.yml/badge.svg?branch=main" />
  </a>
  <a href="https://github.com/844196/chrome-pixiv-bookmark-rate-ext/releases/latest">
    <img src="https://img.shields.io/github/release/844196/chrome-pixiv-bookmark-rate-ext.svg" />
  </a>
  <a href="https://gitmoji.dev">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat" alt="Gitmoji">
  </a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/4990822/160822625-8bc5ae54-0ad8-419b-b96c-0cf598d72db2.png" />
</p>

<p align="center">
  <sup><a href="https://www.pixiv.net/">Pixiv</a>の作品一覧画面のサムネイル下部にブックマーク率などを追加表示するChrome Extensionです</sup>
</p>

## :sparkles: Features

* 作品一覧画面のサムネイル下部に以下の情報を追加表示します
  * 投稿日時
  * 閲覧数
  * ブックマーク数
  * ブックマーク率

## :heavy_plus_sign: Install

1. [Releases](https://github.com/844196/chrome-pixiv-bookmark-rate-ext/releases/latest) から `chrome-pixiv-bookmark-rate-ext-{LATEST_VERSION}.zip` をダウンロードし、任意のディレクトリに展開します
2. [Chromeの拡張設定](chrome://extensions/)を開き `デベロッパーモード` にチェックを入れます
3. `パッケージ化されていない拡張機能を読み込む` を押します
4. ディレクトリ選択画面が表示されるので、展開したディレクトリまで移動し `選択` を押します

## :package: Build

```sh
yarn build
```

## :page_facing_up: License

See [`LICENSE.md`](/LICENSE.md).
