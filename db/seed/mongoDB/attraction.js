const faker = require('faker');
const random = require('random-ext');

const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');

const randomName = faker.random.words();
// ratings array contains numbers of ratings per star amount as follows:
// [5-stars, 4-stars, 3-stars, 2-stars, 1-star]
const ratings = [random.integer(200, 0), random.integer(100, 0),
  random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];

const attraction = {
  name: `${randomName} National Park`,
  description: faker.lorem.sentences(),
  address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
  phone: faker.phone.phoneNumberFormat(),
  website: faker.internet.url(),
  email: faker.internet.email(),
  photos: [{ url: faker.image.nightlife(), comment: faker.lorem.sentence(), user: faker.internet.userName() },
    { url: faker.image.nightlife(), comment: faker.lorem.sentence(), user: faker.internet.userName() },
    { url: faker.image.nightlife(), comment: faker.lorem.sentence(), user: faker.internet.userName() },
    { url: faker.image.nightlife(), comment: faker.lorem.sentence(), user: faker.internet.userName() },
  ],
  rating: calculateAverageRating(ratings),
  ratingBreakdowns: ratings,
  reviews: totalNumberOfReviews(ratings),
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

module.exports = attraction;
