import { execSync } from "child_process";

type Data = {
  astro: {
    frontmatter: Record<string, unknown>;
  };
};

export const remarkTimestamps = () => (_tree: unknown, context: any) => {
  const data = context.data as Data;
  const filepath = context.history[0];

  const lastModified = execSync(
    `git log -1 --pretty="format:%cI" "${filepath}"`,
  ).toString();

  const created = execSync(
    `git log --diff-filter=A --follow -1 --pretty="format:%cI" -- "${filepath}"`,
  ).toString();

  if (lastModified) {
    data.astro.frontmatter.lastModified = lastModified;
  }

  if (created) {
    data.astro.frontmatter.created = created;
  }
};
