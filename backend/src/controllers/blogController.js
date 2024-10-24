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

// Update Blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;  // Get the blog ID from the route parameters
  const { title, description } = req.body;  // Get the updated fields from the request body
  let imageUrl = null;

  try {
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path);
      imageUrl = uploadResult;
    }
  // find blog by id and update it
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        description,
        ...(imageUrl && { image: imageUrl }),  // Only update the image if a new one is provided
      },
      { new: true }  // Return the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(updatedBlog);  // Send back the updated blog
  } catch (error) {
    res.status(500).json({ message: 'Error updating the blog', error });
  }
};


// Delete Blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params; // Get the blog ID from the route parameters

  try {
    // Find blog by ID and delete it
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the blog', error });
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
