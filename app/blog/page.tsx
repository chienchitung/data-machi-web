import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Data Machi 的產業觀察、實作筆記與案例拆解。",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">BLOG</span>
          <h1>部落格</h1>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
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
      </section>

      <SiteFooter />
    </main>
  );
}
