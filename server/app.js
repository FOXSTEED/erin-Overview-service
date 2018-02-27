const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes.js');

const app = express();

mongoose.connect('mongodb://localhost/overview');

app.use(express.static(`${__dirname}/../client/public`));
app.use('/attractions', router);

module.exports = app;
