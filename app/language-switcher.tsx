"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "./i18n";

const fullNames: Record<Locale, string> = { zh: "繁體中文", en: "English" };
const shortNames: Record<Locale, string> = { zh: "中文", en: "EN" };

function useLocaleLinks(locale: Locale) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");
  return locales.map((item) => ({ locale: item, href: `/${item}${rest}`, active: item === locale }));
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const links = useLocaleLinks(locale);

  return (
    <div className="lang-nav">
      <button type="button" className="lang-nav-trigger" aria-label="Language">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
        </svg>
        <span>{shortNames[locale]}</span>
        <span className="lang-nav-chevron" aria-hidden="true" />
      </button>
      <div className="lang-nav-dropdown">
        {links.map((link) => (
          <a
            key={link.locale}
            href={link.href}
            className={`lang-nav-option${link.active ? " is-active" : ""}`}
            aria-current={link.active ? "true" : undefined}
          >
            {fullNames[link.locale]}
            {link.active && (
              <svg className="lang-nav-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

/**
 * Flat "繁體中文 · English" link pair for the site footer. Shown only
 * on mobile (hidden on desktop via CSS) — desktop already has the
 * globe dropdown in the header.
 */
export function FooterLanguageSwitcher({ locale }: { locale: Locale }) {
  const links = useLocaleLinks(locale);

  return (
    <div className="footer-lang" aria-label="Language">
      {links.map((link, index) => (
        <span key={link.locale} style={{ display: "contents" }}>
          {index > 0 && <span className="footer-lang-divider" aria-hidden="true">·</span>}
          <a
            href={link.href}
            className={link.active ? "is-active" : undefined}
            aria-current={link.active ? "true" : undefined}
          >
            {fullNames[link.locale]}
          </a>
        </span>
      ))}
    </div>
  );
}
