const axios = require('axios');

const getPhoto = (i) => {
  const url = `https://picsum.photos/590/420?image=${i}`;
  return axios.get(url)
    .then(res => res)
    .catch(() => {
      console.log('Resolving invalid photo id ...');
      return null;
    });
};

const getPhotos = () => {
  const promises = [];
  for (let i = 100; i < 500; i += 1) {
    promises.push(getPhoto(i));
  }
  return Promise.all(promises)
    .then((array) => {
      const result = [];
      for (let i = 0; i < array.length; i += 1) {
        if (array[i]) {
          result.push(array[i].config.url);
        }
      }
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getPhotos;
