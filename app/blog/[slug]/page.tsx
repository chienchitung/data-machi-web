import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { getAllPosts, getPostBySlug, extractHeadings, slugify } from "../../../lib/blog";
import { BlogToc } from "./toc";

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Data Machi" },
    publisher: { "@type": "Organization", name: "Data Machi" },
    mainEntityOfPage: `https://www.data-machi.com/blog/${post.slug}`,
  };

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <article className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">{post.tag}</span>
          <h1>{post.title}</h1>
          <p className="policy-updated">{post.date}</p>
        </div>

        <div className="blog-article-grid">
          <div className="policy-body blog-body">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              components={mdxComponents}
            />
            <a className="text-link blog-back-link" href="/blog">← 回到 Blog</a>
          </div>

          <BlogToc headings={headings} />
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
