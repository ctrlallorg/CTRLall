const { Liquid } = require("liquidjs");
const path = require("path");

module.exports = function(eleventyConfig) {
  console.log("✅ Eleventy config loaded");

  // ─── Passthrough Copies ──────────────────────────────────
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("ads.txt");

  // ─── Template Formats ─────────────────────────────────────
  eleventyConfig.setTemplateFormats(["md", "11ty.md", "liquid", "html"]);

  // ─── Directory Structure ──────────────────────────────────
  return {
    dir: {
      input: "src",
      includes: "_includes", // ✅ corrected path
      output: "docs"
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    templateFormats: ["md", "11ty.md", "liquid", "html"]
  };
};
