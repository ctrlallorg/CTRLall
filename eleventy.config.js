const { Liquid } = require("liquidjs");
const path = require("path");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  console.log("✅ Eleventy config loaded");

  // ─── Create Liquid engine with include path ───────────────
  const engine = new Liquid({
    root: path.resolve(__dirname, "_includes"),
    extname: ".liquid"
  });

  // ─── Register Liquid filter for absolute URLs ─────────────
  engine.registerFilter("absolute_url", (path, base = "https://ctrlall.org") => {
    return base + path;
  });

  eleventyConfig.setLibrary("liquid", engine);

  // ─── Register Paired Shortcode for [us]...[/us] ────────────
  eleventyConfig.addPairedShortcode("us", (term) => {
    return `<span class="us-only">${term}</span>`;
  });

  // ─── Markdown-it Setup ────────────────────────────────────
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // ─── Passthrough Copies ───────────────────────────────────
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("ads.txt");

  // ─── Template Formats ─────────────────────────────────────
  eleventyConfig.setTemplateFormats(["md", "11ty.md", "liquid", "html"]);

  // ─── Directory Structure and Path Prefix ──────────────────
  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "docs"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    templateFormats: ["md", "11ty.md", "liquid", "html"]
  };
};
