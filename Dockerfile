FROM node:15.10.0-alpine3.10

RUN npm i -g http-server

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

WORKDIR ./build

CMD http-server . -p 8080 --proxy http://localhost:8080? # if not found, redirect to localhost
