---
description: "Create a new remark plugin that injects computed frontmatter at build time"
---

# New Remark Plugin

Create a new remark plugin in `src/plugins/`.

## Pattern

Follow the existing plugin convention in this codebase. Every remark plugin exports a single function:

```ts
import type from relevant packages if needed

type Data = {
  astro: {
    frontmatter: Record<string, unknown>;
  };
};

export const remarkPluginName = () => (_tree: unknown, context: any) => {
  const data = context.data as Data;
  // Access the file path via context.history[0]
  // Compute values and inject into frontmatter:
  data.astro.frontmatter.myField = computedValue;
};
```

## Steps

1. Create the plugin file at `src/plugins/{name}.ts`.
2. Register it in [astro.config.ts](../../astro.config.ts) by:
   - Adding the import
   - Appending to the `remarkPlugins` array
3. Run `pnpm check` to verify.

## Rules

- Prefix unused `tree` parameter with underscore: `_tree`.
- If the plugin injects frontmatter consumed by layouts, update the `frontmatter` type in [BlogPostLayout.astro](../../src/layouts/BlogPostLayout.astro) `Props` interface.
- See [readingTime.ts](../../src/plugins/readingTime.ts) and [timestamps.ts](../../src/plugins/timestamps.ts) for reference implementations.
