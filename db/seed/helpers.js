module.exports = {
  rating: (arr) => {
    let num = 0;
    let denom = 0; 

    for (let i = 0; i < arr.length; i += 1) {
      num += arr[i] * (10 - (i * 2));
      denom += arr[i];
    }

    const result = Math.ceil(num / denom);
    return result;
  },
  reviews: (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum;
  },

};
