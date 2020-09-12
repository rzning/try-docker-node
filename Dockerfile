FROM node:14

WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn build

EXPOSE 80

CMD [ "yarn", "start" ]
