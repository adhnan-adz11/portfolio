const Jimp = require('jimp');

async function processImage() {
  const imagePath = 'C:\\Users\\Akhil\\.gemini\\antigravity-ide\\brain\\bcf52e6d-882b-4e92-a820-ce2c9251158e\\media__1784121926648.jpg';
  const outPath = 'd:\\portfolio\\public\\adhnan.png';
  
  try {
    const image = await Jimp.read(imagePath);
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    // Crop top 55% to get half body
    image.crop(0, 0, w, Math.floor(h * 0.55));
    await image.writeAsync(outPath);
    console.log('Image cropped successfully');
  } catch (err) {
    console.error(err);
  }
}

processImage();
