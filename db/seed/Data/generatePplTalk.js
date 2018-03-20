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

function getNextPplTalkData(t, batchIndex) {
  let data = null;
  if (batchIndex < 2000) {
    data = [];
    const itemIndex = batchIndex * 2000;
    for (let j = 0; j < 3; j++) {
      const data2 = new Array(2000);
      for (let i = 0; i < 2000; i++) {
        data2[i] = generatePplTalk(i + 1 + itemIndex);
      }
      data.concat(data2);
    }
  }
  return Promise.resolve(data);
}

module.exports = getNextPplTalkData;
