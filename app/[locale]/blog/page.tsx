import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { getAllPosts } from "../../../lib/blog";
import { BlogList } from "./blog-list";
import { SubscribeForm } from "../../subscribe-form";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "Blog",
    description: "Data Machi 的產業觀察、實作筆記與案例拆解。",
    kicker: "BLOG",
    h1: "部落格",
  },
  en: {
    title: "Blog",
    description: "Data Machi's industry notes, field notes, and case breakdowns.",
    kicker: "BLOG",
    h1: "Blog",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  const posts = getAllPosts(locale);

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">{t.kicker}</span>
          <h1>{t.h1}</h1>
        </div>

        <BlogList posts={posts} locale={locale} />

        <SubscribeForm locale={locale} />
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
