const Certificate = require('../models/Certificate');
const uploadImage = require('../utils/cloudinaryUpload');

// Add a new certificate
exports.addCertificate = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  let image = null;
  if (req.file) {
    const filePath = req.file.path;
    image = await uploadImage(filePath)

  }
  const { title, description } = req.body;
  console.log("Image URL: ", image);
  
  try {
    const newCertificate = new Certificate({ title, image, description });
    await newCertificate.save();
    res.status(201).json(newCertificate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all certificates
exports.getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
