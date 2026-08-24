import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "確認信已經寄出",
    description: "請至信箱點擊確認連結，完成 Data Machi 電子報訂閱。",
    kicker: "還差一步",
    h1: "確認信已經寄出",
    p: "請至你剛剛填寫的信箱，點擊確認連結完成訂閱。如果幾分鐘內沒看到，記得檢查一下垃圾郵件匣。",
    ctaPrimary: "開始閱讀 30 天系列",
    ctaSecondary: "回到首頁",
  },
  en: {
    title: "Check Your Inbox",
    description: "Click the confirmation link in your email to complete your Data Machi subscription.",
    kicker: "One more step",
    h1: "Check your inbox",
    p: "We've sent a confirmation link to the email you just entered — click it to complete your subscription. If you don't see it within a few minutes, check your spam folder.",
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

export default async function ConfirmEmail({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="subscribed-section section-shell">
        <div className="subscribed-card">
          <div className="subscribed-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
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
