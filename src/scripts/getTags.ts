import type { CollectionEntry } from "astro:content";

export const getTags = (posts: CollectionEntry<"posts">[]) => {
  // Get tags from all posts
  const allTags = posts
    .map((post) => {
      const postTags = post.data.tags;
      const outputTags: string[] = [];

      if (postTags?.length > 0) {
        postTags.forEach((tag) => {
          if (outputTags?.indexOf(tag) === -1) {
            outputTags.push(tag);
          }
        });
      }
      return outputTags;
    })
    .flat(1);

  // Make the tags unique
  const tags = [...new Set(allTags)];

  return tags;
};
