import type { CollectionEntry } from "astro:content";

export const sortPosts = (posts: CollectionEntry<"posts">[]) =>
  posts.toSorted(
    (a, b) =>
      new Date(b.data.updated || b.data.added).valueOf() -
      new Date(a.data.updated || a.data.added).valueOf(),
  );
