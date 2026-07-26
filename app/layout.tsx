import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://data-machi.com"),
  title: {
    default: "Data Machi｜企業 AI 知識工作流",
    template: "%s｜Data Machi",
  },
  description:
    "從 RAG、Tool Use、Agent 到 Agentic Workflow，逐步打造真正能完成工作的企業 AI 知識工作流。",
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
      <body>{children}</body>
    </html>
  );
}
