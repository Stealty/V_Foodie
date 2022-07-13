import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
});
