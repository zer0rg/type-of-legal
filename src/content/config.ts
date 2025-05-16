 import { defineCollection, z } from "astro:content";

 const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
  }),
});

export const collections = { services, posts };