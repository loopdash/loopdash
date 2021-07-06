const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "njk"
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
