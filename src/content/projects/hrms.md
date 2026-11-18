---
title: "HRMS – AI-Powered Human Resources Management System"
title_ar: "نظام إدارة الموارد البشرية المدعوم بالذكاء الاصطناعي (HRMS)"
summary: "Full-stack enterprise application designed to streamline HR operations, automated recruitment workflows, interviewer availability booking, and privacy-first internal policy Q&A."
summary_ar: "تطبيق ويب متكامل مصمم لأتمتة عمليات الموارد البشرية، وجدولة المقابلات وإدارتها، وتقديم مساعد ذكي داخلي للسياسات المؤسسية."
category: ["fullstack", "ai"]
tech: ["PHP 8.x", "Laravel 12", "React", "MySQL", "Ollama LLM", "Laravel Sanctum", "REST APIs", "Git", "Postman"]
role: "Full-Stack Software Engineer Intern"
date: "2026-10"
featured: true
order: 1
status: "Deployed on AWS"
draft: false
cover: "/src/assets/acud_award_presentation.jpg"
problem: "Traditional HR management systems in enterprise settings rely on fractured tools for recruitment, interview coordination, and policy compliance, leading to communication bottlenecks, double-booked interviewers, and sensitive company documents sent to external third-party cloud AI APIs."
solution: "Engineered an integrated web application combining a responsive React frontend with a modular Laravel 12 backend. Designed custom interview booking, availability matrices, and standardized evaluation rubrics. Integrated locally hosted LLMs through Ollama to enable confidential HR policy assistance without exposing data externally."
results:
  - "Eliminated external data leakage risks by deploying private local LLMs via Ollama on-premises."
  - "Automated candidate interview scheduling with dynamic interviewer availability and automated cancellation workflows."
  - "Structured candidate evaluation scoring with standardized Eloquent ORM schemas and validated API contracts."
  - "Recognized with the Software Engineering Excellence Shield by the leadership of the Administrative Capital for Urban Development (ACUD)."
highlights:
  - title: "Privacy-Preserving Local AI"
    text: "Integrated locally-hosted LLMs using Ollama for confidential policy query resolution without external API dependencies."
    icon: "bot"
  - title: "Interview Scheduling Engine"
    text: "Architected real-time interviewer availability matrices, automated candidate slot booking, rescheduling, and rubrics."
    icon: "calendar"
  - title: "Sanctum Security & RBAC"
    text: "Implemented granular Role-Based Access Control protecting executive HR endpoints and confidential employee records."
    icon: "shield-check"
links:
  repo: "https://github.com/mariamgameel"
---

## Project Overview

The **Human Resources Management System (HRMS)** is an enterprise full-stack platform built during my engineering internship at the **Administrative Capital for Urban Development (ACUD)**. The primary objective was modernizing internal recruitment, scheduling, and employee assistance while enforcing strict data confidentiality standards.

## Architecture & System Design

```
[ React 19 Frontend ]
         │ (JSON / Sanctum Auth)
         ▼
[ Laravel 12 REST API Gateway ] ─── [ RBAC Middleware & Policies ]
         │
         ├─── [ MySQL 8 Database (Eloquent ORM & Migrations) ]
         │
         └─── [ Ollama Local AI Service (Private 7B LLM / Prompt Pipeline) ]
```

### Key Engineering Decisions

1. **Local AI Inference via Ollama**: Rather than routing corporate HR queries through third-party proprietary APIs, the system communicates with an internal Ollama instance. This ensures sensitive personnel documents and inquiries never leave the perimeter.
2. **Defensive Scheduling Logic**: Handled race conditions during concurrent interview slot bookings through database transactions and availability status checks.
3. **Strict API Contracts**: Designed consistent JSON response envelopes with standardized error schemas to simplify client-side state transitions.

## Recognition

This platform earned the **Software Engineering Excellence Shield** presented by ACUD executive leadership in October 2026 for its robust technical execution and direct organizational utility.
