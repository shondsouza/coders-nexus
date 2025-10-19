import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    coverImage: z.string(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    organizers: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    websiteLink: z.string().url().optional(),
    published: z.boolean().default(true),
  }),
});

const guidelines = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { events, guidelines };