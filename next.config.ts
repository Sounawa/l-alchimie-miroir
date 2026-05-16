import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // GitHub Pages: uncomment and set if deploying to username.github.io/repo-name/
  // basePath: '/l-alchimie-miroir',
};

export default nextConfig;
