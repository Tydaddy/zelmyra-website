import fs from "fs";
import path from "path";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");
const outputFile = path.join(root, "src", "data", "gallery-images.json");
const allowed = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function walk(dir, prefix) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    const publicPath = `${prefix}/${entry.name}`.replaceAll("\\\\", "/");

    if (entry.isDirectory()) {
      results.push(...walk(fullPath, publicPath));
      continue;
    }

    if (allowed.has(path.extname(entry.name).toLowerCase())) {
      results.push(publicPath);
    }
  }

  return results;
}

const images = walk(imagesDir, "/images")
  .filter((src, index, arr) => arr.indexOf(src) === index)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(images, null, 2)}\n`);
console.log(`Gallery manifest generated with ${images.length} image(s).`);
