const pgp = require('pg-promise')({
  capSQL: true // generate capitalized SQL 
});

const cn = {
  host: '',
  port: ,
  database: '',
  user: '',
  password: '',
}

const db = pgp(cn); // your database object

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csAttractions = new pgp.helpers.ColumnSet([
  'id',
  'name',
  'description',
  'address',
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
  'cityRating',
  'cityAttractions',
  'category',
  'opens',
  'closes',
  'duration',
], { table: 'attractions' });

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csPhotos = new pgp.helpers.ColumnSet([
  'id',
  'url',
  'comment',
  'user',
  'attID',
], { table: 'photos' });

// Creating a reusable/static ColumnSet for generating INSERT queries:
const csPplTalkAbout = new pgp.helpers.ColumnSet([
  'avatar',
  'phrase',
  'mentions',
  'attID',
], { table: 'pplTalkAbout' });
