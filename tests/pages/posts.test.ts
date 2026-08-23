import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Page from "../../src/pages/posts.astro";

describe("posts", () => {
  it("renders", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Page);

    expect(result).not.toBeNull();
  });

  it("matches snapshot", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Page);

    expect(result).toMatchSnapshot();
  });
});
