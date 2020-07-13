# Higia Server

NodeJs Express Server with MongoDB to authorize users and robots.

No futuro este servidor sera usado para guardar dados do robo afim de treinar um modelo de inteligencia artificial personalizada para cada caso de uso.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

## Get Development Started

with yarn:
```shell
yarn install
yarn dev
yarn build
yarn test
```

with npm:
```shell
npm install
npm run dev
npm run build
npm run test
```

## Build and run on Docker

Create an Docker Image:
```shell
docker build -t higiaserver .
```
Run the Docker Image:
```shell
docker run -p 5000:5000 --name higiaserver -d higiaserver
```
-------------
##  Routes

Base Url: http://localhost:5000/api

| TYPE  | ROUTE | DESCRIPTION |
| - | - | - |
| GET | "/user"  | get an user |
| PUT | "/user" | update an user |
| POST | "/user" | create an user |
| Put | "/user" | update an user |
| GET | "/robots"  | get user robots |
