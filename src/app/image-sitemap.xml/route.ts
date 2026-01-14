import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yogeshrana.me";
  const publicDir = path.join(process.cwd(), "public");

  // Get all images from public directory
  const images: MetadataRoute.Sitemap = [];

  // Function to recursively get all image files
  const getImages = (dir: string): string[] => {
    let results: string[] = [];
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

    return results;
  };

  try {
    const imageFiles = getImages(publicDir);

    imageFiles.forEach((image) => {
      const imageName = path.basename(image, path.extname(image));
      const cleanName = imageName
        .replace(/[-_]/g, " ")
        .replace(/\d+/g, "")
        .trim();

      images.push({
        url: `${baseUrl}${image}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error("Error generating image sitemap:", error);
  }

  return images;
}
