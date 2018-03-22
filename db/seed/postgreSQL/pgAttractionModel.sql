DROP TABLE IF EXISTS attractions CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS ppltalkabout CASCADE;

CREATE TABLE attractions (
  id SERIAL PRIMARY KEY,
  itemid integer UNIQUE,
  attractionname text,
  attractiondescription text,
  attractionaddress text,
  phone text,
  website text,
  email text,
  rating integer,
  stars5 integer,
  stars4 integer,
  stars3  integer,
  stars2 integer,
  stars1 integer,
  reviews integer,
  cityrating integer,
  cityattractions integer,
  category text,
  opens integer,
  closes integer,
  duration text
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  imageurl text,
  comment text,
  username text,
  attid INTEGER REFERENCES attractions(itemid)
);

CREATE INDEX attid2_idx ON photos USING hash (attid);

CREATE TABLE ppltalkabout (
  id SERIAL PRIMARY KEY,
  avatar text,
  phrase text,
  mentions integer,
  attid INTEGER REFERENCES attractions(itemid)
);

CREATE INDEX attid3_idx ON ppltalkabout USING hash (attid);