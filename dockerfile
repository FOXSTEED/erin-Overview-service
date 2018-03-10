FROM node:8.10

WORKDIR /overview

RUN mkdir -p /overview

COPY . /overview

RUN npm install

EXPOSE 3002:3002

CMD ["npm", "start"]