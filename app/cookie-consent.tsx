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
            我們使用 Cookie 蒐集匿名的網站使用數據（透過 Google Analytics），協助我們了解訪客如何使用 Data Machi、持續改善內容。點擊「接受」即表示您同意，詳情請見
            {" "}
            <a href="/privacy">隱私政策</a>。
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
