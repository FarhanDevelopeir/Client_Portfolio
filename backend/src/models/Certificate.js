const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  published_date: { type: Date, default: Date.now },
  updated_at: { type: Date }  
});

certificateSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();  // Update the `updated_at` field
  }
  next();
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
