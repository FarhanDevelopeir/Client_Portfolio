const Blog = require('../models/Blog');
const uploadImage = require('../utils/cloudinaryUpload');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

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
    // const deletedBlog = await Blog.findByIdAndDelete(id);

    // if (!deletedBlog) {
    //   return res.status(404).json({ message: 'Blog not found' });
    // }

    // res.status(200).json({ message: 'Blog deleted successfully' });
     // Find blog by ID
     const deletedBlog = await Blog.findById(id);

     if (!deletedBlog) {
       return res.status(404).json({ message: 'Blog not found' });
     }
 
     if (deletedBlog.image) {
      const imagePublicId = deletedBlog.image.split('/').pop().split('.')[0];
      console.log(`Extracted public_id for Cloudinary: ${imagePublicId}`);

      // Attempt to delete the image from Cloudinary
      try {
        await cloudinary.uploader.destroy(imagePublicId);
        console.log(`Successfully deleted image from Cloudinary: ${imagePublicId}`);
      } catch (cloudinaryError) {
        console.error(`Image not found on Cloudinary or error occurred: `, cloudinaryError.message);
        console.log(`Proceeding to delete the blog from the database without stopping.`);
      }
    } else {
      console.log('No associated image found for this blog');
    }

    // Delete the blog from the database
    await Blog.findByIdAndDelete(id);
    console.log(`Successfully deleted blog with ID: ${id}`);
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
