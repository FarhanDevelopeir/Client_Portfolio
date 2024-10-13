const Certificate = require('../src/models/Certificate');

// Add a new certificate
exports.addCertificate = async (req, res) => {
  const { title, img, description } = req.body;

  try {
    const newCertificate = new Certificate({ title, img, description });
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
