/// <reference types="vitest/config" />

import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      clearMocks: true,
      mockReset: true,
      restoreMocks: true,
      silent: "passed-only",
      unstubEnvs: true,
      unstubGlobals: true,
    },
  },
  {
    site: "https://cturner8.github.io",
    trailingSlash: "always",
  },
);
