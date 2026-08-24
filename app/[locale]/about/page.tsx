import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "關於我們",
    description: "為什麼會有 Data Machi，我們想幫助企業建立的能力是什麼。",
    kicker: "ABOUT",
    h1: "關於 Data Machi",
    sections: [
      {
        h2: "我們在做什麼",
        p: "Data Machi 是一個聚焦企業 AI 知識工作流的學習系列，用 30 天的篇幅，帶讀者從 RAG、Tool Use、Agent 一路走到 Agentic Workflow，理解一個 AI 系統如何從「回答問題」進化到「可靠完成工作」。",
      },
      {
        h2: "為什麼要做這個系列",
        p: "市面上不缺聊天機器人的介紹，缺的是「企業要怎麼把 AI 真正接進日常工作」的完整脈絡。多數團隊卡在同一個地方：知道模型能聊天，卻不知道怎麼讓它讀懂公司自己的資料、呼叫對的工具、在有風險的決策上保留人工審核。Data Machi 想把這條路徑講清楚，而不是只展示一個漂亮的 Demo。",
      },
      {
        h2: "我們的方法",
        p: "我們相信可靠的企業 AI 產品，需要同時處理知識、計算、工具、決策與控制，而不只是換一個更大的模型。這也是首頁「產品理念」與「能力模型」兩個段落想呈現的核心思路：把每一次能力升級，拆解成具體的資料架構、工具權限與可靠性設計。",
      },
    ],
    contactH2: "聯絡我們",
    contactPrefix: "有任何問題、合作提案，或是想跟我們聊聊企業 AI 落地的實際狀況，歡迎寫信到",
    contactSuffix: "。",
  },
  en: {
    title: "About",
    description: "Why Data Machi exists, and the capability we want to help enterprises build.",
    kicker: "ABOUT",
    h1: "About Data Machi",
    sections: [
      {
        h2: "What we're doing",
        p: "Data Machi is a learning series focused on enterprise AI knowledge workflows. Over 30 days, it walks readers from RAG, Tool Use, and Agent through to Agentic Workflow, building an understanding of how an AI system evolves from \"answering questions\" to \"reliably getting work done.\"",
      },
      {
        h2: "Why this series",
        p: "There's no shortage of chatbot introductions out there. What's missing is the full picture of \"how does an enterprise actually get AI into its daily work.\" Most teams get stuck at the same spot: they know the model can chat, but not how to get it to read their company's own data, call the right tools, or keep a human in the loop on risky decisions. Data Machi wants to lay out that path clearly, instead of rushing to show off a polished demo.",
      },
      {
        h2: "Our approach",
        p: "We believe a reliable enterprise AI product needs to handle knowledge, computation, tools, decisions, and control together — not just swap in a bigger model. That's the core idea behind the homepage's \"Product Thinking\" and \"Maturity Model\" sections: breaking every capability upgrade down into concrete data architecture, tool permissions, and reliability design.",
      },
    ],
    contactH2: "Contact us",
    contactPrefix: "For questions, partnership proposals, or just to talk about the realities of enterprise AI adoption, feel free to email",
    contactSuffix: ".",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];

  return (
    <main id="top">
      <SiteHeader locale={locale} />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">{t.kicker}</span>
          <h1>{t.h1}</h1>
        </div>

        <div className="policy-body">
          {t.sections.map((section) => (
            <div key={section.h2}>
              <h2>{section.h2}</h2>
              <p>{section.p}</p>
            </div>
          ))}

          <h2>{t.contactH2}</h2>
          <p>
            {t.contactPrefix}
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>
            {t.contactSuffix}
          </p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
