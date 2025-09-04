import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/skecherstmkorat/",
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "app.png",
            sizes: "512x512",
            type: "images.png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
