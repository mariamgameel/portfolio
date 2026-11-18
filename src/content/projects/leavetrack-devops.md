---
title: "LeaveTrack DevOps Infrastructure"
title_ar: "البنية التحتية وأتمتة DevOps لنظام LeaveTrack"
summary: "Cloud-native infrastructure and deployment automation pipeline for an enterprise employee leave management application on AWS."
summary_ar: "بنية تحتية سحابية وخط أتمتة النشر المستمر (CI/CD) لنظام إدارة إجازات الموظفين على منصة AWS."
category: ["devops", "other"]
tech: ["Docker", "Terraform", "AWS EKS", "GitHub Actions", "Helm", "Prometheus", "Grafana"]
role: "DevOps & Cloud Engineer"
date: "2026-06"
featured: false
order: 5
status: "Configured for AWS"
draft: true
problem: "Deploying microservices manually results in configuration drift, downtime during updates, and lack of visibility into system resource utilization."
solution: "Automated end-to-end containerized delivery using Docker and GitHub Actions, provisioned AWS Kubernetes infrastructure via Terraform, and integrated Prometheus/Grafana monitoring."
results:
  - "TODO: Add deployment frequency and MTTR metrics"
  - "Fully automated CI/CD pipeline triggered on main branch merges"
highlights:
  - title: "Infrastructure as Code"
    text: "Provisioned reproducible AWS VPC and EKS cluster configurations with Terraform."
    icon: "cloud"
  - title: "Automated CI/CD"
    text: "Linting, container image builds, vulnerability scanning, and Helm deployments via GitHub Actions."
    icon: "git-merge"
  - title: "Observability"
    text: "Real-time cluster health dashboards with Prometheus metrics and Grafana alerts."
    icon: "activity"
links:
  repo: "https://github.com/mariamgameel"
---

## Project Overview

*Draft entry — complete technical specifications prior to publishing.*

Comprehensive DevOps project demonstrating modern cloud-native deployment patterns on AWS.
