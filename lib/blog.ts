import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as BlogFrontmatter), content };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
