import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      title_ar: z.string().optional(),
      summary: z.string(),
      summary_ar: z.string().optional(),
      category: z.array(
        z.enum(['fullstack', 'ai', 'healthcare', 'devops', 'frontend', '3d', 'other'])
      ),
      tech: z.array(z.string()),
      role: z.string(),
      date: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      status: z.string(),
      draft: z.boolean().default(false),
      cover: z.string().optional(),
      gallery: z.array(z.string()).optional(),
      links: z
        .object({
          live: z.string().optional(),
          repo: z.string().optional(),
          caseStudy: z.string().optional()
        })
        .optional(),
      problem: z.string(),
      solution: z.string(),
      results: z.array(z.string()).default([]),
      highlights: z
        .array(
          z.object({
            title: z.string(),
            text: z.string(),
            icon: z.string().optional()
          })
        )
        .default([])
    })
});

const certificates = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      title_ar: z.string().optional(),
      issuer: z.string(),
      level: z.string(),
      category: z.string(),
      issueDate: z.string(),
      expiryDate: z.string().optional(),
      validationId: z.string().optional(),
      verifyUrl: z.string().optional(),
      badge: z.string().optional(),
      pdf: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z.number().default(99)
    })
});

const gallery = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      title_ar: z.string().optional(),
      caption: z.string(),
      caption_ar: z.string().optional(),
      category: z.enum(['Recognition', 'Events', 'Portrait', 'Certificates', 'Projects']),
      image: z.string(),
      date: z.string(),
      order: z.number().default(99),
      alt: z.string()
    })
});

const experience = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      role: z.string(),
      role_ar: z.string().optional(),
      org: z.string(),
      org_ar: z.string().optional(),
      start: z.string(),
      end: z.string().optional(),
      summary: z.string(),
      summary_ar: z.string().optional(),
      tech: z.array(z.string()).default([]),
      order: z.number().default(99)
    })
});

const testimonials = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string(),
      quote: z.string(),
      draft: z.boolean().default(false)
    })
});

export const collections = {
  projects,
  certificates,
  gallery,
  experience,
  testimonials
};
