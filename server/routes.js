const express = require('express');
const { Attraction } = require('../db/attraction.js');

const router = express.Router();

router.route('/:id/overview')
  .get((req, res) => {
    console.log(req.params.id);
    console.log('connection from client');
    res.end('Connection to server and router');
  });

module.exports = router;
