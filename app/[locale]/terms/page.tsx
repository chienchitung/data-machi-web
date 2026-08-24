import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "服務條款",
    description: "使用 Data Machi 網站與內容前，請詳閱本服務條款。",
    kicker: "TERMS OF SERVICE",
    h1: "服務條款",
    updated: "最後更新日期：2026 年 8 月",
    intro: "歡迎使用 Data Machi（以下稱「本網站」，網址為 www.data-machi.com）。當您瀏覽或使用本網站時，即表示您已閱讀、理解並同意本服務條款；若您不同意本條款的任何內容，請不要繼續使用本網站。",
    sections: [
      { h2: "1. 服務說明", p: "本網站提供企業 AI 知識工作流相關的學習內容，包括 30 天系列文章、產業觀察與說明文件。這些內容目前完全免費、公開閱讀，不需要註冊帳號，也沒有任何付費機制。" },
      { h2: "2. 內容僅供參考，不構成專業建議", p: "本網站的內容以教學與知識分享為目的，反映我們當下的理解與判斷，不保證內容完全正確、完整或即時更新，也不構成法律、財務、技術或其他專業領域的正式建議。您在自己的企業或專案中採取任何行動前，應自行評估並視需要諮詢相關專業人士。" },
      { h2: "3. 智慧財產權", p: "本網站的文字、圖像、程式碼示意與版面設計，除另有標示外，著作權歸 Data Machi 所有。您可以基於個人學習或非商業用途閱讀、分享本網站的連結；若要重製、公開轉貼全文或做商業使用，請先透過下方聯絡方式取得我們的同意。" },
      { h2: "4. 外部連結與第三方內容", p: "本網站部分內容（例如「文件」）由 Mintlify 代管，部分連結會導向第三方網站或服務。我們無法保證第三方內容的正確性或可用性，使用這些外部連結時，請一併參考該服務自己的條款與政策。" },
      { h2: "5. 免責聲明與責任限制", p: "本網站以「現況」提供內容，不做任何明示或默示的保證。在法律允許的最大範圍內，Data Machi 對於您因使用（或無法使用）本網站內容所產生的任何直接或間接損失，不負賠償責任。" },
      { h2: "6. 條款修改", p: "我們可能不定期修改本服務條款，以反映網站功能或法規要求的變化。修改後會更新本頁「最後更新日期」；持續使用本網站，視為您同意修改後的條款。" },
      { h2: "7. 準據法", p: "本服務條款之解釋與適用，以中華民國法律為準據法。" },
    ],
    contactH2: "8. 聯絡我們",
    contactPrefix: "若您對本服務條款有任何疑問，歡迎透過",
    contactSuffix: "與我們聯繫。",
  },
  en: {
    title: "Terms of Service",
    description: "Please read these Terms of Service carefully before using the Data Machi website and its content.",
    kicker: "TERMS OF SERVICE",
    h1: "Terms of Service",
    updated: "Last updated: August 2026",
    intro: "Welcome to Data Machi (\"this website,\" at www.data-machi.com). By browsing or using this website, you confirm that you have read, understood, and agreed to these Terms of Service. If you do not agree to any part of these terms, please do not continue using this website.",
    sections: [
      { h2: "1. Description of Service", p: "This website provides learning content related to enterprise AI knowledge workflows, including the 30-day series, industry commentary, and documentation. This content is currently completely free and openly readable, requires no account registration, and has no payment mechanism of any kind." },
      { h2: "2. Content Is for Reference Only, Not Professional Advice", p: "The content on this website is provided for educational and knowledge-sharing purposes, reflecting our current understanding and judgment. We do not guarantee that the content is entirely accurate, complete, or up to date, and it does not constitute formal legal, financial, technical, or other professional advice. Before taking any action within your own organization or project, you should evaluate it independently and consult relevant professionals as needed." },
      { h2: "3. Intellectual Property", p: "Unless otherwise indicated, the text, images, code illustrations, and layout on this website are copyrighted by Data Machi. You may read and share links to this website for personal, non-commercial use. To reproduce, republish full content, or use it commercially, please obtain our consent first via the contact information below." },
      { h2: "4. External Links and Third-Party Content", p: "Some content on this website (such as \"Docs\") is hosted by Mintlify, and some links lead to third-party websites or services. We cannot guarantee the accuracy or availability of third-party content; when using these external links, please also refer to that service's own terms and policies." },
      { h2: "5. Disclaimer and Limitation of Liability", p: "This website provides content on an \"as is\" basis, without any express or implied warranties. To the maximum extent permitted by law, Data Machi is not liable for any direct or indirect loss arising from your use of (or inability to use) the content on this website." },
      { h2: "6. Changes to These Terms", p: "We may revise these Terms of Service from time to time to reflect changes in the website's functionality or applicable regulations. Any revision will update the \"Last updated\" date on this page; continued use of this website constitutes your agreement to the revised terms." },
      { h2: "7. Governing Law", p: "These Terms of Service are governed by and interpreted in accordance with the laws of the Republic of China (Taiwan)." },
    ],
    contactH2: "8. Contact Us",
    contactPrefix: "If you have any questions about these Terms of Service, feel free to contact us at",
    contactSuffix: ".",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
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
          <p className="policy-updated">{t.updated}</p>
        </div>

        <div className="policy-body">
          <p>{t.intro}</p>

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
            {" "}
            {t.contactSuffix}
          </p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
