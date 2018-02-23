const mongoose = require('mongoose');
const attr = require('../attraction.js');
const faker = require('faker');
const helpers = require('./helpers.js');
const getPuppies = require('./puppy.js');
const random = require('random-ext');

mongoose.connect('mongodb://localhost/overview');

const generateSingle = async (i) => {
  const ratings = [random.integer(100, 0), random.integer(100, 0),
    random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];
  const rating = helpers.rating(ratings);
  const reviews = helpers.reviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;
  const puppies = await getPuppies();

  return {
    id: i,
    name,
    description: faker.lorem.sentence(),
    address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    photos: [{ url: puppies[0], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: puppies[1], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: puppies[2], comment: faker.lorem.sentence(), user: faker.internet.userName() },
    ],
    rating,
    ratingBreakdowns: ratings,
    reviews,
    pplTalkAbout: [{ phrase: faker.random.words() },
      { phrase: faker.random.words() },
      { phrase: faker.random.words() }],
    cityRating: random.integer(50, 1),
    cityAttractions: random.integer(500, 100),
    category: faker.random.words(),
    opens: random.integer(11, 1),
    closes: random.integer(11, 1),
    duration: `${Math.abs(Math.floor(faker.address.latitude()))} hours`,
  };
};

const seedDatabase = () => {
  const promises = [];
  for (let i = 0; i < 200; i += 1) {
    const item = generateSingle(i);
    promises.push(item);
  }
  Promise.all(promises)
    .then((data) => {
      let count = 0
      data.forEach((obj) => {
        let attraction = new attr.Attraction(obj);
        attraction.save((err, doc) => {
          if (err) {
            console.log('Error saving doc to db', err);
          } else {
            count += 1;
            if (count === 199) {
              mongoose.disconnect();
              console.log('Saved 200 items to database!');
            }
          }
        });
      });
    });
};

seedDatabase();
