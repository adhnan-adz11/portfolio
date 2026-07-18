const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');
const Jimp = require('jimp');

async function processImage() {
  const imagePath = 'C:\\Users\\Akhil\\.gemini\\antigravity-ide\\brain\\bcf52e6d-882b-4e92-a820-ce2c9251158e\\media__1784121926648.jpg';
  const outPath = 'd:\\portfolio\\public\\adhnan.png';
  const tempPath = 'd:\\portfolio\\public\\temp_crop.jpg';
  
  try {
    console.log('Cropping image...');
    const image = await Jimp.read(imagePath);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // The user said "half body not half picture" which usually means they want down to the waist.
    // We'll crop the top 65% of the image which should capture from head to waist.
    image.crop(0, 0, w, Math.floor(h * 0.65));
    await image.writeAsync(tempPath);
    console.log('Image cropped to top 65%.');

    console.log('Removing background (this may take a moment)...');
    const blob = await removeBackground(tempPath);
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
