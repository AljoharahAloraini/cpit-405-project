import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  base: "/cpit-405-project/",

  server: {
    proxy: {
      "/zen": {
        target: "https://zenquotes.io",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/zen/, "")
      }
    }
  }
});
