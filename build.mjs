import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/client.js"],
  bundle: true,
  outfile: "_site/dist/client.js",
  format: "esm",
  minify: true,
  jsxFactory: "h", // ✅ Ensures JSX uses Preact
  jsxFragment: "Fragment",
  loader: { ".js": "jsx", ".jsx": "jsx" }, // ✅ Enables JSX support
  external: [], // ❌ REMOVE this line if it's excluding modules
});

console.log("✅ Build completed successfully.");
