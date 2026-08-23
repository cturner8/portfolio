import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import Page from "../../src/pages/404.astro";

describe("404", () => {
  it("renders", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Page);

    expect(result).toContain("404: Page not found");
  });
});
