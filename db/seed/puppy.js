const puppy = require('random-puppy');

const getPuppies = async () => {
  const one = await puppy();
  const two = await puppy();
  const three = await puppy();
  const four = await puppy();

  return [one, two, three, four];
};

module.exports = getPuppies;
