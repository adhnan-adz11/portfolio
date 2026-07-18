import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import Jimp from 'jimp';

async function processImage() {
  const imagePath = 'C:\\Users\\Akhil\\.gemini\\antigravity-ide\\brain\\bcf52e6d-882b-4e92-a820-ce2c9251158e\\media__1784121926648.jpg';
  const outPath = 'd:\\portfolio\\public\\adhnan.png';
  const tempPath = 'd:\\portfolio\\public\\temp_crop.jpg';
  
  try {
    console.log('Cropping image...');
    const image = await Jimp.read(imagePath);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // We'll crop the top 60% of the image which should capture down to the waist.
    image.crop(0, 0, w, Math.floor(h * 0.60));
    await image.writeAsync(tempPath);
    console.log('Image cropped to top 60%.');

    console.log('Removing background (this may take a moment)...');
    const fileUri = 'file:///' + tempPath.replace(/\\/g, '/');
    const blob = await removeBackground(fileUri);
    const buffer = Buffer.from(await blob.arrayBuffer());
    
    fs.writeFileSync(outPath, buffer);
    console.log('Background removed and saved successfully.');
    
    // Cleanup
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
