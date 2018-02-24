const mongoose = require('mongoose');

const attrSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  address: String,
  phone: String,
  website: String,
  email: String,
  photos: [{ url: String, comment: String, user: String }],
  rating: Number,
  ratingBreakdowns: [Number, Number, Number, Number, Number],
  reviews: Number,
  pplTalkAbout: [{ phrase: String }],
  cityRating: Number,
  cityAttractions: Number,
  category: String,
  hours: String,
  duration: String,
});

const Attraction = mongoose.model('Attraction', attrSchema);

exports.Attraction = Attraction;
exports.attrSchema = attrSchema;
