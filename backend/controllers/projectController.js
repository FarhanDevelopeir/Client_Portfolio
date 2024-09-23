const Project = require('../models/Project');

// Add a new project
exports.addProject = async (req, res) => {
  const { title, img, description } = req.body;

  try {
    const newProject = new Project({ title, img, description });
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
