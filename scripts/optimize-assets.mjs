import { readdir, rm, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import sharp from "sharp";

const assetsDir = "public/assets";
const imagePattern = /\.(png|jpe?g)$/i;
const maxWidth = 2200;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (imagePattern.test(entry.name)) files.push(path);
  }

  return files;
}

function outputPathFor(input) {
  return input.replace(imagePattern, ".webp");
}

async function optimizeImage(input) {
  const output = outputPathFor(input);
  const image = sharp(input, { limitInputPixels: false }).rotate();
  const metadata = await image.metadata();
  const width = metadata.width && metadata.width > maxWidth ? maxWidth : undefined;

  await image
    .resize({ width, withoutEnlargement: true })
    .webp({
      quality: 76,
      effort: 5,
      smartSubsample: true,
    })
    .toFile(output);

  const originalSize = (await stat(input)).size;
  const optimizedSize = (await stat(output)).size;

  if (optimizedSize < originalSize) {
    await rm(input);
  } else {
    await rm(output);
  }

  return {
    file: relative(assetsDir, input),
    originalSize,
    optimizedSize: Math.min(originalSize, optimizedSize),
  };
}

const images = await walk(assetsDir);
let originalTotal = 0;
let optimizedTotal = 0;

for (const image of images) {
  const result = await optimizeImage(image);
  originalTotal += result.originalSize;
  optimizedTotal += result.optimizedSize;
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)}MB`;

console.log(`Optimized ${images.length} images`);
console.log(`Before: ${mb(originalTotal)}`);
console.log(`After:  ${mb(optimizedTotal)}`);
console.log(`Saved:  ${mb(originalTotal - optimizedTotal)}`);
