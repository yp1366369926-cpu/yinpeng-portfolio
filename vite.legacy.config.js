import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "1";

export default defineConfig({
  base: isGitHubPagesBuild ? "./" : "/legacy/",
  publicDir: isGitHubPagesBuild ? "public" : "public-legacy",
  plugins: [react()],
  build: {
    outDir: isGitHubPagesBuild ? "dist" : "public/legacy",
    emptyOutDir: true,
  },
});
