DROP TABLE IF EXISTS attraction CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS pplTalkAbout CASCADE;

CREATE TABLE attraction (
  id SERIAL PRIMARY KEY,
  itemid integer UNIQUE,
  attractioname text,
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
  attID INTEGER REFERENCES attraction(itemid)
);

CREATE TABLE pplTalkAbout (
  id SERIAL PRIMARY KEY
  avatar text,
  phrase text,
  mentions integer,
  attID INTEGER REFERENCES attraction(itemid)
);