const faker = require('faker');

const generatePhotos = (i) => {
  return {
    url: faker.image.nightlife(),
    comment: faker.lorem.sentence(),
    user: faker.internet.userName(),
    attID: i,
  };
};


function getNextPhotoData(t, index) {
  let data = null;
  if (index < 1000) {
    data = [];
    for (let j = 0; j < 5; j++) {
      const data2 = new Array(1500);
      for (let i = 0; i < 1500; i++) {
        data2[i] = generatePhotos(i);
      }
      data.concat(data2);
    }
  }
  return Promise.resolve(data);
}

module.exports = generatePhotos;
