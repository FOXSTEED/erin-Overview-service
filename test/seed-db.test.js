/* eslint no-undef: "off" */
const { Attraction } = require('../db/attraction.js');

describe('Seeding of database', () => {
  test('Should contain 200 items', () => {
    Attraction.count((err, count) => {
      if (err) {
        console.log('ERR retrieveing count', err);
      }
      expect(count).toEqual(200);
    });
  });

  test('A doc should contain 3 photo urls', () => {
    Attraction.findOne((err, doc) => {
      if (err) {
        console.log('ERR retrieving doc', err);
      }
      doc.photos.forEach((obj) => {
        expect(obj).toHaveProperty('url');
        expect(typeof obj.url).toBe('string');
        expect(obj.url).toEqual(expect.stringContaining(imgur));
      });
    });
  });
});

