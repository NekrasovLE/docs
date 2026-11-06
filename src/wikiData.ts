import { createWikiData } from "@life-exe/wiki-engine";

export const wikiData = createWikiData({
  sectionsRu: import.meta.glob("../wiki/ru/*.md", { query: "?raw", import: "default", eager: true }),
  sectionsEn: import.meta.glob("../wiki/en/*.md", { query: "?raw", import: "default", eager: true }),
  lecturesRu: import.meta.glob("../wiki/ru/*/*.md", { query: "?raw", import: "default", eager: true }),
  lecturesEn: import.meta.glob("../wiki/en/*/*.md", { query: "?raw", import: "default", eager: true }),
  images: import.meta.glob("../wiki/**/*.{png,jpg,jpeg,gif,svg,webp}", { import: "default", eager: true }),
});
