import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/portfolio' : '';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  basePath: basePath,
  assetPrefix: isGitHubPages ? '/portfolio/' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
