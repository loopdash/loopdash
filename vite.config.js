import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/components/index.js",
      output: {
        entryFileNames: "bundle.js", // ✅ Forces `bundle.js` without hash
        assetFileNames: "[name].[ext]", // ✅ Keeps clean asset filenames
        chunkFileNames: "[name].js", // ✅ No hashed chunk files
        dir: "_site/dist",
      },
    },
  },
});
