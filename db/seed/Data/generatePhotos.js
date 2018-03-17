const faker = require('faker');

const generatePhotos = (i) => {
  return {
    url: faker.image.nightlife(),
    comment: faker.lorem.sentence(),
    user: faker.internet.userName(),
    attID: i,
  }
}

module.exports = generatePhotos;
