/// <reference types="vitest" />

import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()],
  server: {
    host: true,
  },
  test: {
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "**/e2e/**/*", "**/*.test.{j,t}sx"],
  },
});
