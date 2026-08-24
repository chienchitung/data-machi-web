"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { localeHref, type Locale } from "./i18n";

const CONSENT_KEY = "data-machi-cookie-consent";

const copy = {
  zh: {
    ariaLabel: "Cookie 使用同意",
    prefix: "我們使用 cookies 來確保您在網站上能獲得良好的體驗。如果您繼續使用本網站，我們將認定您接受並理解我們的",
    privacy: "隱私權政策",
    and: "和",
    terms: "服務條款",
    suffix: "。",
    decline: "拒絕",
    accept: "接受",
  },
  en: {
    ariaLabel: "Cookie consent",
    prefix: "We use cookies to make sure you get a good experience on this site. If you continue using it, we'll take that as your acceptance and understanding of our",
    privacy: "Privacy Policy",
    and: "and",
    terms: "Terms of Service",
    suffix: ".",
    decline: "Decline",
    accept: "Accept",
  },
} as const;

export function CookieConsent({ measurementId, locale }: { measurementId?: string; locale: Locale }) {
  const t = copy[locale];
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  const respond = (value: "granted" | "denied") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {ready && consent === null && (
        <div className="cookie-banner" role="dialog" aria-label={t.ariaLabel}>
          <p>
            {t.prefix}
            {" "}
            <a href={localeHref(locale, "/privacy")}>{t.privacy}</a>
            {" "}
            {t.and}
            {" "}
            <a href={localeHref(locale, "/terms")}>{t.terms}</a>
            {t.suffix}
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-decline" onClick={() => respond("denied")}>
              {t.decline}
            </button>
            <button type="button" className="cookie-accept" onClick={() => respond("granted")}>
              {t.accept}
            </button>
          </div>
        </div>
      )}

      {measurementId && consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${measurementId}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
