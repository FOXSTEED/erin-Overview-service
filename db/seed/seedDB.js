const seeder = require('mongoose-seed');
const data = require('./data/attraction');
require('dotenv').config();


// Connect to MongoDB via mongoose
seeder.connect(process.env.OVERVIEW_DATABASE_URL, () => {
  // load Mongose models
  seeder.loadModels([
    'db/seed/data/attractionModel.js',
  ]);
  // clear specific collections
  seeder.clearModels(['Attraction'],() => {
    // callback to populate DB once collections have cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
