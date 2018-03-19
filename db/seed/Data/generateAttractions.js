const faker = require('faker');
const random = require('random-ext');

const { calculateAverageRating, totalNumberOfReviews } = require('./helpers.js');

const generateAttractions = (i) => {
  const ratings = [random.integer(200, 0), random.integer(100, 0),
    random.integer(100, 0), random.integer(100, 0), random.integer(100, 0)];
  const rating = calculateAverageRating(ratings);
  const reviews = totalNumberOfReviews(ratings);
  const randomName = faker.random.words();
  const name = `${randomName} National Park`;

  return {
    username: name,
    itemid: i,
    attractiondescription: faker.lorem.sentences(),
    attractionaddress: faker.fake('{{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.country}}'),
    phone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    rating,
    stars5: ratings[0],
    stars4: ratings[1],
    stars3: ratings[2],
    stars2: ratings[3],
    stars1: ratings[4],
    reviews,
    cityrating: random.integer(50, 1),
    cityattractions: random.integer(500, 100),
    category: faker.random.words(),
    opens: random.integer(11, 1),
    closes: random.integer(11, 1),
    duration: `${Math.abs(Math.floor(faker.address.latitude()))} hours`,
  };
};

function getNextAttractionsData(t, batchIndex) {
  let data = null;
  if (batchIndex < 1000) {
    data = new Array(1500);
    for (let i = 0; i < 1500; i++) {
      data[i] = generateAttractions((i + 1) * batchIndex);
    }
  }
  return Promise.resolve(data);
}

module.exports = getNextAttractionsData;
