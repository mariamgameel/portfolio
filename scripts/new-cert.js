import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ') || 'New Certificate';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '') || 'new-certificate';

const targetDir = path.join(process.cwd(), 'src', 'content', 'certificates');
const targetFile = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(targetFile)) {
  console.error(`Error: File already exists at ${targetFile}`);
  process.exit(1);
}

const template = `---
title: "${title}"
title_ar: ""
issuer: "Issuer Organization"
level: "Professional Specialization"
category: "Software Engineering"
issueDate: "${new Date().toISOString().slice(0, 10)}"
expiryDate: ""
validationId: ""
verifyUrl: ""
badge: ""
pdf: ""
featured: false
draft: true
order: 99
---

Description of certificate, syllabus covered, or validation details.
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`Created new certificate: ${targetFile}`);
