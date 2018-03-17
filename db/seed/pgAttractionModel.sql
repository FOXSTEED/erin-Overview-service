CREATE TABLE attraction (
  id SERIAL PRIMARY KEY,
  name varchar(150) not null,
  description varchar() not null,
  address varchar(150) not null,
  phone varchar(15) not null,
  website varchar(150) not null,
  email varchar(150) not null,
  rating integer,
  ratingBreakdowns [Number, Number, Number, Number, Number],
  reviews integer,
  cityRating integer,
  cityAttractions integer,
  category varchar(100) not null,
  opens integer,
  closes integer,
  duration varchar(150) not null,
)

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url varchar() not null,
  comment varchar() not null,
  user varchar() not null,
  attID INTEGER REFERENCES attraction (id),
)

CREATE TABLE ratingBreakdowns (
 id SERIAL PRIMARY Key,
 stars5 integer,
 stars4 integer,
 stars3  integer,
 stars2 integer,
 stars1 integer,
 attID INTEGER REFERENCES attraction (id),
)

CREATE TABLE PplTalkAbout (
  avatar varchar() not null,
  phrase varchar() not null,
  mentions integer,
  attID INTEGER REFERENCES attraction (id),
)