const fs = require('fs');
const path = require('path');

const files = [
  'src/data/brands.js',
  'src/data/products.js',
  'src/data/campaigns.js',
];

for (const file of files) {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) continue;
  let content = fs.readFileSync(fullPath, 'utf8');
  const initial = content;
  content = content.replace(/(['"])\/assets\//g, '$1assets/');
  if (content !== initial) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Normalized /assets/ in ${file}`);
  } else {
    console.log(`No /assets/ needed in ${file}`);
  }
}
