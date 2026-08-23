import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { remarkReadingTime } from "./src/plugins/readingTime";

// set default site, override in deployment action
const { ASTRO_SITE = "cturner8.github.io" } = process.env;

// https://astro.build/config
export default defineConfig({
  site: `https://${ASTRO_SITE}`,
  base: "/",
  output: "static",
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
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  image: {
    layout: "constrained",
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font",
      fallbacks: ["monospace"],
    },
  ],
});
