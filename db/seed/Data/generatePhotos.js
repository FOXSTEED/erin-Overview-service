const faker = require('faker');

const generatePhotos = (i) => {
  return {
    imageurl: faker.image.nightlife(),
    comment: faker.lorem.sentence(),
    username: faker.internet.userName(),
    attID: i,
  };
};


function getNextPhotoData(t, batchIndex) {
  let data = null;
  if (batchIndex < 2000) {
    data = [];
    const itemIndex = batchIndex * 2000;
    for (let j = 0; j < 3; j++) {
      const data2 = new Array(2000);
      for (let i = 0; i < 2000; i++) {
        data2[i] = generatePhotos(i + 1 + itemIndex);
      }
      data.concat(data2);
    }
  }
  return Promise.resolve(data);
}

module.exports = getNextPhotoData;
