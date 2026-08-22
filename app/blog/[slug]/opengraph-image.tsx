import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";
import { BLOG_COVER_ART_SVG } from "../cover-art";
import { BRAND_MARK_SVG } from "../../logo";

// Rendered at 2x (2400x1260) and downscaled by the platform on display —
// keeps text and thin lines crisp after LinkedIn/Facebook's own image
// compression, which otherwise visibly blurs a 1x source.
export const size = { width: 2400, height: 1260 };
export const contentType = "image/png";
export const alt = "Data Machi";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

const fontsDir = path.join(process.cwd(), "assets/fonts");
const regular = fs.readFileSync(path.join(fontsDir, "NotoSansTC-Regular.ttf"));
const semibold = fs.readFileSync(path.join(fontsDir, "NotoSansTC-SemiBold.ttf"));
const bold = fs.readFileSync(path.join(fontsDir, "NotoSansTC-Bold.ttf"));

const coverArtDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(
  BLOG_COVER_ART_SVG.replace('width="150" height="150"', 'width="340" height="340"')
)}`;

const brandMarkDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(BRAND_MARK_SVG)}`;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          transform: "scale(2)",
          transformOrigin: "top left",
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
                  background: "#a7f3d0",
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brandMarkDataUri} width={46} height={46} alt="" />
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverArtDataUri} width={340} height={340} alt="" />
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
