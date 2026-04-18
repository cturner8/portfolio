import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { subtitle, title } from "../content/settings.json";

let posts = await getCollection("posts");

posts = posts.sort(
  (a, b) =>
    new Date(b.data.updated || b.data.added).valueOf() -
    new Date(a.data.updated || a.data.added).valueOf(),
);

export const GET = () =>
  rss({
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
        customData: `<updated>${
          post.data.updated ? post.data.updated : ""
        }</updated>`,
        categories: post.data.tags,
      }),
    ),
    stylesheet: "/rss-styles.xsl",
  });
