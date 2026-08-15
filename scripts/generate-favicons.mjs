import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputPath = path.resolve("public/favicon.png");
const publicDir = path.resolve("public");

async function generateFavicons() {
  console.log("Generating multi-format, multi-device favicons from public/favicon.png...");

  const inputBuffer = fs.readFileSync(inputPath);

  // 1. Generate WebP & AVIF master favicons
  await sharp(inputBuffer)
    .resize(512, 512)
    .webp({ quality: 95, effort: 6 })
    .toFile(path.join(publicDir, "favicon.webp"));

  await sharp(inputBuffer)
    .resize(512, 512)
    .avif({ quality: 90, effort: 6 })
    .toFile(path.join(publicDir, "favicon.avif"));

  // 2. Multi-resolution WebP, AVIF, and PNG icons
  const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 384, 512];

  for (const size of sizes) {
    // PNG
    await sharp(inputBuffer)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(publicDir, `icon-${size}x${size}.png`));

    // WebP
    await sharp(inputBuffer)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 95, effort: 6 })
      .toFile(path.join(publicDir, `icon-${size}x${size}.webp`));

    // AVIF
    await sharp(inputBuffer)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .avif({ quality: 90, effort: 6 })
      .toFile(path.join(publicDir, `icon-${size}x${size}.avif`));
  }

  // 3. Apple Touch Icon (180x180)
  await sharp(inputBuffer)
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  await sharp(inputBuffer)
    .resize(180, 180)
    .webp({ quality: 95 })
    .toFile(path.join(publicDir, "apple-touch-icon.webp"));

  // 4. Default favicon.ico (32x32 PNG container readable as ICO by modern and legacy engines)
  await sharp(inputBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.ico"));

  // 5. Generate high-impact 1200x630 OpenGraph / Social Embed image for WhatsApp, Discord, Slack, Twitter
  const sphereResized = await sharp(inputBuffer)
    .resize(440, 440)
    .png()
    .toBuffer();

  const svgOverlay = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#2563EB" stop-opacity="0.3"/>
          <stop offset="45%" stop-color="#DB2777" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#06080F" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#06080F"/>
      <rect width="1200" height="630" fill="url(#bgGlow)"/>
      <text x="600" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="-1">Naveen Gumaste</text>
      <text x="600" y="565" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#94A3B8" text-anchor="middle">Frontend Developer &amp; DevOps Engineer · ngxlabs.tech</text>
    </svg>
  `;

  await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: sphereResized,
        top: 55,
        left: 380,
      },
    ])
    .png({ compressionLevel: 8 })
    .toFile(path.join(publicDir, "og-image.png"));

  await sharp(path.join(publicDir, "og-image.png"))
    .webp({ quality: 92 })
    .toFile(path.join(publicDir, "og-image.webp"));

  console.log("Successfully generated all multi-format favicon assets and social embed cards!");
}

generateFavicons().catch(console.error);
