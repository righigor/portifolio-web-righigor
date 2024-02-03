FROM node:16.14-alpine

COPY package*.json ./
RUN nmp install

COPY . .
CMD [ "star" ]