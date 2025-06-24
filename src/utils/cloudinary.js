import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

// Utility function to upload file
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto', // can be image, video, etc.
    });

    console.log('✅ File uploaded successfully:', response.secure_url);

    // Delete local file after upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.error('❌ Cloudinary Upload Error:', error);

    // Delete local file if upload fails
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
