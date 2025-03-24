// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    db(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
