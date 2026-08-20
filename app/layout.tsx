import type { Metadata } from "next";
import { CookieConsent } from "./cookie-consent";
import "./globals.css";
import "./brand.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://data-machi.com"),
  title: {
    default: "Data Machi｜企業 AI 知識工作流",
    template: "%s｜Data Machi",
  },
  description:
    "從 RAG、Tool Use、Agent 到 Agentic Workflow，逐步打造真正能完成工作的企業 AI 知識工作流。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Data Machi｜企業 AI 知識工作流",
    description:
      "從 RAG 到 Agentic Workflow，30 天打造真正能完成工作的企業 AI。",
    url: "https://data-machi.com",
    siteName: "Data Machi",
    locale: "zh_TW",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <CookieConsent measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
