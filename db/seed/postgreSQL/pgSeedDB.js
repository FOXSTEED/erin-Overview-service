const getNextPhotosData = require('./generatePhotos');
const getNextAttractionsData = require('./generateAttractions');
const getNextPplTalkData = require('./generatePplTalk');

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
  'attid',
], { table: 'photos' });

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csPplTalkAbout = new pgp.helpers.ColumnSet([
  'avatar',
  'phrase',
  'mentions',
  'attid',
], { table: 'ppltalkabout' });

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
    console.log('Total Attractions batches:', data.total, ', Duration:', data.duration);
  })

  // Photo Table
  .then(db.tx('massive-insert', (t) => {
    return t.sequence((index) => {
      return getNextPhotosData(t, index)
        .then((data) => {
          if (data) {
            const insert = pgp.helpers.insert(data, csPhotos);
            return t.none(insert);
          }
        });
    });
  }))
  .then((data) => {
    // COMMIT has been executed
    console.log('Total Photo batches:', data.total, ', Duration:', data.duration);
  })
  
  // PplTalk table
  .then(db.tx('massive-insert', (t) => {
    return t.sequence((index) => {
      return getNextPplTalkData(t, index)
        .then((data) => {
          if (data) {
            const insert = pgp.helpers.insert(data, csPplTalkAbout);
            return t.none(insert);
          }
        });
    });
  }))
  .then((data) => {
    // COMMIT has been executed
    console.log('Total PplTalk batches:', data.total, ', Duration:', data.duration);
  })
  .catch((error) => {
    // ROLLBACK has been executed
    console.log(error);
  });

