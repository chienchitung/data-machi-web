"use client";

import { useEffect, useState } from "react";
import { MobileLanguageGroup } from "./language-switcher";
import type { Locale } from "./i18n";

type NavLink = { href: string; label: string; external?: boolean };
type NavSection = { label: string; href: string; items?: NavLink[] };

const copy = {
  zh: { open: "開啟選單", close: "關閉選單", nav: "行動版導覽", language: "語言" },
  en: { open: "Open menu", close: "Close menu", nav: "Mobile navigation", language: "Language" },
} as const;

const LANG_KEY = "__lang__";

export function MobileNav({
  sections,
  cta,
  locale,
}: {
  sections: NavSection[];
  cta: NavLink;
  locale: Locale;
}) {
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`mobile-nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-bar" />
      </button>

      <nav className={`mobile-nav-panel${open ? " is-open" : ""}`} aria-label={t.nav} inert={!open}>
        <div className="mobile-nav-links">
          {sections.map((section) =>
            section.items ? (
              <div className="mobile-nav-group" key={section.label}>
                <button
                  type="button"
                  className={`mobile-nav-group-trigger${expanded === section.label ? " is-open" : ""}`}
                  aria-expanded={expanded === section.label}
                  onClick={() =>
                    setExpanded((value) => (value === section.label ? null : section.label))
                  }
                >
                  {section.label}
                  <span className="mobile-nav-chevron" aria-hidden="true" />
                </button>
                {expanded === section.label && (
                  <div className="mobile-nav-subitems">
                    {section.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={section.label} href={section.href} className="mobile-nav-link" onClick={close}>
                {section.label}
              </a>
            )
          )}
        </div>

        <div className="mobile-nav-footer">
          <MobileLanguageGroup
            locale={locale}
            label={t.language}
            open={expanded === LANG_KEY}
            onToggle={() => setExpanded((value) => (value === LANG_KEY ? null : LANG_KEY))}
            onNavigate={close}
          />

          <a className="mobile-nav-cta" href={cta.href} onClick={close}>
            {cta.label}
          </a>
        </div>
      </nav>
    </div>
  );
}
