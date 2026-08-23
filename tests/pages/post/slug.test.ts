import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getCollection } from "astro:content";
import { describe, expect, it } from "vitest";
import Page from "../../../src/pages/post/[slug].astro";

describe("post/[slug]", () => {
  it("renders", async () => {
    const [post] = await getCollection("posts");

    const container = await AstroContainer.create();
    const result = await container.renderToString(Page, {
      params: { slug: post.data.slug },
      props: { post },
    });

    expect(result).not.toBeNull();
  });

  it("matches snapshot", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Page);

    expect(result).toMatchSnapshot();
  });
});
