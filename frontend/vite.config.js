import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    outDir: "dist" // Ensure Vite outputs the build files here
  },
  base: "/" // Ensures correct path resolution in Vercel
});
