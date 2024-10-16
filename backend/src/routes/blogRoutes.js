const express = require('express');
const { addBlog, getBlogs } = require('../controllers/blogController');
const upload = require('../middlewares/fileUpload');
const router = express.Router();

router.post('/add', upload.single('image'), addBlog);  // Route to add a blog
router.get('/', getBlogs);     // Route to get all blogs

module.exports = router;
