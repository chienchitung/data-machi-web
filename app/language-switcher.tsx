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

export function MobileLanguageGroup({
  locale,
  label,
  open,
  onToggle,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const links = useLocaleLinks(locale);

  return (
    <div className="mobile-nav-group">
      <button
        type="button"
        className={`mobile-nav-group-trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="mobile-nav-lang-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
          </svg>
          {label}
        </span>
        <span className="mobile-nav-chevron" aria-hidden="true" />
      </button>
      {open && (
        <div className="mobile-nav-subitems">
          {links.map((link) => (
            <a
              key={link.locale}
              href={link.href}
              onClick={onNavigate}
              className={link.active ? "is-active" : undefined}
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
      )}
    </div>
  );
}
