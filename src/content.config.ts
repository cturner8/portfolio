import { z } from "astro/zod";
import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  added: z.union([z.string(), z.date()]),
  updated: z.union([z.string(), z.date()]).optional(),
  tags: z.array(z.string()),
});

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: postSchema,
});

export const collections = { posts };
