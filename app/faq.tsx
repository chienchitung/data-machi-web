"use client";

import { useState } from "react";
import type { Locale } from "./i18n";

const copy = {
  zh: {
    kicker: "FAQ",
    title: "常見問題",
    intro: "如果這裡沒有回答到你的疑問，歡迎直接寫信給我們。",
    faqs: [
      {
        q: "Data Machi 是什麼？",
        a: "Data Machi 是一套免費的企業 AI 學習資源，核心是 30 天系列——從 RAG、Tool Use、Agent 到 Agentic Workflow，系統性拆解企業 AI 該怎麼設計與判斷。我們目前不是一個產品或開發平台。",
      },
      {
        q: "真的完全免費嗎？需要註冊嗎？",
        a: "是的，目前完全免費、公開閱讀，不需要註冊帳號或付費。我們還沒有推出任何收費方案。",
      },
      {
        q: "跟 LangChain、Dify、Copilot Studio 這些平台有什麼不同？",
        a: "這些平台解決的是「怎麼把 Agent 建出來、跑起來」；Data Machi 想補的是更前面那一塊——幫你建立「為什麼會失敗、什麼決策該讓 AI 做」的判斷力。無論你最後用哪個平台，這套判斷力都用得上。",
      },
      {
        q: "沒有工程背景，看得懂嗎？",
        a: "30 天系列從概念到實作都有涵蓋。每一天會先講清楚「為什麼」再進到「怎麼做」，工程背景會讓你更容易跟上實作細節，但不是必要條件。",
      },
      {
        q: "如何提供意見或聯絡你們？",
        a: "歡迎透過 support@data-machi.com 跟我們聊聊，不管是問題、建議還是合作想法都可以。",
      },
    ],
  },
  en: {
    kicker: "FAQ",
    title: "Frequently Asked Questions",
    intro: "If this doesn't answer your question, feel free to email us directly.",
    faqs: [
      {
        q: "What is Data Machi?",
        a: "Data Machi is a free enterprise AI learning resource built around a 30-day series — from RAG, Tool Use, and Agent to Agentic Workflow, systematically breaking down how to design and reason about enterprise AI. We're not a product or development platform right now.",
      },
      {
        q: "Is it really completely free? Do I need to sign up?",
        a: "Yes — it's currently completely free and openly readable, no account or payment required. We haven't launched any paid plan yet.",
      },
      {
        q: "How is this different from platforms like LangChain, Dify, or Copilot Studio?",
        a: "Those platforms solve \"how do you build and run an Agent.\" Data Machi is trying to fill in the step before that — helping you build the judgment for \"why do Agents fail, and which decisions should an AI actually make.\" Whichever platform you end up using, that judgment still applies.",
      },
      {
        q: "I don't have an engineering background — can I still follow along?",
        a: "The 30-day series covers everything from concepts to implementation. Each day explains \"why\" before getting to \"how.\" An engineering background makes the implementation details easier to follow, but it isn't required.",
      },
      {
        q: "How do I give feedback or get in touch?",
        a: "Feel free to reach out at support@data-machi.com — questions, suggestions, or collaboration ideas are all welcome.",
      },
    ],
  },
} as const;

export function FAQSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="faq-section section-shell" id="faq">
      <div className="section-intro">
        <div>
          <span className="section-kicker">{t.kicker}</span>
          <h2>{t.title}</h2>
        </div>
        <p>{t.intro}</p>
      </div>

      <div className="faq-list">
        {t.faqs.map((item, index) => {
          const isOpen = expanded === index;
          return (
            <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.q}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setExpanded((value) => (value === index ? null : index))}
              >
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
