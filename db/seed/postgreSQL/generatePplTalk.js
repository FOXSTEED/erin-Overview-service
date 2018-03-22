const faker = require('faker');
const random = require('random-ext');

const generatePplTalk = (i) => {
  return {
    avatar: faker.image.avatar(),
    phrase: faker.random.words(),
    mentions: random.integer(100, 1),
    attid: i,
  };
};

function getNextPplTalkData(t, batchIndex) {
  let data = null;
  if (batchIndex < 4000) {
    data = [];
    const itemIndex = batchIndex * 5000;
    data = new Array(5000);
    for (let i = 0; i < 5000; i++) {
      data[i] = generatePplTalk(i + 1 + itemIndex);
    }
  }
  return Promise.resolve(data);
}

module.exports = getNextPplTalkData;
