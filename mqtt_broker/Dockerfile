FROM node:15.3.0-alpine3.10
WORKDIR /usr/src/app
COPY ./package.json ./
COPY ./aedes-server.js ./
RUN yarn install --production

EXPOSE 5000

CMD [ "node", "./aedes-server.js" ]

