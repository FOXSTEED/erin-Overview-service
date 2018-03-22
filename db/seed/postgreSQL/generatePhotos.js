const faker = require('faker');

const generatePhotos = (i) => {
  return {
    imageurl: faker.image.nightlife(),
    comment: faker.lorem.sentence(),
    username: faker.internet.userName(),
    attid: i,
  };
};


function getNextPhotosData(t, batchIndex) {
  let data = null;
  if (batchIndex < 2000) {
    const itemIndex = batchIndex * 5000;
    data = new Array(5000);
    for (let i = 0; i < 5000; i++) {
      data[i] = generatePhotos(i + 1 + itemIndex);
    }
  }
  return Promise.resolve(data);
}

module.exports = getNextPhotosData;
