---
description: "Scaffold a new blog post with correct directory structure and frontmatter"
---

# New Blog Post

Create a new blog post in `src/content/posts/`.

## Steps

1. Ask the user for the post **title**, **slug**, **description**, and **tags**.
2. Create the directory `src/content/posts/<dirname>/` where `<dirname>` is a kebab-case identifier (does not need to match the slug).
3. Create `index.mdx` inside that directory with this frontmatter template:

```mdx
---
title: { title }
slug: { slug }
description: { description }
tags:
  - { tag1 }
  - { tag2 }
added: "16 April 2026"
updated: "18 April 2026"
---

Post content here.
```

4. If the user provides a cover image, save it as `cover.png` in the same directory and add `image: ./cover.png` to the frontmatter.
5. If the user mentions a YouTube video, add `videoId: {id}` to the frontmatter and include a `<Video />` component import:

```mdx
import Video from "../../../components/Video.astro";
```

6. Run `pnpm check` to verify there are no type errors.

## Rules

- `slug` determines the URL (`/post/{slug}/`), it does **not** need to match the directory name.
- Tags should be lowercase, kebab-case.
