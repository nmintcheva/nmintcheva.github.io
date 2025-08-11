import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
