import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.resolve("public/images/Clothes_Dataset");
const OUT_FILE = path.resolve("public/data/products.json");

const IMAGE_EXT = /\.(jpg|jpeg|png|webp)$/i;

function titleCase(s) {
  return s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function makePrice(seed) {
  const base = 12.99 + (seed % 81);
  return Math.round(base * 100) / 100;
}

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });

const categories = fs
  .readdirSync(IMAGES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

if (!categories.length) {
  console.error(`No category folders found inside: ${IMAGES_DIR}`);
  process.exit(1);
}

let id = 1;
const products = [];

for (const cat of categories) {
  const catDir = path.join(IMAGES_DIR, cat);

  const files = fs
    .readdirSync(catDir, { withFileTypes: true })
    .filter((f) => f.isFile() && IMAGE_EXT.test(f.name))
    .map((f) => f.name);

  for (const file of files) {
    const category = titleCase(cat);

    products.push({
      id,
      title: `${category} #${id}`,
      category,
      price: makePrice(id),
      rating: Math.round((3 + (id % 20) / 10) * 10) / 10,
      inStock: id % 9 !== 0,
      image: `/images/Clothes_Dataset/${cat}/${file}`,
    });

    id += 1;
  }
}

fs.writeFileSync(OUT_FILE, JSON.stringify(products, null, 2), "utf8");
console.log(`✅ Wrote ${products.length} products to ${OUT_FILE}`);
