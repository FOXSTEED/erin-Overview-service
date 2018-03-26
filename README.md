# System Design Capstone - Overview

> Take and exsisting app and redesign the back end functionallity to include 10M datapoints & refactor to allow for 1K requests per second in deployment.

## Related Projects

  ### Front End Capstone Project:
  - https://github.com/BoxLunch89

  ### System Design Capstone Project: 
  - https://github.com/FOXSTEED/Jeff-reviews
  - https://github.com/FOXSTEED/ivy-service2
  - https://github.com/FOXSTEED/trevor-nearby-service
  - https://github.com/FOXSTEED/erin-Overview-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> Launch with all System Design Capstone retated projects. 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB 3.6.2

## Development
> Clone this repo into your project folder. Then follow the installation instructions below. 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Ensure to have MongoDB installed. Then in a new tab start mongod:
```sh
mongod
```

Then seed the database using: 
```sh
npm run seed
```

Then create a .env file in the main overview-service directory that specifices the host name and port for this app. 
For example: 
```sh
PORT: 3002
HOST: 127.0.0.1
```

Next Configure and run the app:
```sh
npm start
```

## Acknowledgements
- [@zinoki](https://github.com/zinoki) for creating the base proxy server for this project. 
- [@emsando](https://github.com/emsando) for creating the front end for the overview-service.
