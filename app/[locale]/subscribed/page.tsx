import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "訂閱成功",
    description: "歡迎加入 Data Machi，我們發新文章時會通知你。",
    kicker: "訂閱成功",
    h1: "歡迎加入 Data Machi",
    p: "你的訂閱已經確認完成。從今以後，我們發新文章時會通知你，一起追蹤企業 AI 導入的實務觀察。",
    ctaPrimary: "開始閱讀 30 天系列",
    ctaSecondary: "回到首頁",
  },
  en: {
    title: "Subscribed",
    description: "Welcome to Data Machi — we'll let you know when we publish new articles.",
    kicker: "Subscribed",
    h1: "Welcome to Data Machi",
    p: "Your subscription is confirmed. From now on, we'll let you know when we publish new articles, tracking the practical realities of enterprise AI adoption together.",
    ctaPrimary: "Start the 30-Day Series",
    ctaSecondary: "Back to homepage",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function Subscribed({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="subscribed-section section-shell">
        <div className="subscribed-card">
          <div className="subscribed-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <span className="section-kicker">{t.kicker}</span>
          <h1>{t.h1}</h1>
          <p>{t.p}</p>
          <div className="subscribed-actions">
            <a className="subscribed-cta" href="https://www.data-machi.com/docs">{t.ctaPrimary}</a>
            <a className="text-link" href={`/${locale}`}>{t.ctaSecondary}</a>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
