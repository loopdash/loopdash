const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");
const inspect = require("util").inspect;
const Image = require("@11ty/eleventy-img");
require('dotenv').config();

module.exports = function (eleventyConfig) {
  // Image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, widths = [300, 600, null], formats = ["webp", "jpeg"]) => {
    if (!alt) {
      throw new Error(`Missing \`alt\` attribute for image: ${src}`);
    }

    // let metadata = await Image(src, {
    //   widths: widths,
    //   formats: formats,
    //   outputDir: "_site/images",
    //   urlPath: "/images",
    // });

    let imageAttributes = {
      alt,
      sizes: "(max-width: 600px) 100vw, 600px",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Environment variables filter
  eleventyConfig.addFilter("env", key => process.env[key]);

  // Debug filter
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Category filter
  eleventyConfig.addFilter('categoryFilter', function (collection, category) {
    if (!category) return collection;
    return collection.filter(item => item.data.category == category);
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
    "mp4"
  ]);

  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env['ROOT_URL']
    }
  });

  // HTML minification
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  // Passthrough copy
  // eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};
