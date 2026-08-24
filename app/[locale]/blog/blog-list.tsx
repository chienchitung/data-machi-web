"use client";

import { useMemo, useState } from "react";
import { BlogCoverArt } from "./cover-art";
import { localeHref, type Locale } from "../../i18n";
import type { BlogPost } from "../../../lib/blog";

const ALL = "__all__";

const copy = {
  zh: { all: "所有文章", readThis: "閱讀這一篇 →", tabsLabel: "文章分類" },
  en: { all: "All articles", readThis: "Read this article →", tabsLabel: "Article categories" },
} as const;

export function BlogList({ posts, locale }: { posts: BlogPost[]; locale: Locale }) {
  const t = copy[locale];
  const [active, setActive] = useState<string>(ALL);
  const tags = useMemo(() => Array.from(new Set(posts.map((post) => post.tag))), [posts]);
  const filtered = active === ALL ? posts : posts.filter((post) => post.tag === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      {tags.length > 1 && (
        <div className="blog-tabs" role="tablist" aria-label={t.tabsLabel}>
          <button
            type="button"
            role="tab"
            aria-selected={active === ALL}
            className={`blog-tab${active === ALL ? " is-active" : ""}`}
            onClick={() => setActive(ALL)}
          >
            {t.all}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={active === tag}
              className={`blog-tab${active === tag ? " is-active" : ""}`}
              onClick={() => setActive(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {featured && (
        <a className="blog-featured" href={localeHref(locale, `/blog/${featured.slug}`)}>
          <div className="blog-featured-visual" aria-hidden="true">
            <BlogCoverArt />
          </div>
          <div className="blog-featured-content">
            <div className="blog-list-meta">
              <span className="learning-tag">{featured.tag}</span>
              <time dateTime={featured.date}>{featured.date}</time>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <span className="blog-list-read">{t.readThis}</span>
          </div>
        </a>
      )}

      {rest.length > 0 && (
        <div className="blog-grid">
          {rest.map((post) => (
            <a className="blog-list-item" href={localeHref(locale, `/blog/${post.slug}`)} key={post.slug}>
              <div className="blog-list-meta">
                <span className="learning-tag">{post.tag}</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className="blog-list-read">{t.readThis}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
