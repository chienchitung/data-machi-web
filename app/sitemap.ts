import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/blog";
import { locales } from "./i18n";

const BASE_URL = "https://www.data-machi.com";
const staticPaths = ["", "/about", "/blog", "/pricing", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  const postRoutes = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    }))
  );

  return [...staticRoutes, ...postRoutes];
}
