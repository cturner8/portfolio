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
  server: {
    host: "127.0.0.1",
    port: 40745,
  },
  integrations: [sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
      wrap: true,
    },
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
