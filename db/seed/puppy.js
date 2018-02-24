const puppy = require('random-puppy');

const getPuppies = async () => {
  const one = await puppy();
  const two = await puppy();
  const three = await puppy();

  return [one, two, three];
};

module.exports = getPuppies;
