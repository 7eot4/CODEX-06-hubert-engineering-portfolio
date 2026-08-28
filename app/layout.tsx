import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://hubert-portfolio.rocky-hake-4435.chatgpt.site';
const assetBasePath = process.env.GITHUB_PAGES === 'true'
  ? '/CODEX-06-hubert-engineering-portfolio'
  : '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hubert — Electrical Engineer / Intelligent Systems',
    template: '%s — Hubert',
  },
  description:
    'Electrical engineer working across industrial systems, automation, software and artificial intelligence.',
  keywords: [
    'electrical engineer',
    'industrial automation',
    'marine electrical systems',
    'intelligent systems',
    'engineering portfolio',
  ],
  authors: [{ name: 'Hubert' }],
  creator: 'Hubert',
  icons: { icon: [{ url: `${assetBasePath}/icon.svg`, type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hubert — From Electrical Systems to Intelligent Systems',
    description: 'Engineering across electrical infrastructure, industry, automation, software and AI.',
    siteName: 'Hubert / Engineering Profile',
    images: [{ url: `${siteUrl}/og.png`, width: 1731, height: 909, alt: 'Hubert — From Electrical Systems to Intelligent Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubert — From Electrical Systems to Intelligent Systems',
    description: 'Engineering across electrical infrastructure, industry, automation, software and AI.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
