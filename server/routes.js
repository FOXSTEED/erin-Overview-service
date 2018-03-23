const express = require('express');
const fetchAttraction = require('../db/seed/mongoDB/fetchAttraction');

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    const id = parseInt(req.params.id, 10);
    // if (parseInt(id, 10) > 199) {
    //   res.sendStatus(404);
    // }
    fetchAttraction(id, (doc, err) => {

      if (err) {
        console.log('ERR accessing doc from db', err);
        res.sendStatus(500);
      }
      const data = JSON.stringify(doc[0]);
      res.end(data);
    });
  });

module.exports = router;
