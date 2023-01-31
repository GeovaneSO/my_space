FROM node:16.15.1

WORKDIR /app

COPY "package.json" .

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "start:dev"]

