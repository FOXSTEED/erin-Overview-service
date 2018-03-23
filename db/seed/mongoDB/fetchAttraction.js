const MongoClient = require('mongodb').MongoClient;

let collection;
MongoClient.connect('mongodb://localhost/').then((client) => {
  console.log('Conected to the Server!')
  const db = client.db('overview');
  collection = db.collection('attractions');
});

const fetchAttraction = (id, callback) => {
  collection.find({ id }).toArray((err, doc) => {
    if (err) {
      console.log('ERROR - Fetching Data', err);
    }
    console.log('SUCESS - Found Data!');
    callback(doc);
  });
};

module.exports = fetchAttraction;
