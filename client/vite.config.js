import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // default, you can change
    open: true, // opens browser on start
  },
  build: {
    outDir: "dist",
    sourcemap: false, // set true if you want debugging in production
  },
});
