FROM node:8.10

WORKDIR /src/app

RUN mkdir -p /src/app

COPY . /src/app

RUN npm install

EXPOSE 3002:3002

CMD ["npm", "start"]