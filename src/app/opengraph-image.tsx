import { ImageResponse } from "next/og";

export const alt = "ngxlabs.tech - Bold Brands, resonate deep.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F0E8",
          color: "#141414",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          border: "16px solid #141414",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700 }}>ngx</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}>
            Frontend developer portfolio from Dharwad, India
          </div>
          <div style={{ fontSize: 28 }}>Bold Brands, resonate deep.</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
          }}
        >
          <span>ngxlabs.tech</span>
          <span
            style={{
              background: "#FFDE59",
              padding: "8px 16px",
              border: "3px solid #141414",
            }}
          >
            Next.js · Cloud · Tools
          </span>
        </div>
      </div>
    ),
    size,
  );
}
