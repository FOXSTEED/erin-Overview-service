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

function getNextPplTalkData(t, pageIndex) {
  let data = null;
  if (pageIndex < 999) {
    data = [];
    for (let j = 0; j < 4; j++) {
      const data2 = new Array(333);
      for (let i = 0; i < 333; i++) {
        data2[i] = generatePplTalk(i);
      }
      data.concat(data2);
    }
  }
  return Promise.resolve(data);
}

module.exports = generatePplTalk;
