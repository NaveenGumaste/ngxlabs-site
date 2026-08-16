import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const iconPath = path.join(process.cwd(), "public/icon-32x32.png");
  const iconBase64 = fs.readFileSync(iconPath).toString("base64");
  const iconDataUrl = `data:image/png;base64,${iconBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={iconDataUrl}
          width={32}
          height={32}
          alt="icon"
          style={{ width: 32, height: 32, objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
