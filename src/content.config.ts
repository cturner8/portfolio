import { z } from "astro/zod";
import { defineCollection, type SchemaContext } from "astro:content";

import { glob } from "astro/loaders";

const postSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    added: z.union([z.string(), z.date()]),
    updated: z.union([z.string(), z.date()]).optional(),
    image: image().optional(),
    tags: z.array(z.string()),
  });

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: postSchema,
});

export const collections = { posts };

export type Post = z.infer<ReturnType<typeof postSchema>>;
