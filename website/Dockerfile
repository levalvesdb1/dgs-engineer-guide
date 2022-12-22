
FROM node:lts as base

WORKDIR /app/node/app

COPY . /app/node/app/

FROM base as development

WORKDIR /app/node/app

RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]

FROM base as production
WORKDIR /app/node/app


RUN yarn install
RUN yarn build

FROM nginx:stable-alpine as deploy
WORKDIR /app/node/app

COPY . /app/node/app/

COPY --from=production /app/node/app/build /usr/share/nginx/html/

EXPOSE 80