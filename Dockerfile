#FROM node:14.5.0-alpine
#MAINTAINER BBAILEY
#
#RUN mkdir -p /usr/src/app
#CMD cd /usr/src/app
## Everything under WORKDIR will assume your container destination is this directory
#WORKDIR /usr/src/app
#
#COPY package.json package-lock.json ./
#
#EXPOSE 3001
#
#COPY ./ ./
#
#CMD ["npm", "start"]

# NGINX DEMO
FROM nginx:mainline-alpine
RUN rm /etc/nginx/conf.d/*
ADD hello.conf /etc/nginx/conf.d/
ADD index.html /usr/share/nginx/html/


