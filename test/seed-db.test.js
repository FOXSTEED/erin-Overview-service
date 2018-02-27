/* eslint no-undef: "off" */
const { Attraction } = require('../db/attraction.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/overview');

describe('Seeding of database', () => {
  test('Should contain 200 items', (done) => {
    expect.assertions(1);
    Attraction.count((err, count) => {
      if (err) {
        console.log(err);
      }
      expect(count).toEqual(200);
      done();
    });
  });

  test('A doc should contain 3 photo urls', (done) => {
    expect.assertions(9);
    Attraction.findOne((err, doc) => {
      if (err) {
        console.log('ERR retrieving doc', err);
      }
      doc.photos.forEach((obj) => {
        expect(obj).toHaveProperty('url');
        expect(typeof obj.url).toBe('string');
        expect(obj.url).toEqual(expect.stringContaining('imgur'));
      });
      done();
    });
  });
});

