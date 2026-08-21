import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";
import { getAllPosts } from "../../lib/blog";
import { BlogCoverArt } from "./cover-art";

export const metadata: Metadata = {
  title: "Blog",
  description: "Data Machi 的產業觀察、實作筆記與案例拆解。",
};

export default function Blog() {
  const [featured, ...rest] = getAllPosts();

  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">BLOG</span>
          <h1>部落格</h1>
        </div>

        {featured && (
          <a className="blog-featured" href={`/blog/${featured.slug}`}>
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
              <span className="blog-list-read">閱讀這一篇 →</span>
            </div>
          </a>
        )}

        {rest.length > 0 && (
          <div className="blog-grid">
            {rest.map((post) => (
              <a className="blog-list-item" href={`/blog/${post.slug}`} key={post.slug}>
                <div className="blog-list-meta">
                  <span className="learning-tag">{post.tag}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <span className="blog-list-read">閱讀這一篇 →</span>
              </a>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
