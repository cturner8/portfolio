/// <reference types="vitest/config" />

import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    silent: "passed-only",
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
