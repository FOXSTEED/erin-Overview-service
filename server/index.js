const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes.js');
const cors = require('cors');
require('dotenv').config();
require('newrelic');

const app = express();

mongoose.connect(process.env.OVERVIEW_DATABASE_URL);

app.use(cors());

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use('/:id', express.static(`${__dirname}/../client/public`));
app.use('/overview/app.js', express.static(`${__dirname}/../client/public`));
app.use('/overview/app-server.js', express.static(`${__dirname}/../client/public`));
app.use('/overview/styles.css', express.static(`${__dirname}/../client/public`));
app.use('/overview', router);

app.listen(3002, () => {
  console.log('Listening on port 3002 ...');
});
