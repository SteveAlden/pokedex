import sharp from 'sharp';

export async function GET() {
  const res = await getImageDimensions();

  return Response.json(res);
}

const getImageDimensions = async () => {
  const imageData = [];
  for (let i = 1; i <= 1025; i++) {
    const image = await sharp(`public/images/sprites/poke-${i}.png`).metadata();
    imageData.push({ height: image.height, width: image.width });
  }
  return imageData;
};
