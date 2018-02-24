module.exports = {
  // ratings array contains numbers of ratings per star amount as follows: 
  // [5-stars, 4-stars, 3-stars, 2-stars, 1-star]
  calculateAverageRating: (arr) => {
    let num = 0;
    let denom = 0;

    for (let i = 0; i < arr.length; i += 1) {
      num += arr[i] * (10 - (i * 2));
      denom += arr[i];
    }

    const result = Math.ceil(num / denom);
    return result;
  },

  totalNumberOfReviews: (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum;
  },
};
