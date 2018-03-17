const faker = require('faker');
const random = require('random-ext');

const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');

const generateAttractions = () => {
  const rating = calculateAverageRating(ratings);
  const reviews = totalNumberOfReviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;

  return {
    name,
    description: faker.lorem.sentences(),
    address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    rating,
    stars5: random.integer(200, 0),
    stars4: random.integer(100, 0),
    stars3: random.integer(100, 0),
    stars2: random.integer(100, 0),
    stars1: random.integer(100, 0),
    reviews,
    cityRating: random.integer(50, 1),
    cityAttractions: random.integer(500, 100),
    category: faker.random.words(),
    opens: random.integer(11, 1),
    closes: random.integer(11, 1),
    duration: `${Math.abs(Math.floor(faker.address.latitude()))} hours`,
  };
};

module.exports = generateAttractions;
