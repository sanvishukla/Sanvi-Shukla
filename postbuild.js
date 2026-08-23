import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the blogs data
// Since it's a JS file with export const, we can just extract the IDs using regex for simplicity
const blogsFile = fs.readFileSync(path.join(__dirname, 'src', 'data', 'blogs.js'), 'utf-8');
const ids = [];
const regex = /id:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(blogsFile)) !== null) {
  ids.push(match[1]);
}

const distDir = path.join(__dirname, 'dist');

// Make sure dist exists
if (!fs.existsSync(distDir)) {
  console.error("Dist directory not found. Run this after build.");
  process.exit(1);
}

const indexHtml = path.join(distDir, 'index.html');

// 1. Create 404.html for generic fallback (returns 404 status but loads app)
fs.copyFileSync(indexHtml, path.join(distDir, '404.html'));
console.log("Created 404.html");

// 2. Create physical index.html for each blog route (returns 200 status)
ids.forEach(id => {
  const blogDir = path.join(distDir, 'blog', id);
  fs.mkdirSync(blogDir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(blogDir, 'index.html'));
  console.log(`Created route: /blog/${id}`);
});

console.log("Postbuild route generation complete.");
