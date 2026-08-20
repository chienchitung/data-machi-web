import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "服務條款",
  description: "使用 Data Machi 網站與內容前，請詳閱本服務條款。",
};

export default function Terms() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">TERMS OF SERVICE</span>
          <h1>服務條款</h1>
          <p className="policy-updated">最後更新日期：2026 年 8 月</p>
        </div>

        <div className="policy-body">
          <p>
            歡迎使用 Data Machi（以下稱「本網站」，網址為 www.data-machi.com）。當您瀏覽或使用本網站時，即表示您已閱讀、理解並同意本服務條款；若您不同意本條款的任何內容，請不要繼續使用本網站。
          </p>

          <h2>1. 服務說明</h2>
          <p>
            本網站提供企業 AI 知識工作流相關的學習內容，包括 30 天系列文章、產業觀察與說明文件。這些內容目前完全免費、公開閱讀，不需要註冊帳號，也沒有任何付費機制。
          </p>

          <h2>2. 內容僅供參考，不構成專業建議</h2>
          <p>
            本網站的內容以教學與知識分享為目的，反映我們當下的理解與判斷，不保證內容完全正確、完整或即時更新，也不構成法律、財務、技術或其他專業領域的正式建議。您在自己的企業或專案中採取任何行動前，應自行評估並視需要諮詢相關專業人士。
          </p>

          <h2>3. 智慧財產權</h2>
          <p>
            本網站的文字、圖像、程式碼示意與版面設計，除另有標示外，著作權歸 Data Machi 所有。您可以基於個人學習或非商業用途閱讀、分享本網站的連結；若要重製、公開轉貼全文或做商業使用，請先透過下方聯絡方式取得我們的同意。
          </p>

          <h2>4. 外部連結與第三方內容</h2>
          <p>
            本網站部分內容（例如「文件」）由 Mintlify 代管，部分連結會導向第三方網站或服務。我們無法保證第三方內容的正確性或可用性，使用這些外部連結時，請一併參考該服務自己的條款與政策。
          </p>

          <h2>5. 免責聲明與責任限制</h2>
          <p>
            本網站以「現況」提供內容，不做任何明示或默示的保證。在法律允許的最大範圍內，Data Machi 對於您因使用（或無法使用）本網站內容所產生的任何直接或間接損失，不負賠償責任。
          </p>

          <h2>6. 條款修改</h2>
          <p>
            我們可能不定期修改本服務條款，以反映網站功能或法規要求的變化。修改後會更新本頁「最後更新日期」；持續使用本網站，視為您同意修改後的條款。
          </p>

          <h2>7. 準據法</h2>
          <p>本服務條款之解釋與適用，以中華民國法律為準據法。</p>

          <h2>8. 聯絡我們</h2>
          <p>
            若您對本服務條款有任何疑問，歡迎透過
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>
            {" "}
            與我們聯繫。
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
