FROM node:14.5.0-alpine
MAINTAINER BBAILEY

RUN mkdir -p /usr/src/app
CMD cd /usr/src/app
# Everything under WORKDIR will assume your container destination is this directory
WORKDIR /usr/src/app

COPY Makefile package.json package-lock.json ./

RUN npm install --quiet && \
  rm -rf /root/.npm \

COPY ./ ./
