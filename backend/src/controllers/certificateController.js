const Certificate = require("../models/Certificate");
const uploadImage = require("../utils/cloudinaryUpload");

// Add a new certificate
exports.addCertificate = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  let image = null;
  if (req.file) {
    const filePath = req.file.path;
    image = await uploadImage(filePath);
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

// Update Certificate
exports.updateCertificate = async (req, res) => {
  const { id } = req.params; // Get the blog ID from the route parameters
  const { title, description } = req.body; // Get the updated fields from the request body
  let imageUrl = null;

  try {
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path);
      imageUrl = uploadResult;
    }
    // find blog by id and update it
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      id,
      { title, description, ...(imageUrl && { image: imageUrl }) },
      { new: true }
    );
    if (!updatedCertificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(updatedCertificate); // Send back the updated blog
  } catch (error) {
    res.status(500).json({ message: "Error with the certificate", error });
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
