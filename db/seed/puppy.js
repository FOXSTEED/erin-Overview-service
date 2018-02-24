const puppy = require('random-puppy');

const getPuppies = async () => {
  let one = await puppy();
  let two = await puppy();
  let three = await puppy();

  return [one, two, three];
};

module.exports = getPuppies;
