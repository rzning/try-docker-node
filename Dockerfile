FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
