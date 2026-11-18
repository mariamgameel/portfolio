---
title: "Pediatric Handover Clinical System"
title_ar: "نظام التسليم السريري لطب الأطفال"
summary: "Full-stack healthcare coordination application digitizing pediatric patient handovers, tracking longitudinal clinical updates, and preventing medical handover errors."
summary_ar: "تطبيق رعاية صحية متكامل لأتمتة ومتابعة تسليم الحالات السريرية في أقسام الأطفال، وضمان دقة المعلومات الطبية أثناء تبديل النوبات."
category: ["fullstack", "healthcare"]
tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcryptjs", "Joi", "Helmet", "CORS", "Morgan"]
role: "Full-Stack Software Engineer"
date: "2025-08"
featured: true
order: 2
status: "Built with OWASP Practices"
draft: false
problem: "Clinical shift handovers in hospital pediatric wards frequently suffer from incomplete information handoffs, unstandardized communication, and lack of real-time acuity tracking, directly increasing the risk of adverse medical events during physician shift transitions."
solution: "Built a secure, modular MERN-stack clinical workflow platform. Implemented structured handover protocols, role-based access control, centralized error handling, and strict input validation to safeguard sensitive patient medical records."
results:
  - "Standardized shift change handoffs into immutable chronological logs with attending physician sign-offs."
  - "Hardened application security against OWASP Top 10 vulnerabilities utilizing Helmet, parameterized Mongoose queries, and strict CORS policies."
  - "Centralized backend error handling and response formatting across all clinical endpoints."
highlights:
  - title: "Defense-in-Depth Security"
    text: "Hardened with Helmet HTTP headers, bcryptjs password hashing, stateless JWT authorization, and strict Joi payload validation."
    icon: "shield"
  - title: "Real-Time Clinical Updates"
    text: "Enables instant patient follow-up logging, acuity level flags, and shift coordinator sign-offs."
    icon: "activity"
  - title: "Modular Architecture"
    text: "Decoupled Express REST API routes with isolated controller layers and clean schema models."
    icon: "layers"
links:
  repo: "https://github.com/mariamgameel"
---

## Project Overview

The **Pediatric Handover System** addresses one of the most critical communication bottlenecks in healthcare: physician shift handovers. In pediatric environments, subtle physiological shifts require structured, unambiguous documentation.

## Technical Architecture

```
[ React SPA ] ─── (Bearer JWT Auth) ───► [ Express.js API Layer ]
                                                │
                 ┌──────────────────────────────┼──────────────────────────────┐
                 ▼                              ▼                              ▼
      [ Helmet & CORS Security ]      [ Joi Schema Validation ]      [ RBAC & JWT Middleware ]
                 │                              │                              │
                 └──────────────────────────────┼──────────────────────────────┘
                                                ▼
                                    [ MongoDB / Mongoose ODM ]
```

### Engineering Highlights

- **Data Integrity**: Enforced strict schema validation via Joi to prevent malformed vitals or missing medication dosages from entering the database.
- **Audit Logging**: Maintained an immutable clinical update trail tracking which physician authored each observation and shift handover note.
- **Defensive Error Handling**: Centralized error middleware prevents stack trace leakage while providing structured status codes and localization hooks.
