import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { minify as htmlmin } from "html-minifier";
import { inspect } from "util";
import eleventyImg from "@11ty/eleventy-img";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default function (eleventyConfig) {
  // Image shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async (src, alt, widths = [1024, 1024, null], formats = ["png", "webp", "jpeg"], className = "") => {
      if (!alt) {
        throw new Error(`Missing \`alt\` attribute for image: ${src}`);
      }

      let metadata = await eleventyImg(src, {
        widths: widths,
        formats: formats,
        outputDir: "./_site/img", // Adjusted to use "dist"
      });

      let imageAttributes = {
        alt,
        sizes: "(max-width: 600px) 100vw, 600px",
        loading: "lazy",
        decoding: "async",
        class: className, // Add the class attribute here
      };

      return eleventyImg.generateHTML(metadata, imageAttributes);
    }
  );

  // Environment variables filter
  eleventyConfig.addFilter("env", (key) => process.env[key]);

  // Debug filter
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Category filter
  eleventyConfig.addFilter("categoryFilter", function (collection, category) {
    if (!category) return collection;
    return collection.filter((item) => item.data.category === category);
  });

  // Limit filter
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  // Template formats
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "njk",
    "js",
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif",
    "svg",
    "eot",
    "ttf",
    "woff",
    "woff2",
    "ico",
    "mp4",
  ]);

  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env["ROOT_URL"],
    },
  });

  // HTML minification
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }
    return content;
  });

  // Passthrough copy
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
}
