const faker = require('faker');
const random = require('random-ext');

const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');

const attraction = [];

for (let i = 0; i < 10000; i += 1) {
  // ratings array contains numbers of ratings per star amount as follows:
  // [5-stars, 4-stars, 3-stars, 2-stars, 1-star]
  const ratings = [random.integer(200, 0), random.integer(100, 0),
    random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];
  const rating = calculateAverageRating(ratings);
  const reviews = totalNumberOfReviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;
  attraction.push({
    id: i,
    name,
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
  });
}

// Data array contianing seed - documents orginized by Model
// Format need for mongoose-seed library
const data = [
  {
    model: 'Attraction',
    documents: attraction,
  },
];

module.exports = data;
