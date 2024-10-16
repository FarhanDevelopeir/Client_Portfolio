const Blog = require('../models/Blog');
const uploadImage = require('../utils/cloudinaryUpload');

// Add a new blog
exports.addBlog = async (req, res) => {
  
  console.log(req.body);
  console.log(req.file);

  let image = null;
  if(req.file){
    const filePath = req.file.path
    image = await uploadImage(filePath)
  }

  const { title, description } = req.body;
  console.log('Uploaded Image URL:', image);

  try {
    const newBlog = new Blog({ title, image, description });
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
