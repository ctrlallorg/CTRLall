const { Liquid } = require("liquidjs");
const path = require("path");

module.exports = function(eleventyConfig) {
  console.log("✅ Eleventy config loaded");

  // ─── Create Liquid engine with include path ───────────────
  const engine = new Liquid({
    root: path.resolve(__dirname, "_includes"), // ✅ tells LiquidJS where to find includes
    extname: ".liquid"
  });

  engine.registerFilter("absolute_url", (path, base = "https://ctrlall.org") => {
    return base + path;
  });

  eleventyConfig.setLibrary("liquid", engine);

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
      includes: "../_includes", // ✅ Eleventy uses this
      output: "docs"
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    templateFormats: ["md", "11ty.md", "liquid", "html"]
  };
};
