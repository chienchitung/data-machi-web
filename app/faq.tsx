"use client";

import { useState } from "react";

const faqs = [
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
];

export function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="faq-section section-shell" id="faq">
      <div className="section-intro">
        <div>
          <span className="section-kicker">FAQ</span>
          <h2>常見問題。</h2>
        </div>
        <p>如果這裡沒有回答到你的疑問，歡迎直接寫信給我們。</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
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
              {isOpen && <p className="faq-answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
