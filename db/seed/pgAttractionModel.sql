DROP TABLE IF EXISTS attraction;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS pplTalkAbout;

CREATE TABLE attraction (
  id SERIAL PRIMARY KEY,
  itemid integer,
  username text,
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
  attID INTEGER REFERENCES attraction (id)
);

CREATE TABLE pplTalkAbout (
  avatar text,
  phrase text,
  mentions integer,
  attID INTEGER REFERENCES attraction (id)
);