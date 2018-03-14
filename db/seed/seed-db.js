/* eslint-disable max-len */
const mongoose = require('mongoose');
const faker = require('faker');
const random = require('random-ext');
require('dotenv').config();

const getPhotos = require('./photos');
const { Attraction } = require('../attraction.js');
const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');

mongoose.connect(process.env.OVERVIEW_DATABASE_URL);

const generateSingle = (i, photos) => {
  // ratings array contains numbers of ratings per star amount as follows:
  // [5-stars, 4-stars, 3-stars, 2-stars, 1-star]
  const ratings = [random.integer(200, 0), random.integer(100, 0),
    random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];
  const rating = calculateAverageRating(ratings);
  const reviews = totalNumberOfReviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;

  return {
    id: i,
    name,
    description: faker.lorem.sentences(),
    address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    photos: [{ url: photos[0], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: photos[1], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: photos[2], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: photos[3], comment: faker.lorem.sentence(), user: faker.internet.userName() },
    ],
    rating,
    ratingBreakdowns: ratings,
    reviews,
    pplTalkAbout: [
      {
        avatar: faker.image.avatar(),
        phrase: faker.random.words(),
        mentions: random.integer(100, 1),
      },
      {
        avatar: faker.image.avatar(),
        phrase: faker.random.words(),
        mentions: random.integer(100, 1),
      },
      {
        avatar: faker.image.avatar(),
        phrase: faker.random.words(),
        mentions: random.integer(100, 1),
      },
    ],
    cityRating: random.integer(50, 1),
    cityAttractions: random.integer(500, 100),
    category: faker.random.words(),
    opens: random.integer(11, 1),
    closes: random.integer(11, 1),
    duration: `${Math.abs(Math.floor(faker.address.latitude()))} hours`,
  };
};

const generateData = async () => {
  const documentObjects = [];
  const photos = await getPhotos();

  for (let i = 0; i < 200; i += 1) {
    const fourPhotos = [];
    for (let j = 0; j < 4; j += 1) {
      fourPhotos.push(photos[random.integer(photos.length, 0)]);
    }
    const item = generateSingle(i, fourPhotos);
    documentObjects.push(item);
  }

  return documentObjects;
};

const seedDatabase = () => {
  const documentObjects = generateData();

  return documentObjects.then(data => (
    Attraction.create(data)
  ))
    .then(() => {
      mongoose.disconnect();
    })
    .catch((err) => {
      console.error(err);
    });
};

seedDatabase();
