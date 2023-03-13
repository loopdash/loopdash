const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "njk",
    "js",
    "jpg",
    "jpeg",
    "png",
    "webp",
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

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
