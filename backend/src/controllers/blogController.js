const Blog = require('../src/models/Blog');

// Add a new blog
exports.addBlog = async (req, res) => {
  const { title, img, description, published_date } = req.body;

  try {
    const newBlog = new Blog({ title, img, description, published_date });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
