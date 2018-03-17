const faker = require('faker');
const random = require('random-ext');

const generatePplTalk = (i) => {
  return {
    avatar: faker.image.avatar(),
    phrase: faker.random.words(),
    mentions: random.integer(100, 1),
    attID: i,
  };
};

module.exports = generatePplTalk;
