const Certificate = require("../models/Certificate");
const uploadImage = require("../utils/cloudinaryUpload");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

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
  const { id } = req.params; // Get the Certificate ID from the route parameters
  const { title, description } = req.body; // Get the updated fields from the request body
  let imageUrl = null;

  try {
    if (req.file) {
      const uploadResult = await uploadImage(req.file.path);
      imageUrl = uploadResult;
    }
    // find Certificate by id and update it
    const updatedCertificate = await Certificate.findByIdAndUpdate(
      id,
      { title, description, ...(imageUrl && { image: imageUrl }) },
      { new: true }
    );
    if (!updatedCertificate) {
      return res.status(404).json({ message: "Certificate not found" });
    }
    res.status(200).json(updatedCertificate); // Send back the updated Certificate
  } catch (error) {
    res.status(500).json({ message: "Error with the certificate", error });
  }
};


// Delete Certificate
exports.deleteCertificate = async (req, res) => {
  const { id } = req.params; // Get the Certificate ID from the route parameters

  try {
    // Find Certificate by ID and delete it
    const deletedCertificate = await Certificate.findById(id);

     if (!deletedCertificate) {
       return res.status(404).json({ message: 'Certificate not found' });
     }
 
     if (deletedCertificate.image) {
      const imagePublicId = deletedCertificate.image.split('/').pop().split('.')[0];
      console.log(`Extracted public_id for Cloudinary: ${imagePublicId}`);

      // Attempt to delete the image from Cloudinary
      try {
        await cloudinary.uploader.destroy(imagePublicId);
        console.log(`Successfully deleted image from Cloudinary: ${imagePublicId}`);
      } catch (cloudinaryError) {
        console.error(`Image not found on Cloudinary or error occurred: `, cloudinaryError.message);
        console.log(`Proceeding to delete the Certificate from the database without stopping.`);
      }
    } else {
      console.log('No associated image found for this Certificate');
    }

    // Delete the Certificate from the database
    await Certificate.findByIdAndDelete(id);
    console.log(`Successfully deleted Certificate with ID: ${id}`);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting the Certificate', error });
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
