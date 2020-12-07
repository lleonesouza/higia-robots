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
RUN mkdir prisma
COPY ./prisma/schema.prisma ./prisma
COPY ./prisma/.env ./prisma
RUN yarn install --production
RUN yarn generate
# RUN yarn migrate
# RUN yarn migrate:up

##################
### Last Stage ###
FROM node:15.3.0-alpine3.10
WORKDIR /usr/src/app


COPY --from=build /usr/src/app/build ./build
COPY --from=modules /usr/src/app/node_modules ./node_modules
RUN mkdir prisma
COPY ./prisma/.env ./prisma
COPY ./prisma/schema.prisma ./prisma
COPY ./prisma/dev.db ./prisma
COPY ./package.json ./

RUN mkdir -p /tmp/downloads

EXPOSE 5001

CMD [ "node", "./build/bundle.js" ]

