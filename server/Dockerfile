FROM node:15.3.0-alpine3.10 as build
WORKDIR /usr/src/app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

################
### Second Stage
FROM node:15.3.0-alpine3.10 as modules
WORKDIR /usr/src/app
COPY ./package.json ./
RUN yarn install --production

##################
### Last Stage ###
FROM node:15.3.0-alpine3.10
WORKDIR /usr/src/app


COPY --from=build /usr/src/app/build ./build
COPY --from=modules /usr/src/app/node_modules ./node_modules
COPY ./package.json ./

EXPOSE 5000

CMD [ "node", "./build/bundle.js" ]

