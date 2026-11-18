import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ') || 'New Gallery Item';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '') || 'new-gallery-item';

const targetDir = path.join(process.cwd(), 'src', 'content', 'gallery');
const targetFile = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(targetFile)) {
  console.error(`Error: File already exists at ${targetFile}`);
  process.exit(1);
}

const template = `---
title: "${title}"
title_ar: ""
caption: "Description of image milestone or event."
caption_ar: ""
category: "Recognition"
image: "/src/assets/placeholder.jpg"
date: "${new Date().toISOString().slice(0, 7)}"
order: 99
alt: "Accessible description of the image content."
---
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`Created new gallery item: ${targetFile}`);
