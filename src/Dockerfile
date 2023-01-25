FROM node:18-slim as buildStage

LABEL stage="builder"

RUN apt update

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM node:18-slim

LABEL author="João B S Alves<batistadasilvaalvesjoao@gmail.com>"

WORKDIR /app

COPY --from=buildStage /app/ /app/

EXPOSE 8080

CMD [ "npm", "start" ]