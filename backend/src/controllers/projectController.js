const Project = require('../models/Project');
const uploadImage = require('../utils/cloudinaryUpload')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});


// Add a new project
exports.addProject = async (req, res) => {

  console.log(req.body);
  console.log(req.file);
  
  let image = null;
  if (req.file) {
    const filePath = req.file.path;
    image = await uploadImage(filePath)

  }
  const { title, description } = req.body;
  console.log('Uploaded Image URL:', image);
  
  try {
    const newProject = new Project({ title, image, description });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  const { id } = req.params; // Get the blog ID from the route parameters
  const { title, description } = req.body; // Get the updated fields from the request body
  let imageUrl = null;

  try {
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path);
      imageUrl = uploadResult;
    }
    // find project by id and update it
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description, ...(imageUrl && { image: imageUrl }) },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(updatedProject); // Send back the updated Project
  } catch (error) {
    res.status(500).json({ message: "Error with the project", error });
  }
};


// Delete Project
exports.deleteProject = async (req, res) => {
  const { id } = req.params; // Get the Project ID from the route parameters

  try {
    // Find Project by ID and delete it
    const deletedProject = await Project.findById(id);

     if (!deletedProject) {
       return res.status(404).json({ message: 'Project not found' });
     }
 
     if (deletedProject.image) {
      const imagePublicId = deletedProject.image.split('/').pop().split('.')[0];
      console.log(`Extracted public_id for Cloudinary: ${imagePublicId}`);

      // Attempt to delete the image from Cloudinary
      try {
        await cloudinary.uploader.destroy(imagePublicId);
        console.log(`Successfully deleted image from Cloudinary: ${imagePublicId}`);
      } catch (cloudinaryError) {
        console.error(`Image not found on Cloudinary or error occurred: `, cloudinaryError.message);
        console.log(`Proceeding to delete the Project from the database without stopping.`);
      }
    } else {
      console.log('No associated image found for this Project');
    }

    // Delete the Project from the database
    await Project.findByIdAndDelete(id);
    console.log(`Successfully deleted Project with ID: ${id}`);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the Project', error });
  }
};


// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
