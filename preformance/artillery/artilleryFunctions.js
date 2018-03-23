const faker = require('faker');

function randomAttractionID(userContext, events, done) {
  // generate data with faker:
  const id = faker.random.number({ min: 1, max: 10000 });
  // add variables to virtual user's context:
  userContext.vars.id = id;
  // continue with executing the scenario:
  return done();
}
module.exports = {
  randomAttractionID,
};
