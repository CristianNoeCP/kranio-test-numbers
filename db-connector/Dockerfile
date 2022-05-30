FROM node:12-alpine

LABEL name="node12:local"

COPY package.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

WORKDIR /usr/src/app
