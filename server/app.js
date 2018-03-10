const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes.js');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.OVERVIEW_DATABASE_URL);

app.use(cors());

app.use('/:id', express.static(`${__dirname}/../client/public`));
app.use('/overview/bundle.js', express.static(`${__dirname}/../client/public`));
app.use('/overview', router);

module.exports = app;
