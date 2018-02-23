const puppy = require('random-puppy');

// let singleEntry = new Promise((resolve, reject) => {
//   // asynch random-puppy
//   puppy();
// })
// .then()
// // .then, 2nd puppy,
// // .then, 3rd puppy,
// // .then, resolve built object
// }

const getPuppies = async () => {
  let one = await puppy();
  let two = await puppy();
  let three = await puppy();
  
  // console.log([one, two, three]);

  return [one, two, three];
};

module.exports = getPuppies;
