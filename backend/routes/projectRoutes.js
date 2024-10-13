const express = require('express');
const { addProject, getProjects } = require('../controllers/projectController');
const upload = require('../middlewares/fileUpload')
const router = express.Router();

router.post('/add', upload.single('image'), addProject);  // Route to add a project
router.get('/', getProjects);     // Route to get all projects

module.exports = router;
