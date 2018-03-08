const mongoose = require('mongoose');
const { Attraction } = require('../attraction.js');
const faker = require('faker');
const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');
const getPuppies = require('./puppy.js');
const random = require('random-ext');

mongoose.connect('mongodb://database/overview');

const generateSingle = async (i) => {
  // ratings array contains numbers of ratings per star amount as follows:
  // [5-stars, 4-stars, 3-stars, 2-stars, 1-star]
  const ratings = [random.integer(200, 0), random.integer(100, 0),
    random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];
  const rating = calculateAverageRating(ratings);
  const reviews = totalNumberOfReviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;
  const puppies = await getPuppies();

  return {
    id: i,
    name,
    description: faker.lorem.sentences(),
    address: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    photos: [{ url: puppies[0], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: puppies[1], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: puppies[2], comment: faker.lorem.sentence(), user: faker.internet.userName() },
      { url: puppies[3], comment: faker.lorem.sentence(), user: faker.internet.userName() },
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

const seedDatabase = () => {
  const promises = [];
  for (let i = 0; i < 200; i += 1) {
    const item = generateSingle(i);
    promises.push(item);
  }

  Promise.all(promises)
    .then((data) => {
      let count = 0;

      data.forEach((obj) => {
        const attraction = new Attraction(obj);
        attraction.save((err) => {
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

// exports.generateSingle = generateSingle;

// const test = async () => {
//   const doc = await generateSingle(0);
//   console.log(doc);
// };

// test();
