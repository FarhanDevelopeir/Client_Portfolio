const express = require('express');
const { addProject, getProjects } = require('../controllers/projectController');
const router = express.Router();

router.post('/add', addProject);  // Route to add a project
router.get('/', getProjects);     // Route to get all projects

module.exports = router;
