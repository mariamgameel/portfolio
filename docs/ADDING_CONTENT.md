# Adding & Managing Content

This portfolio is strictly content-driven. You can publish new projects, certificates, and gallery items by simply dropping Markdown files in `src/content/` with zero code changes.

---

## 1. Adding a Project

### Option A: Using the CLI scaffold
```bash
npm run new:project -- "My New Project"
```

### Option B: Manual Creation
Create a file `src/content/projects/<slug>.md`:

```yaml
---
title: "Project Title"
title_ar: "عنوان المشروع بالعربية" # Optional
summary: "1-2 sentence description of what the project does."
category: ["fullstack", "ai"] # Options: fullstack | ai | healthcare | devops | frontend | 3d | other
tech: ["React", "Laravel 12", "MySQL", "Ollama"]
role: "Full-Stack Software Engineer"
date: "2026-11"
featured: true # Set to true to display on Home page
order: 1
status: "Deployed on AWS" # e.g. "Deployed on AWS", "Open Source", "Prototype"
draft: false # Set to true while writing; hidden from public listings
cover: "/src/assets/cover.jpg" # Optional cover image
problem: "Detailed problem statement explaining what challenge existed."
solution: "Detailed solution explaining your architecture and approach."
results:
  - "Key outcome or performance metric 1"
  - "Key outcome 2"
highlights:
  - title: "Architecture Feature"
    text: "Details on what was implemented."
    icon: "layers" # lucide icon name
links:
  repo: "https://github.com/mariamgameel/repo" # Optional
  live: "https://demo.example.com" # Optional
---

## Case Study Long-Form Body

Write the full story, diagrams, trade-offs, and technical learnings in Markdown.
```

---

## 2. Adding a Certificate

### Option A: Using the CLI scaffold
```bash
npm run new:cert -- "AWS Certified Solutions Architect"
```

### Option B: Manual Creation
Create a file `src/content/certificates/<slug>.md`:

```yaml
---
title: "AWS Certified Developer – Associate"
title_ar: "مطور معتمد من AWS"
issuer: "Amazon Web Services (AWS)"
level: "Associate (DVA-C02)"
category: "Cloud Architecture"
issueDate: "2026-11-04"
expiryDate: "2029-11-04" # Optional
validationId: "49fdff656926465ba15afa74ee2f3b4a" # Optional
verifyUrl: "https://aws.amazon.com/verification" # Optional
badge: "/src/assets/badge.jpg" # Optional image
pdf: "/docs/certificate.pdf" # Optional PDF placed in public/docs/
featured: true
draft: false
order: 1
---

Description of certificate content, skills validated, and exam topics.
```

---

## 3. Adding a Gallery Item

### Option A: Using the CLI scaffold
```bash
npm run new:gallery -- "Conference Presentation"
```

### Option B: Manual Creation
1. Place your image in `src/assets/`.
2. Create `src/content/gallery/<slug>.md`:

```yaml
---
title: "Event or Milestone Title"
title_ar: "عنوان الفعالية أو التكريم"
caption: "Detailed caption explaining the photo."
caption_ar: "وصف الصورة بالعربية"
category: "Recognition" # Options: Recognition | Events | Portrait | Certificates | Projects
image: "/src/assets/my-image.jpg"
date: "2026-10"
order: 1
alt: "Clear, accessible alt text describing what is visible in the photo."
---
```

---

## 4. Hiding Content with `draft: true`

Set `draft: true` in the frontmatter of any project or certificate to keep it as an internal work-in-progress. It will be completely excluded from production builds and site counters until you change it to `draft: false`.

---

## 5. Deploying Updates

### GitHub Pages
```bash
git add .
git commit -m "content: add new project"
git push origin master
```
The automated GitHub Action will build and deploy the static output to GitHub Pages.

### Vercel
Connect your repository to Vercel. Every commit automatically builds and updates your live portfolio.
