const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const contentDir = path.join(__dirname, "src");
const outputFile = path.join(__dirname, "docs", "search-index.json");

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith(".md")) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(contentDir);
const index = files.map(file => {
  const raw = fs.readFileSync(file, "utf-8");
  const { data } = matter(raw);
  if (!data.tags) return null;
  return {
    title: data.title || "",
    permalink: data.permalink || "",
    description: data.description || "",
    tags: data.tags
  };
}).filter(Boolean);

fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
console.log("✅ search-index.json generated");
