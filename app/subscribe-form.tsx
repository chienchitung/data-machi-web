import type { Locale } from "./i18n";

const KIT_FORM_ACTION = process.env.NEXT_PUBLIC_KIT_FORM_ACTION;

const copy = {
  zh: {
    title: "訂閱 Data Machi",
    description: "我們發新文章時通知你，分享企業 AI 導入的實務觀察。",
    placeholder: "你的 email",
    submit: "訂閱",
  },
  en: {
    title: "Subscribe to Data Machi",
    description: "We'll let you know when we publish new articles on enterprise AI adoption.",
    placeholder: "Your email",
    submit: "Subscribe",
  },
} as const;

export function SubscribeForm({ locale }: { locale: Locale }) {
  if (!KIT_FORM_ACTION) return null;
  const t = copy[locale];

  return (
    <div className="subscribe-box">
      <div className="subscribe-copy-row">
        <div className="subscribe-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>
        <div className="subscribe-copy">
          <strong>{t.title}</strong>
          <span>{t.description}</span>
        </div>
      </div>
      <form action={KIT_FORM_ACTION} method="post" target="_blank" className="subscribe-form">
        <input type="email" name="email_address" required placeholder={t.placeholder} aria-label="Email" />
        <button type="submit">{t.submit}</button>
      </form>
    </div>
  );
}

/**
 * Compact email-only variant for the site footer — just the input and
 * submit button, no icon/title/description.
 */
export function FooterSubscribeForm({ locale }: { locale: Locale }) {
  if (!KIT_FORM_ACTION) return null;
  const t = copy[locale];

  return (
    <form action={KIT_FORM_ACTION} method="post" target="_blank" className="footer-subscribe-form">
      <input type="email" name="email_address" required placeholder={t.placeholder} aria-label="Email" />
      <button type="submit">{t.submit}</button>
    </form>
  );
}
