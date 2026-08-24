import type { Metadata } from "next";
import { SiteHeader } from "../../header";
import { SiteFooter } from "../../footer";
import { asLocale } from "../../i18n";

const copy = {
  zh: {
    title: "隱私政策",
    description: "Data Machi 如何蒐集、使用與保護您在本網站上的資料。",
    kicker: "PRIVACY POLICY",
    h1: "隱私政策",
    updated: "最後更新日期：2026 年 8 月",
    intro: "歡迎使用 Data Machi（以下稱「本網站」，網址為 www.data-machi.com）。我們重視您的隱私，本政策說明我們在您使用本網站時，會蒐集哪些資訊、如何使用這些資訊，以及您可以如何控制自己的資料。使用本網站即表示您已閱讀並同意本政策的內容。",
    s1h2: "1. 我們蒐集哪些資訊",
    s1p1Prefix: "本網站是一個內容導覽頁面，沒有會員註冊、線上金流或表單蒐集功能，我們不會主動要求您提供姓名、電子郵件等個人資料。我們透過",
    s1p1Bold: "Google Analytics（GA4）",
    s1p1Suffix: "蒐集匿名的網站使用數據，包括但不限於：",
    s1list: ["造訪頁面、停留時間與點擊行為", "裝置類型、瀏覽器與作業系統等技術資訊", "概略地理位置（依 IP 位址推斷，不精確至個人住址）", "流量來源（例如透過搜尋引擎、社群平台或直接輸入網址造訪）"],
    s1p2: "這些資訊皆為聚合、統計性質，我們不會將其與您的真實身分連結。",
    s2h2: "2. Cookie 與分析工具的使用",
    s2p: "本網站使用 Cookie 來支援 Google Analytics 的分析功能。當您第一次造訪本網站時，會看到 Cookie 同意橫幅——只有在您點擊「接受」之後，追蹤程式碼才會開始運作；若您點擊「拒絕」，本網站將不會載入任何分析用 Cookie。您也可以隨時透過瀏覽器設定清除 Cookie 或封鎖追蹤，這不會影響您瀏覽本網站的其他功能。",
    s3h2: "3. 我們如何使用這些資訊",
    s3p1: "我們蒐集上述資訊的唯一目的，是了解訪客如何使用本網站，以便：",
    s3list: ["了解哪些內容對讀者最有幫助，作為未來內容規劃的依據", "排查網站效能或使用體驗上的問題", "掌握整體流量趨勢"],
    s3p2: "我們不會將這些資料用於廣告投放、轉售給第三方，或做任何超出上述目的之使用。",
    s4h2: "4. 第三方服務",
    s4p: "本網站使用以下第三方服務，這些服務有各自獨立的隱私政策：",
    s4gaPrefix: "提供匿名流量分析，詳見",
    s4gaLink: "Google 隱私權政策",
    s4mintlify: "本網站的「開始閱讀」連結會導向由 Mintlify 代管的文件內容（www.data-machi.com/docs），該部分內容適用 Mintlify 自身的隱私與資料處理規範。",
    s5h2: "5. 資料保留與安全",
    s5p: "我們不會在自有伺服器上儲存任何可識別個人身分的資料。透過 Google Analytics 蒐集的統計資料，其保留期限與存取權限依 Google Analytics 平台預設政策管理。我們會採取合理的技術措施（例如 HTTPS 加密傳輸），確保您與本網站之間的連線安全。",
    s6h2: "6. 您的選擇與權利",
    s6p: "您隨時可以：",
    s6list: ["在 Cookie 同意橫幅中選擇「拒絕」，或事後清除瀏覽器儲存的同意紀錄，改變您的選擇", "透過瀏覽器的隱私設定封鎖 Cookie 或使用無痕模式瀏覽", "安裝瀏覽器擴充功能（如 Google Analytics 停用外掛）進一步限制追蹤", "對本政策內容有任何疑問，透過下方聯絡方式與我們聯繫"],
    s7h2: "7. 兒童隱私",
    s7p: "本網站的內容主要面向企業與職場讀者，並非針對兒童設計，我們不會刻意蒐集 13 歲以下兒童的個人資料。",
    s8h2: "8. 政策修訂",
    s8p: "我們可能不定期更新本隱私政策，以反映網站功能或法規要求的變化。政策異動後會更新本頁「最後更新日期」，建議您不定期回來查看。若有重大變更，我們會在網站上以顯著方式通知。",
    s9h2: "9. 聯絡我們",
    s9p: "若您對本隱私政策有任何疑問或建議，歡迎透過以下方式與我們聯繫：",
  },
  en: {
    title: "Privacy Policy",
    description: "How Data Machi collects, uses, and protects your data on this website.",
    kicker: "PRIVACY POLICY",
    h1: "Privacy Policy",
    updated: "Last updated: August 2026",
    intro: "Welcome to Data Machi (\"this website,\" at www.data-machi.com). We take your privacy seriously. This policy explains what information we collect when you use this website, how we use it, and how you can control your own data. Using this website means you've read and agreed to this policy.",
    s1h2: "1. What Information We Collect",
    s1p1Prefix: "This website is a content browsing page with no member registration, online payment, or form-collection features — we never actively ask you for your name, email, or other personal information. We collect anonymous usage data through",
    s1p1Bold: "Google Analytics (GA4)",
    s1p1Suffix: ", including but not limited to:",
    s1list: ["Pages visited, time spent, and click behavior", "Technical information such as device type, browser, and operating system", "Approximate geographic location (inferred from IP address, not precise to a personal address)", "Traffic source (e.g. via search engines, social platforms, or direct URL entry)"],
    s1p2: "This information is aggregated and statistical in nature; we never link it to your real identity.",
    s2h2: "2. Use of Cookies and Analytics Tools",
    s2p: "This website uses cookies to support Google Analytics. The first time you visit, you'll see a cookie consent banner — tracking code only starts running after you click \"Accept\"; if you click \"Decline,\" this website will not load any analytics cookies. You can also clear cookies or block tracking at any time through your browser settings, which won't affect any other functionality on this website.",
    s3h2: "3. How We Use This Information",
    s3p1: "The sole purpose of collecting the information above is to understand how visitors use this website, in order to:",
    s3list: ["Understand which content is most helpful to readers, as a basis for future content planning", "Troubleshoot website performance or usability issues", "Track overall traffic trends"],
    s3p2: "We never use this data for ad targeting, resell it to third parties, or use it for any purpose beyond those stated above.",
    s4h2: "4. Third-Party Services",
    s4p: "This website uses the following third-party services, each with its own independent privacy policy:",
    s4gaPrefix: "Provides anonymous traffic analytics — see the",
    s4gaLink: "Google Privacy Policy",
    s4mintlify: "This website's \"Start Reading\" link leads to documentation content hosted by Mintlify (www.data-machi.com/docs); that content is subject to Mintlify's own privacy and data-handling practices.",
    s5h2: "5. Data Retention and Security",
    s5p: "We do not store any personally identifiable data on our own servers. Statistical data collected through Google Analytics is retained and accessed according to Google Analytics' default platform policies. We take reasonable technical measures (such as HTTPS encryption) to keep the connection between you and this website secure.",
    s6h2: "6. Your Choices and Rights",
    s6p: "You can, at any time:",
    s6list: ["Choose \"Decline\" in the cookie consent banner, or clear your browser's stored consent record afterward to change your choice", "Block cookies through your browser's privacy settings, or browse in private/incognito mode", "Install browser extensions (such as a Google Analytics opt-out add-on) to further restrict tracking", "Contact us via the details below with any questions about this policy"],
    s7h2: "7. Children's Privacy",
    s7p: "This website's content is aimed primarily at enterprise and workplace readers, is not designed for children, and we do not knowingly collect personal data from children under 13.",
    s8h2: "8. Policy Revisions",
    s8p: "We may update this Privacy Policy from time to time to reflect changes in the website's functionality or applicable regulations. Any revision will update the \"Last updated\" date on this page — we recommend checking back periodically. We'll provide prominent notice on the website for any material change.",
    s9h2: "9. Contact Us",
    s9p: "If you have any questions or suggestions about this Privacy Policy, feel free to contact us:",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = asLocale(rawLocale);
  const t = copy[locale];
  return { title: t.title, description: t.description };
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
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

          <h2>{t.s1h2}</h2>
          <p>
            {t.s1p1Prefix} <strong>{t.s1p1Bold}</strong>{t.s1p1Suffix}
          </p>
          <ul>{t.s1list.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>{t.s1p2}</p>

          <h2>{t.s2h2}</h2>
          <p>{t.s2p}</p>

          <h2>{t.s3h2}</h2>
          <p>{t.s3p1}</p>
          <ul>{t.s3list.map((item) => <li key={item}>{item}</li>)}</ul>
          <p>{t.s3p2}</p>

          <h2>{t.s4h2}</h2>
          <p>{t.s4p}</p>
          <ul>
            <li>
              <strong>Google Analytics</strong>：{t.s4gaPrefix}
              {" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{t.s4gaLink}</a>。
            </li>
            <li>
              <strong>Mintlify</strong>：{t.s4mintlify}
            </li>
          </ul>

          <h2>{t.s5h2}</h2>
          <p>{t.s5p}</p>

          <h2>{t.s6h2}</h2>
          <p>{t.s6p}</p>
          <ul>{t.s6list.map((item) => <li key={item}>{item}</li>)}</ul>

          <h2>{t.s7h2}</h2>
          <p>{t.s7p}</p>

          <h2>{t.s8h2}</h2>
          <p>{t.s8p}</p>

          <h2>{t.s9h2}</h2>
          <p>
            {t.s9p}
            {" "}
            <a href="mailto:support@data-machi.com">support@data-machi.com</a>
          </p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
