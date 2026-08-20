import type { Metadata } from "next";
import { SiteHeader } from "../header";
import { SiteFooter } from "../footer";

export const metadata: Metadata = {
  title: "隱私政策",
  description: "Data Machi 如何蒐集、使用與保護您在本網站上的資料。",
};

export default function PrivacyPolicy() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="policy-section section-shell">
        <div className="policy-header">
          <span className="section-kicker">PRIVACY POLICY</span>
          <h1>隱私政策</h1>
          <p className="policy-updated">最後更新日期：2026 年 8 月</p>
        </div>

        <div className="policy-body">
          <p>
            歡迎使用 Data Machi（以下稱「本網站」，網址為 www.data-machi.com）。我們重視您的隱私，本政策說明我們在您使用本網站時，會蒐集哪些資訊、如何使用這些資訊，以及您可以如何控制自己的資料。使用本網站即表示您已閱讀並同意本政策的內容。
          </p>

          <h2>1. 我們蒐集哪些資訊</h2>
          <p>
            本網站是一個內容導覽頁面，沒有會員註冊、線上金流或表單蒐集功能，我們不會主動要求您提供姓名、電子郵件等個人資料。我們透過 <strong>Google Analytics（GA4）</strong> 蒐集匿名的網站使用數據，包括但不限於：
          </p>
          <ul>
            <li>造訪頁面、停留時間與點擊行為</li>
            <li>裝置類型、瀏覽器與作業系統等技術資訊</li>
            <li>概略地理位置（依 IP 位址推斷，不精確至個人住址）</li>
            <li>流量來源（例如透過搜尋引擎、社群平台或直接輸入網址造訪）</li>
          </ul>
          <p>這些資訊皆為聚合、統計性質，我們不會將其與您的真實身分連結。</p>

          <h2>2. Cookie 與分析工具的使用</h2>
          <p>
            本網站使用 Cookie 來支援 Google Analytics 的分析功能。當您第一次造訪本網站時，會看到 Cookie 同意橫幅——只有在您點擊「接受」之後，追蹤程式碼才會開始運作；若您點擊「拒絕」，本網站將不會載入任何分析用 Cookie。您也可以隨時透過瀏覽器設定清除 Cookie 或封鎖追蹤，這不會影響您瀏覽本網站的其他功能。
          </p>

          <h2>3. 我們如何使用這些資訊</h2>
          <p>我們蒐集上述資訊的唯一目的，是了解訪客如何使用本網站，以便：</p>
          <ul>
            <li>了解哪些內容對讀者最有幫助，作為未來內容規劃的依據</li>
            <li>排查網站效能或使用體驗上的問題</li>
            <li>掌握整體流量趨勢</li>
          </ul>
          <p>我們不會將這些資料用於廣告投放、轉售給第三方，或做任何超出上述目的之使用。</p>

          <h2>4. 第三方服務</h2>
          <p>本網站使用以下第三方服務，這些服務有各自獨立的隱私政策：</p>
          <ul>
            <li>
              <strong>Google Analytics</strong>：提供匿名流量分析，詳見
              {" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google 隱私權政策</a>。
            </li>
            <li>
              <strong>Mintlify</strong>：本網站的「開始閱讀」連結會導向由 Mintlify 代管的文件內容（www.data-machi.com/docs），該部分內容適用 Mintlify 自身的隱私與資料處理規範。
            </li>
          </ul>

          <h2>5. 資料保留與安全</h2>
          <p>
            我們不會在自有伺服器上儲存任何可識別個人身分的資料。透過 Google Analytics 蒐集的統計資料，其保留期限與存取權限依 Google Analytics 平台預設政策管理。我們會採取合理的技術措施（例如 HTTPS 加密傳輸），確保您與本網站之間的連線安全。
          </p>

          <h2>6. 您的選擇與權利</h2>
          <p>您隨時可以：</p>
          <ul>
            <li>在 Cookie 同意橫幅中選擇「拒絕」，或事後清除瀏覽器儲存的同意紀錄，改變您的選擇</li>
            <li>透過瀏覽器的隱私設定封鎖 Cookie 或使用無痕模式瀏覽</li>
            <li>安裝瀏覽器擴充功能（如 Google Analytics 停用外掛）進一步限制追蹤</li>
            <li>對本政策內容有任何疑問，透過下方聯絡方式與我們聯繫</li>
          </ul>

          <h2>7. 兒童隱私</h2>
          <p>本網站的內容主要面向企業與職場讀者，並非針對兒童設計，我們不會刻意蒐集 13 歲以下兒童的個人資料。</p>

          <h2>8. 政策修訂</h2>
          <p>
            我們可能不定期更新本隱私政策，以反映網站功能或法規要求的變化。政策異動後會更新本頁「最後更新日期」，建議您不定期回來查看。若有重大變更，我們會在網站上以顯著方式通知。
          </p>

          <h2>9. 聯絡我們</h2>
          <p>
            若您對本隱私政策有任何疑問或建議，歡迎透過以下方式與我們聯繫：
            {" "}
            <a href="mailto:hello@data-machi.com">hello@data-machi.com</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
