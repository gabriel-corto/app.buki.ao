FROM node:18-alpine3.21

WORKDIR /usr/src/app

COPY packagae*.json pnpm-lock.yaml ./

RUN npm i -g pnpm@latest pnpm i

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "pnpm", "dev" ]
