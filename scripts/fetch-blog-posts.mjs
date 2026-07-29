// Fetches the latest 3 posts from the DataXstream blog RSS feed at build time
// and writes them to src/content/blog-posts.generated.json. Runs automatically
// before every `npm run build` via the "prebuild" script in package.json.
//
// Only structured metadata is used (title, link, date, author, category, and
// the post's own og:image) — no article body text is scraped or reproduced.
//
// If the fetch fails for any reason (network issue, feed format change), the
// build must not break: we fall back to whatever generated file already
// exists, or a small hardcoded default if none exists yet.

import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const FEED_URL = "https://www.dataxstream.com/feed/";
const POST_COUNT = 3;
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "content",
  "blog-posts.generated.json"
);

const FALLBACK_POSTS = [
  {
    id: "benchmarking-every-oms-customer",
    title: "Benchmarking Every OMS+ Customer",
    excerpt: "By Hernan Gioioso · Intelligent Automation",
    date: "July 24, 2026",
    href: "https://www.dataxstream.com/blog/benchmarking-every-oms-customer/",
    image: "https://j3h5t9f5.delivery.rocketcdn.me/wp-content/uploads/benchmark-1024x725.png",
  },
  {
    id: "distributions-ai-moment-has-arrived",
    title: "Distribution's AI Moment Has Arrived",
    excerpt: "By Cailin Yates · Intelligent Automation",
    date: "July 2, 2026",
    href: "https://www.dataxstream.com/blog/distributions-ai-moment-has-arrived/",
    image: "https://j3h5t9f5.delivery.rocketcdn.me/wp-content/uploads/david_interview-1024x725.png",
  },
  {
    id: "gardner-white-selects-dataxstream-oms-to-streamline-sales-and-order-management-on-sap-s-4hana-public-cloud",
    title: "Gardner White Selects DataXstream OMS+ to Streamline Sales and Order Management on SAP S/4HANA",
    excerpt: "News · OMS+",
    date: "June 24, 2026",
    href: "https://www.dataxstream.com/blog/gardner-white-selects-dataxstream-oms-to-streamline-sales-and-order-management-on-sap-s-4hana-public-cloud/",
    image: "https://j3h5t9f5.delivery.rocketcdn.me/wp-content/uploads/gardener_white-1024x725.png",
  },
];

function decodeEntities(str) {
  return str
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&#039;/g, "’")
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .trim();
}

function slugFromUrl(url) {
  const segments = url.split("/").filter(Boolean);
  return segments[segments.length - 1] || url;
}

function formatDate(pubDate) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

async function fetchFeedItems() {
  const res = await fetch(FEED_URL, { headers: { "User-Agent": "TechPlus-Site-Build/1.0" } });
  if (!res.ok) throw new Error(`Feed request failed: ${res.status}`);
  const xml = await res.text();

  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) && items.length < POST_COUNT) {
    const block = match[1];
    const title = decodeEntities((block.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? "");
    const link = decodeEntities((block.match(/<link>([\s\S]*?)<\/link>/) ?? [])[1] ?? "");
    const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/) ?? [])[1] ?? "";
    const creator = decodeEntities((block.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/) ?? [])[1] ?? "");
    const categories = Array.from(block.matchAll(/<category>([\s\S]*?)<\/category>/g)).map((m) =>
      decodeEntities(m[1])
    );
    if (title && link) {
      items.push({ title, link, date: formatDate(pubDate), creator, category: categories[0] ?? "" });
    }
  }
  return items;
}

// Only the post's own preview image is pulled from the live page — no
// article body text is fetched or used.
async function fetchPostImage(url) {
  const res = await fetch(url, { headers: { "User-Agent": "TechPlus-Site-Build/1.0" } });
  if (!res.ok) throw new Error(`Post request failed: ${res.status}`);
  const html = await res.text();
  return (html.match(/<meta property="og:image" content="([^"]+)"/) ?? [])[1] ?? "";
}

function buildExcerpt(item) {
  if (item.creator && item.category) return `By ${item.creator} · ${item.category}`;
  if (item.creator) return `By ${item.creator}`;
  if (item.category) return item.category;
  return "Read more on the DataXstream blog";
}

async function main() {
  try {
    const feedItems = await fetchFeedItems();
    if (feedItems.length === 0) throw new Error("Feed returned no items");

    const posts = [];
    for (const item of feedItems) {
      const image = await fetchPostImage(item.link);
      posts.push({
        id: slugFromUrl(item.link),
        title: item.title,
        excerpt: buildExcerpt(item),
        date: item.date,
        href: item.link,
        image,
      });
    }

    await writeFile(OUTPUT_PATH, JSON.stringify(posts, null, 2) + "\n", "utf-8");
    console.log(`Fetched ${posts.length} posts from the DataXstream blog.`);
  } catch (err) {
    console.warn(`Blog fetch failed (${err.message}), keeping existing content.`);
    try {
      await readFile(OUTPUT_PATH, "utf-8");
    } catch {
      await writeFile(OUTPUT_PATH, JSON.stringify(FALLBACK_POSTS, null, 2) + "\n", "utf-8");
    }
  }
}

main();
