FROM node:14-alpine

WORKDIR /usr/src/app

LABEL name="node14:local"

COPY package.json ./

RUN npm install

COPY . .

