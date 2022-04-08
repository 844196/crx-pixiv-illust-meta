# syntax=docker/dockerfile:1.3-labs

FROM node:16-bullseye as base

# --------------------------------------------------------------------------------

FROM base as workspace

RUN <<SHELL
  install -o node -g node -d /workspaces/chrome-pixiv-bookmark-rate-ext/
  install -o node -g node -d /workspaces/chrome-pixiv-bookmark-rate-ext/dist/
  install -o node -g node -d /workspaces/chrome-pixiv-bookmark-rate-ext/node_modules/
SHELL

USER node
WORKDIR /workspaces/chrome-pixiv-bookmark-rate-ext
