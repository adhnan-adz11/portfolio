import Jimp from 'jimp';

async function autoCrop() {
  const outPath = 'd:\\portfolio\\public\\adhnan.png';
  try {
    const image = await Jimp.read(outPath);
    // autocrop removes transparent borders
    image.autocrop();
    await image.writeAsync(outPath);
    console.log('Image auto-cropped successfully');
  } catch (err) {
    console.error(err);
  }
}

autoCrop();
