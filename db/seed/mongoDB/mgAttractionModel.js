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
  pplTalkAbout: [{ avatar: String, phrase: String, mentions: Number }],
  cityRating: Number,
  cityAttractions: Number,
  category: String,
  opens: Number,
  closes: Number,
  duration: String,
});

const Attraction = mongoose.model('Attraction', attrSchema);

module.exports = Attraction;
