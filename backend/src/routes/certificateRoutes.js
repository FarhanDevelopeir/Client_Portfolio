const express = require('express');
const { addCertificate, getCertificates } = require('../controllers/certificateController');
const upload = require('../middlewares/fileUpload');
const router = express.Router();

router.post('/add', upload.single('image'), addCertificate);  // Route to add a certificate
router.get('/', getCertificates);     // Route to get all certificates

module.exports = router;
