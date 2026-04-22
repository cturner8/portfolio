# Agent Instructions

Astro v6 static portfolio/blog site deployed to GitHub Pages.

## Commands

| Task       | Command                 |
| ---------- | ----------------------- |
| Install    | `pnpm install`          |
| Dev server | `pnpm dev` (port 40745) |
| Build      | `pnpm build`            |
| Type check | `pnpm check`            |

Run `pnpm check` after any TypeScript or Astro file change. There is no test framework.

## Architecture

- **Static output only** (`output: "static"`) — no SSR
- **Content collections**: Single `posts` collection in `src/content/posts/`, each post is a subdirectory with `index.mdx` + co-located assets
- **Slug source**: Post URLs come from the frontmatter `slug` field, not the directory name
- **Remark plugins** in `src/plugins/` inject computed frontmatter at build time (`minutesRead`, `created`, `lastModified`)
- **Timestamps are git-derived** via `execSync` in `src/plugins/timestamps.ts` — builds require full git history, not shallow clones
- **Layouts**: `SiteLayout` is the shell; `BlogPostLayout` wraps it for posts and reads remark plugin frontmatter
- **Single global CSS** in `src/style/global.css` using custom properties — no CSS modules or preprocessors

## Conventions

- **TypeScript strict mode** with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`
- Use `interface Props` in Astro components for prop typing
- Content schema defined with Zod in `src/content.config.ts` — exported `Post` type used across layouts/components
- Remark plugins follow pattern: `export const pluginName = () => (tree, context) => { /* mutate context.data.astro.frontmatter */ }`
- Format on save with Prettier; Astro formatter for `.astro` files
- `ASTRO_SITE` env var overrides the site URL at deploy time (defaults to `cturner8.github.io`)

## MCP

- Use the `astro` MCP (`https://mcp.docs.astro.build/mcp`) to get up-to-date Astro documentation when necessary

## Content

New blog posts: create `src/content/posts/<dirname>/index.mdx` with frontmatter:

```yaml
title: string # required
slug: string # required — determines the URL
description: string # required
tags: [string] # required
image: ./cover.png # optional, co-located
videoId: string # optional YouTube ID
githubUrl: string # optional
```

`added`/`updated` dates are optional in frontmatter — the remark timestamps plugin computes them from git history.
