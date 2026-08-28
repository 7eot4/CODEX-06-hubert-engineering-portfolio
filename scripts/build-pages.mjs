import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextBinary = require.resolve('next/dist/bin/next');
const siteUrl = 'https://7eot4.github.io/CODEX-06-hubert-engineering-portfolio';

const result = spawnSync(process.execPath, [nextBinary, 'build'], {
  env: {
    ...process.env,
    GITHUB_PAGES: 'true',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? siteUrl,
  },
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
