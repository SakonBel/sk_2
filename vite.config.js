import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sk_2/",
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Skechers Korat",
        short_name: "SKK",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "src/assets/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "src/assets/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/assets/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3000000,
      },
    }),
  ],
});
