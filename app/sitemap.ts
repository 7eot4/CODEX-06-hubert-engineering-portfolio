import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://hubert-portfolio.rocky-hake-4435.chatgpt.site';
  return [{ url: origin, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
