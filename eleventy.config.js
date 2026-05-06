const { Liquid } = require("liquidjs");
const path = require("path");
const markdownIt = require("markdown-it");
const fs = require("fs");
const { JSDOM } = require("jsdom");

const SITE_URL = "https://ctrlall.org";

module.exports = function (eleventyConfig) {
  console.log("✅ Eleventy config loaded");

  // ─── Custom Liquid Engine ────────────────────────────────
  const engine = new Liquid({
    root: path.resolve(__dirname, "_includes"),
    extname: ".liquid"
  });
  engine.registerFilter("absolute_url", (path, base = SITE_URL) => base + path);
  eleventyConfig.setLibrary("liquid", engine);

  // ─── Markdown Setup ──────────────────────────────────────
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // ─── Shortcodes ──────────────────────────────────────────
  eleventyConfig.addPairedShortcode("us", (term) => `<span class="us-only">${term}</span>`);

  // ─── Passthrough Files ───────────────────────────────────
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy("ads.txt");
  eleventyConfig.addPassthroughCopy("robots.txt");
  // sitemap.xml is now auto-generated — no longer passed through manually
  eleventyConfig.addPassthroughCopy({ "assets/spellingVariants.json": "spellingVariants.json" });

  // ─── Watch Targets ───────────────────────────────────────
  eleventyConfig.addWatchTarget("assets/spellingVariants.json");

  // ─── Log Dictionary Presence ─────────────────────────────
  const exists = fs.existsSync("assets/spellingVariants.json");
  console.log("📁 Dictionary file exists:", exists);

  // ─── Search Index Generator ──────────────────────────────
  eleventyConfig.addCollection("searchIndex", function (collectionApi) {
    const index = collectionApi.getAll()
      .filter(item => item.inputPath.endsWith(".md"))
      .map(item => ({
        title: item.data.title || "",
        tags: item.data.tags || [],
        url: item.url
      }));

    const outputPath = path.join("docs", "search-index.json");
    fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
    console.log(`🔍 Search index written to ${outputPath}`);
    return index;
  });

  // ─── Sitemap Generator ───────────────────────────────────
  // Automatically builds sitemap.xml from every page on each build.
  // Pages excluded: 404, search-index.json, any URL containing /private/
  eleventyConfig.addCollection("sitemap", function (collectionApi) {
    const pages = collectionApi.getAll()
      .filter(item => {
        const url = item.url;
        if (!url) return false;
        if (url === false) return false;
        if (url.endsWith(".json")) return false;
        if (url.includes("/private/")) return false;
        if (item.inputPath.includes("404")) return false;
        return true;
      })
      .map(item => {
        // Use last_modified if available, otherwise date, otherwise today
        const rawDate = item.data.last_modified || item.data.date || new Date();
        const lastmod = new Date(rawDate).toISOString().split("T")[0];
        return {
          url: SITE_URL + item.url,
          lastmod
        };
      })
      // Sort alphabetically by URL for a clean, readable sitemap
      .sort((a, b) => a.url.localeCompare(b.url));

    // Build XML string
    const urls = pages.map(p =>
      `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n  </url>`
    ).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    const outputPath = path.join("docs", "sitemap.xml");
    fs.writeFileSync(outputPath, xml);
    console.log(`🗺️  Sitemap written to ${outputPath} (${pages.length} URLs)`);

    return pages;
  });

  // ─── Hotspot Transform: px → % ───────────────────────────
  eleventyConfig.addTransform("hotspotPercent", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const dom = new JSDOM(content);
      const document = dom.window.document;

      const images = document.querySelectorAll(".overlay-container img.base-image");
      images.forEach(img => {
        const width = parseInt(img.getAttribute("data-width"), 10);
        const height = parseInt(img.getAttribute("data-height"), 10);

        if (!width || !height) return;

        const hotspots = img.parentNode.querySelectorAll(".hotspot");
        hotspots.forEach(hs => {
          const style = hs.getAttribute("style");
          if (style) {
            const topMatch = style.match(/top:(\d+)px/);
            const leftMatch = style.match(/left:(\d+)px/);

            if (topMatch) {
              const px = parseInt(topMatch[1], 10);
              const percent = (px / height) * 100;
              hs.style.top = percent + "%";
            }
            if (leftMatch) {
              const px = parseInt(leftMatch[1], 10);
              const percent = (px / width) * 100;
              hs.style.left = percent + "%";
            }
          }
        });
      });

      return dom.serialize();
    }
    return content;
  });

  // ─── Directory & Template Setup ──────────────────────────
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
