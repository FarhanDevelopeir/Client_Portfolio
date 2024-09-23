const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;