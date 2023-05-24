const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");
const inspect = require("util").inspect;
require('dotenv').config();

module.exports = function (eleventyConfig) {
  // Add environment variables to Nunjucks, usage: {{ env("MY_VAR") }}
  eleventyConfig.addFilter("env", key => process.env[key]);

  // Add a debug filter, usage: {{ content | debug }}
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Add categories filter to get all posts in a category
  eleventyConfig.addFilter('categoryFilter', function (collection, category) {
    if (!category) return collection;
    const filtered = collection.filter(item => item.data.category == category)
    return filtered;
  });

  // Add a limit filter, usage: {{ array | limit(3) }}
  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

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

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env['ROOT_URL']
    }
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
