import type { Metadata } from "next";
import { CookieConsent } from "../cookie-consent";
import { locales, defaultLocale, asLocale } from "../i18n";
import "../globals.css";
import "../brand.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const copy = {
  zh: {
    title: { default: "Data Machi｜企業 AI 知識工作流", template: "%s｜Data Machi" },
    description: "從 RAG、Tool Use、Agent 到 Agentic Workflow，逐步打造真正能完成工作的企業 AI 知識工作流。",
    ogTitle: "Data Machi｜企業 AI 知識工作流",
    ogDescription: "從 RAG 到 Agentic Workflow，30 天打造真正能完成工作的企業 AI。",
    ogLocale: "zh_TW",
    htmlLang: "zh-Hant",
  },
  en: {
    title: { default: "Data Machi｜Enterprise AI Knowledge Workflow", template: "%s｜Data Machi" },
    description: "From RAG, Tool Use, and Agent to Agentic Workflow — step by step toward enterprise AI that actually gets work done.",
    ogTitle: "Data Machi｜Enterprise AI Knowledge Workflow",
    ogDescription: "From RAG to Agentic Workflow — 30 days to enterprise AI that actually gets work done.",
    ogLocale: "en_US",
    htmlLang: "en",
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale] ?? copy[defaultLocale];

  return {
    metadataBase: new URL("https://www.data-machi.com"),
    title: t.title,
    description: t.description,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      languages: {
        "zh-Hant": "https://www.data-machi.com/zh",
        en: "https://www.data-machi.com/en",
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: `https://www.data-machi.com/${locale}`,
      siteName: "Data Machi",
      locale: t.ogLocale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale] ?? copy[defaultLocale];

  return (
    <html lang={t.htmlLang}>
      <body>
        {children}
        <CookieConsent measurementId={GA_MEASUREMENT_ID} locale={locale} />
      </body>
    </html>
  );
}
