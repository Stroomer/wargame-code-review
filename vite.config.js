import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images/countries"),
    },
    extensions: [".png"],
  },
  plugins: [vue()],
});
