"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "data-machi-cookie-consent";

export function CookieConsent({ measurementId }: { measurementId?: string }) {
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
        <div className="cookie-banner" role="dialog" aria-label="Cookie 使用同意">
          <p>
            我們使用 cookies 來確保您在網站上能獲得良好的體驗。如果您繼續使用本網站，我們將認定您接受並理解我們的
            {" "}
            <a href="/privacy">隱私權政策</a>
            {" "}
            和
            {" "}
            <a href="/terms">服務條款</a>。
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-decline" onClick={() => respond("denied")}>
              拒絕
            </button>
            <button type="button" className="cookie-accept" onClick={() => respond("granted")}>
              接受
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
