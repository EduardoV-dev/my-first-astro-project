import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://my-first-astro-site-now.netlify.app",
  integrations: [preact()]
});