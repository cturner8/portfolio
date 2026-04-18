import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

type Data = {
  astro: {
    frontmatter: Record<string, unknown>;
  };
};

export const remarkReadingTime = () => (tree: unknown, context: any) => {
  const data = context.data as Data;
  const textOnPage = toString(tree);
  const readingTime = getReadingTime(textOnPage);
  data.astro.frontmatter.minutesRead = readingTime.text;
};
