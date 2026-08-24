import type { Locale } from "../../../i18n";

const KIT_FORM_ACTION = process.env.NEXT_PUBLIC_KIT_FORM_ACTION;

const copy = {
  zh: { placeholder: "你的 email", subscribe: "訂閱", contact: "聯絡我們" },
  en: { placeholder: "Your email", subscribe: "Subscribe", contact: "Contact us" },
} as const;

export function BlogSidebarCTA({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="blog-sidebar-cta">
      {KIT_FORM_ACTION && (
        <form action={KIT_FORM_ACTION} method="post" target="_blank" className="blog-sidebar-form">
          <input type="email" name="email_address" required placeholder={t.placeholder} aria-label="Email" />
          <button type="submit">{t.subscribe}</button>
        </form>
      )}
      <a className="blog-sidebar-contact" href="mailto:support@data-machi.com">{t.contact}</a>
    </div>
  );
}
