/* eslint no-undef: "off" */
const { Attraction } = require('../db/attraction.js');

describe('Seeding of database', () => {
  test('Should contain 200 items', () => {
    Attraction.count((err, count) => {
      if (err) {
        console.log(err);
      }
      expect(count).toEqual(200);
    });
  });
});
