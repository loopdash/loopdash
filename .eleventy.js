const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");
const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);
  eleventyConfig.addFilter('categoryFilter', function (collection, category) {
    if (!category) return collection;
    const filtered = collection.filter(item => item.data.category == category)
    return filtered;
  });

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
    "ico"
  ]);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://loopdash.com"
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
