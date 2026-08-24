import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "../app/i18n";

const BLOG_ROOT = path.join(process.cwd(), "content/blog");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  summary: string;
  tag: string;
};

export type BlogPost = BlogFrontmatter & { content: string };

export type BlogHeading = { id: string; text: string; level: number };

export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[「」『』〈〉《》【】〔〕（）()"'“”‘’?？!！,，。、:：;；]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  let inCodeFence = false;

  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (line.startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;

    const text = match[2].trim();
    headings.push({ id: slugify(text), text, level: match[1].length });
  }

  return headings;
}

// Chinese has no spaces between words, so reading speed is measured in
// characters/minute (~300-500 is the commonly cited range for adult
// silent reading). English is measured in words/minute instead (~200 is
// a conservative, commonly used default — Medium uses 265) — counting
// raw characters after stripping spaces would count every letter of
// every word as a "reading unit," wildly inflating the estimate.
const CHARS_PER_MINUTE = 400;
const WORDS_PER_MINUTE = 200;

export function estimateReadingMinutes(content: string, locale: Locale): number {
  const plain = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~|]/g, "")
    .replace(/^-{3,}$/gm, "")
    .trim();

  if (locale === "zh") {
    const charCount = plain.replace(/\s+/g, "").length;
    return Math.max(1, Math.round(charCount / CHARS_PER_MINUTE));
  }

  const wordCount = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function getAllPosts(locale: Locale): BlogPost[] {
  const blogDir = path.join(BLOG_ROOT, locale);
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as BlogFrontmatter), content };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return getAllPosts(locale).find((post) => post.slug === slug);
}
