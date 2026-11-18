import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ') || 'New Project';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '') || 'new-project';

const targetDir = path.join(process.cwd(), 'src', 'content', 'projects');
const targetFile = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(targetFile)) {
  console.error(`Error: File already exists at ${targetFile}`);
  process.exit(1);
}

const template = `---
title: "${title}"
title_ar: ""
summary: "TODO: Add a concise summary of the project."
summary_ar: ""
category: ["fullstack"]
tech: ["React", "TypeScript", "Node.js"]
role: "Full-Stack Software Engineer"
date: "${new Date().toISOString().slice(0, 7)}"
featured: false
order: 99
status: "In Development"
draft: true
problem: "TODO: Describe the challenge or problem solved."
solution: "TODO: Detail the technical solution and architecture."
results:
  - "TODO: Result or metric 1"
highlights:
  - title: "Key Technical Highlight"
    text: "TODO: Describe key technical highlight."
    icon: "code"
links:
  repo: ""
  live: ""
---

## Project Overview

Write detailed long-form case study here.
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`Created new project: ${targetFile}`);
