FROM node:16.20.2-bullseye as workspace

RUN \
  corepack enable && \
  install -o node -g node -d /workspace/ && \
  install -o node -g node -d /workspace/node_modules/

USER node

RUN npm config --location user set store-dir /home/node/.local/share/pnpm/store
