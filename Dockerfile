FROM node:latest
MAINTAINER BBAILEY

RUN mkdir -p /usr/src/app
CMD cd /usr/src/app
# Everything under WORKDIR will assume your container destination is this directory
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

EXPOSE 3001

COPY ./ ./

CMD ["npm", "start"]
