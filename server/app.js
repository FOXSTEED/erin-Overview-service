const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes.js');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/overview');

app.use(cors());
app.use(express.static(`${__dirname}/../client/public`));
app.use('/listings/:id', express.static(`${__dirname}/../client/public`));
app.use('/attractions', router);

module.exports = app;
