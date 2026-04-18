import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { subtitle, title } from "../content/settings.json";
import { sortPosts } from "../scripts/sortPosts";

export const GET = async () => {
  const posts = sortPosts(await getCollection("posts"));

  return rss({
    title: title || "",
    description: subtitle || "",
    site: import.meta.env.SITE,
    items: posts.map(
      (post): RSSFeedItem => ({
        link: `/post/${post.data.slug}`,
        title: post.data.title,
        pubDate:
          typeof post.data.added === "string"
            ? new Date(post.data.added)
            : post.data.added,
        description: post.data.description,
        content: post.rendered?.html,
        customData: post.data.updated
          ? `<updated>${
              typeof post.data.updated === "string"
                ? new Date(post.data.updated)
                : post.data.updated
            }</updated>`
          : undefined,
        categories: post.data.tags,
      }),
    ),
    stylesheet: "/rss-styles.xsl",
  });
};
