# yarnも含まれているので、yarnのバージョンアップのときはnodeのバージョンも上げること
# node: 12.13.0, yarn: 1.19.1
# https://github.com/nodejs/docker-node
# https://hub.docker.com/_/node/
FROM node:12.13.0-alpine

# https://github.com/Automattic/node-canvas/issues/866
RUN apk update && apk upgrade && \
    apk add --no-cache git \
    python2 \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev
