import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// set default site, override in deployment action
const { ASTRO_SITE = "cturner8.github.io" } = process.env;

// https://astro.build/config
export default defineConfig({
  site: `https://${ASTRO_SITE}`,
  base: "/",
  server: {
    host: "127.0.0.1",
    port: 40745,
  },
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
      wrap: true,
    },
  },
});