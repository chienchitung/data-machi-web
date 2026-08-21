import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Data Machi";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const fontsDir = path.join(process.cwd(), "assets/fonts");
const regular = fs.readFileSync(path.join(fontsDir, "NotoSansTC-Regular.ttf"));
const semibold = fs.readFileSync(path.join(fontsDir, "NotoSansTC-SemiBold.ttf"));
const bold = fs.readFileSync(path.join(fontsDir, "NotoSansTC-Bold.ttf"));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "linear-gradient(135deg, #f7fbf8 0%, #eafbf0 100%)",
          fontFamily: "Noto Sans TC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(145deg, #22c55e, #0f8b42)",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600, color: "#0b1f17" }}>
            Data Machi
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {post && (
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 16px",
                borderRadius: 999,
                background: "#dcfce7",
                color: "#0f7a3b",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {post.tag}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#0b1f17",
            }}
          >
            {post ? post.title : "Data Machi"}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#607068" }}>data-machi.com</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans TC", data: regular, weight: 400, style: "normal" },
        { name: "Noto Sans TC", data: semibold, weight: 600, style: "normal" },
        { name: "Noto Sans TC", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
