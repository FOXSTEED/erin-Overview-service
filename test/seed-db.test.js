/* eslint no-undef: "off" */
const helpers = require('../db/seed/helpers.js')
const { Attraction } = require('../db/attraction.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/overview');

describe('helper functions', () => {
  test('Calculates correct overall rating', () => {
    let ratings = [300, 100, 60, 30, 30]; 
    let overall = helpers.calculateAverageRating(ratings);
    expect(overall).toEqual(4.5);

    ratings = [30, 30, 60, 200, 300];
    overall = helpers.calculateAverageRating(ratings);
    expect(overall).toEqual(2);
  });

  test('Calculates total number of reviews', () => {
    let ratings = [300, 100, 60, 30, 30];
    let total = helpers.totalNumberOfReviews(ratings);
    expect(total).toEqual(520);

    ratings = [300, 5000, 60, 30, 30];
    total = helpers.totalNumberOfReviews(ratings);
    expect(total).toEqual(5420);
  });
});

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

