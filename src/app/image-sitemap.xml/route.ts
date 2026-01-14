import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const baseUrl = "https://yogeshrana.me";
  const publicDir = path.join(process.cwd(), "public");

  // Function to recursively get all image files
  const getImages = (dir: string): string[] => {
    let results: string[] = [];
    try {
      const list = fs.readdirSync(dir);

      list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
          results = results.concat(getImages(filePath));
        } else if (
          /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file) &&
          !file.includes("favicon")
        ) {
          // Get relative path from public directory
          const relativePath = path.relative(publicDir, filePath);
          results.push("/" + relativePath.replace(/\\/g, "/"));
        }
      });
    } catch (error) {
      console.error("Error reading directory:", error);
    }

    return results;
  };

  const imageFiles = getImages(publicDir);

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageFiles
  .map(
    (image) => `  <url>
    <loc>${baseUrl}${image}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${baseUrl}${image}</image:loc>
      <image:title>${path
        .basename(image, path.extname(image))
        .replace(/[-_]/g, " ")}</image:title>
    </image:image>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
