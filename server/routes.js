const express = require('express');
const { Attraction } = require('../db/attraction.js');

const router = express.Router();

router.route('/:id/overview')
  .get((req, res) => {
    const id = req.params.id;
    if (parseInt(id, 10) > 199) {
      res.sendStatus(404);
    }
    Attraction.findOne({ id })
      .exec((err, doc) => {
        if (err) {
          console.log('ERR accessing doc from db', err);
          res.sendStatus(500);
        }
        const data = JSON.stringify(doc);
        res.end(data);
      });
  });

module.exports = router;
