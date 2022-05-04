# syntax=docker/dockerfile:1.3-labs

FROM node:16-bullseye as base

# --------------------------------------------------------------------------------

FROM base as workspace

RUN <<SHELL
  install -o node -g node -d /workspaces/crx-pixiv-illust-meta/
  install -o node -g node -d /workspaces/crx-pixiv-illust-meta/dist/
  install -o node -g node -d /workspaces/crx-pixiv-illust-meta/node_modules/
SHELL

USER node
WORKDIR /workspaces/crx-pixiv-illust-meta
