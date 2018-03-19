const faker = require('faker');

const generatePhotos = (i) => {
  return {
    url: faker.image.nightlife(),
    comment: faker.lorem.sentence(),
    user: faker.internet.userName(),
    attID: i,
  };
};


function getNextPhotoData(t, pageIndex) {
  let data = null;
  if (pageIndex < 1000) {
    data = new Array(1000);
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 250; i++) {
        data[i] = generatePhotos();
      }
    }
  }
  return Promise.resolve(data);
}

module.exports = generatePhotos;
