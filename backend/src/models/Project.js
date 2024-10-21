const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  published_date: { type: Date, default: Date.now },
  updated_at: { type: Date }
});

projectSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();  
  }
  next();
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
