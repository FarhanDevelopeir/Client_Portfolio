const Project = require('../models/Project');
const uploadImage = require('../utils/cloudinaryUpload')


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

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
