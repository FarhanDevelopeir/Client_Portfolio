const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  published_date: { type: Date, default: Date.now },
  updated_at: { type: Date }  // Set on update
});

// Middleware to update `updated_at` before each save
blogSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();  // Update the `updated_at` field
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
