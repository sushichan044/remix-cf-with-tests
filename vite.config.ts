/// <reference types="vitest" />

import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

installGlobals();

export default defineConfig({
  plugins: [remix({ presets: [vercelPreset()] }), tsconfigPaths()],
  server: {
    host: true,
  },
  test: {
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "**/e2e/**/*"],
  },
});
