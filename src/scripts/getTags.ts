import type { CollectionEntry } from "astro:content";

export const getTags = (posts: CollectionEntry<"posts">[]) => [
  ...new Set(posts.flatMap((post) => post.data.tags)),
];
