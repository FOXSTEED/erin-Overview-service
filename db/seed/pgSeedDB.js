const getNextPhotoData = require('./Data/generatePhotos');
const getNextAttractionsData = require('./Data/generateAttractions');
const getNextPplTalkData = require('./Data/generatePplTalk');

const pgp = require('pg-promise')({
  capSQL: true, // generate capitalized SQL
});

const conection = {
  host: 'localhost',
  port: 5432,
  database: 'overview',
};

const db = pgp(conection); // your database object

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csAttractions = new pgp.helpers.ColumnSet([
  'itemid',
  'attractionname',
  'attractiondescription',
  'attractionaddress',
  'phone',
  'website',
  'email',
  'rating',
  'stars5',
  'stars4',
  'stars3',
  'stars2',
  'stars1',
  'reviews',
  'cityrating',
  'cityattractions',
  'category',
  'opens',
  'closes',
  'duration',
], { table: 'attractions' });

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csPhotos = new pgp.helpers.ColumnSet([
  'imageurl',
  'comment',
  'username',
  'attID',
], { table: 'photos' });

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csPplTalkAbout = new pgp.helpers.ColumnSet([
  'avatar',
  'phrase',
  'mentions',
  'attID',
], { table: 'pplTalkAbout' });

// Attraction Table
db.tx('massive-insert', (t) => {
  return t.sequence((index) => {
    return getNextAttractionsData(t, index)
      .then((data) => {
        if (data) {
          const insert = pgp.helpers.insert(data, csAttractions);
          return t.none(insert);
        }
      });
  });
})
  .then((data) => {
    // COMMIT has been executed
    console.log('Total batches:', data.total, ', Duration:', data.duration);
  })
  .catch((error) => {
    // ROLLBACK has been executed
    console.log(error);
  });

// Photo Table
db.tx('massive-insert', (t) => {
  return t.sequence((index) => {
    return getNextAttractionsData(t, index)
      .then((data) => {
        if (data) {
          const insert = pgp.helpers.insert(data, csAttractions);
          return t.none(insert);
        }
      });
  });
})
  .then((data) => {
    // COMMIT has been executed
    console.log('Total batches:', data.total, ', Duration:', data.duration);
  })
  .catch((error) => {
    // ROLLBACK has been executed
    console.log(error);
  });

// PplTalk table
db.tx('massive-insert', (t) => {
  return t.sequence((index) => {
    return getNextAttractionsData(t, index)
      .then((data) => {
        if (data) {
          const insert = pgp.helpers.insert(data, csAttractions);
          return t.none(insert);
        }
      });
  });
})
  .then((data) => {
    // COMMIT has been executed
    console.log('Total batches:', data.total, ', Duration:', data.duration);
  })
  .catch((error) => {
    // ROLLBACK has been executed
    console.log(error);
  });

