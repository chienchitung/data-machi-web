"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "./i18n";

export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");

  return (
    <div className={`lang-switcher${className ? ` ${className}` : ""}`} role="group" aria-label="Language">
      {locales.map((item, index) => (
        <span key={item} style={{ display: "contents" }}>
          {index > 0 && <span className="lang-switcher-divider" aria-hidden="true">/</span>}
          <a
            href={`/${item}${rest}`}
            className={`lang-switcher-item${item === locale ? " is-active" : ""}`}
            aria-current={item === locale ? "true" : undefined}
          >
            {localeNames[item]}
          </a>
        </span>
      ))}
    </div>
  );
}
