FROM node:16.17.0-bullseye

RUN \
  install -o node -g node -d /code \
  install -o node -g node -d /code/node_modules/

USER node
WORKDIR /code
