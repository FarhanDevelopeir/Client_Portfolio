const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String, required: true },
  // published_date: { type: Date, required: true, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
