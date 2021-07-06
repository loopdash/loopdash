const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "njk",
    "js"
  ]);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://loopdash.com",
    },
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
