import type { NextConfig } from 'next';

const repository = 'CODEX-06-hubert-engineering-portfolio';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: `/${repository}`,
      assetPrefix: `/${repository}`,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
