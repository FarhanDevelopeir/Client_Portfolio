const express = require('express');
const { addProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController');
const upload = require('../middlewares/fileUpload')
const router = express.Router();

router.post('/add', upload.single('image'), addProject);  // Route to add a project
router.get('/', getProjects);     // Route to get all projects
router.put('/edit/:id', upload.single('image'), updateProject); 
router.delete('/delete/:id', deleteProject);

module.exports = router;
