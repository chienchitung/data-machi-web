import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { getAllPosts, getPostBySlug, extractHeadings, estimateReadingMinutes, slugify } from "../../../lib/blog";
import { BlogToc } from "./toc";
import { BlogShare } from "./share";
import { TrendChart } from "../chart";

function getNodeText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (typeof node === "object" && "props" in node) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return getNodeText(element.props.children);
  }
  return "";
}

const mdxComponents = {
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="table-scroll">
      <table {...props} />
    </div>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 id={slugify(getNodeText(children))} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 id={slugify(getNodeText(children))} {...props}>
      {children}
    </h3>
  ),
  TrendChart,
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      url: `https://www.data-machi.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const readingMinutes = estimateReadingMinutes(post.content);
  const postUrl = `https://www.data-machi.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Data Machi" },
    publisher: { "@type": "Organization", name: "Data Machi" },
    mainEntityOfPage: postUrl,
  };

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <article className="policy-section section-shell">
        <div className="blog-topbar">
          <a className="blog-back-top" href="/blog">← 回到 Blog</a>
        </div>

        <div className="policy-header blog-post-header">
          <div className="blog-post-meta">
            <span className="section-kicker">{post.tag}</span>
            <span className="meta-dot">/</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-read-time">{readingMinutes} 分鐘閱讀</p>
        </div>

        <div className="blog-byline-row">
          <div className="blog-author">
            <span className="blog-author-avatar" aria-hidden="true">D</span>
            <div className="blog-author-copy">
              <strong>Data Machi 團隊</strong>
              <span>內容製作</span>
            </div>
          </div>
          <BlogShare title={post.title} url={postUrl} />
        </div>

        <div className="blog-article-grid">
          <div className="policy-body blog-body">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={mdxComponents}
            />
          </div>

          <BlogToc headings={headings} />
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
