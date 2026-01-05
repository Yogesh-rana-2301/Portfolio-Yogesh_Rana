/** @type {import('next').NextConfig} */
// Set this to true if deploying to a GitHub Pages PROJECT site (username.github.io/repo-name)
// Set to false if deploying to a GitHub Pages USER site (username.github.io)
const isProjectSite = true;
const repoName = "Portfolio-Yogesh_Rana";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages && isProjectSite ? `/${repoName}` : "";

console.log(" Next.js Config:");
console.log("  GITHUB_ACTIONS:", process.env.GITHUB_ACTIONS);
console.log("  isGitHubPages:", isGitHubPages);
console.log("  basePath:", basePath || "(none)");
console.log("  assetPrefix:", basePath || "(none)");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
