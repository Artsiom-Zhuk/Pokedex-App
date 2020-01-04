FROM node:10.16.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i

COPY . /usr/src/app

RUN npm run build

EXPOSE 8282

CMD ["npm", "start"]