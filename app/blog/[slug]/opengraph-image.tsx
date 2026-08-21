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

const barHeights = [46, 74, 58, 96, 118];

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "linear-gradient(135deg, #f7fbf8 0%, #eafbf0 100%)",
          fontFamily: "Noto Sans TC",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "680px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {post && (
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "#dcfce7",
                  color: "#0f7a3b",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {post.tag}
              </div>
            )}
            <div
              style={{
                display: "flex",
                fontSize: 50,
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#0b1f17",
              }}
            >
              {post ? post.title : "Data Machi"}
            </div>
            {post && (
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  lineHeight: 1.6,
                  color: "#607068",
                }}
              >
                {post.summary.length > 60 ? `${post.summary.slice(0, 60)}...` : post.summary}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", width: "100%", height: 1, background: "#dce6e0" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: "linear-gradient(145deg, #22c55e, #0f8b42)",
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                D
              </div>
              <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "#0b1f17" }}>
                Data Machi
              </div>
              <div style={{ display: "flex", fontSize: 20, color: "#8b978f" }}>data-machi.com</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            width: "392px",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, rgba(34,197,94,0) 72%)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 260,
              padding: "28px 26px",
              borderRadius: 24,
              background: "#ffffff",
              border: "1px solid #dce6e0",
              boxShadow: "0 24px 48px rgba(14, 55, 35, 0.12)",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 118 }}>
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    width: 30,
                    height: h,
                    borderRadius: 6,
                    background: i === barHeights.length - 1 ? "#0d7134" : "#bfe6cc",
                  }}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 96,
              bottom: 150,
              width: 72,
              height: 72,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #dce6e0",
              boxShadow: "0 12px 24px rgba(14, 55, 35, 0.14)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "16px solid #0d7134",
              }}
            />
          </div>
        </div>
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
