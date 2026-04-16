# Cassidy's blog template

Hello, welcome. This is a blog ("blahg" is the proper spelling for Chicagoans) template. It's built with [Astro](https://astro.build)!

## To use the template

- Connect to your chosen hosting provider (see Deploy to Netlify button below if you want to go that route, otherwise use the GitHub template button above and pick a different one)
- Make an account at [tina.io](https://tina.io/)
- Add your TinaCMS keys (see below)
- Update `astro.config.mjs` with your domain
- Edit `src/settings/settings.json` (or update it in Tina, see below)
- Set your Twitter creator handle in `src/components/BaseHead.astro` (`twitter:creator` meta tag)
- Add your URL in line 1 of `public/robots.txt`
- Add your links in `src/components/Header.astro`
- Update the intro in `pages/about.md`
- Edit the images in `public/` (optional)
- Edit the RSS styles in `public/` (optional)
- Edit whatever tags you want in `tina/config.js` (optional)

After this, you can add your content to `posts/` with Markdown files!

And finally, please ping me (via social media, or in a GitHub Issue, or whatever) if you use this template! I would love to see your writing and subscribe to your RSS feed!

## Run it yourself

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |

Note: if you want to edit your RSS feed styles (in `public/rss-styles.xsl`), that does _not_ have hot reloading, so you will have to refresh the page with every change. It seems hard-coded, but that's how XSL styles work (you'll see)!

**Have fun!**
