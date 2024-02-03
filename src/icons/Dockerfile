FROM node:16.14-alpine
WORKDIR ./src
COPY package*.json ./
RUN nmp install

COPY . .
CMD [ "star" ]