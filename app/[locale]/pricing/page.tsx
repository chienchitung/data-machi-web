import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "定價",
    description: "Data Machi 目前完全免費，所有內容公開閱讀。",
    kicker: "PRICING",
    h1: "目前完全免費",
    subtitle: "沒有隱藏費用，沒有付費牆。",
    p1: "Data Machi 目前仍在建立階段，30 天系列與所有文件內容皆完全免費、公開閱讀，不需要註冊帳號或付費即可完整存取。我們還沒有推出付費方案，這個頁面會在正式規劃定價後更新。",
    p2Prefix: "如果你對企業版、進階功能或客製合作有興趣，歡迎先透過",
    p2Suffix: "與我們聯繫，我們會依實際需求規劃後續方案。",
  },
  en: {
    title: "Pricing",
    description: "Data Machi is currently completely free, with all content openly readable.",
    kicker: "PRICING",
    h1: "Completely Free, For Now",
    subtitle: "No hidden fees, no paywall.",
    p1: "Data Machi is still in its building phase. The 30-day series and all of our content are completely free and openly readable — no account or payment required for full access. We haven't launched a paid plan yet; this page will be updated once we formally plan pricing.",
    p2Prefix: "If you're interested in an enterprise tier, advanced features, or custom collaboration, feel free to reach out at",
    p2Suffix: "and we'll scope a plan based on your actual needs.",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function Pricing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">{t.kicker}</span>
          <h1>{t.h1}</h1>
          <p className="policy-updated">{t.subtitle}</p>
        </div>

        <div className="policy-body">
          <p>{t.p1}</p>
          <p>
            {t.p2Prefix}
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>
            {" "}
            {t.p2Suffix}
          </p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
