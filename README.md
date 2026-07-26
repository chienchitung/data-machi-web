<div align="center">
  <img src="./app/icon.svg" alt="Data Machi" width="84" />
  <h1>Data Machi Website</h1>
  <p>從 RAG 到 Agentic Workflow，打造企業 AI 知識工作流。</p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Vercel" />
  </p>
</div>

## About

這個 repository 存放 Data Machi 官網首頁。網站以 Next.js App Router 與 TypeScript 建置，預計部署至 Vercel，並使用 `data-machi.com` 作為正式網域。

文件內容存放於另一個 repository：[`chienchitung/docs`](https://github.com/chienchitung/docs)。完成 Mintlify `/docs` Base Path 與 Vercel rewrite 後，文件將呈現在：

```text
https://data-machi.com/docs
```

## Local development

```bash
npm install
npm run dev
```

開啟 `http://localhost:3000`。

## Build

```bash
npm run build
npm run start
```

## Deployment

將此 repository 匯入 Vercel，Framework Preset 選擇 **Next.js**。正式網域與 `/docs` rewrite 將於 Mintlify Base Path 切換後設定。
