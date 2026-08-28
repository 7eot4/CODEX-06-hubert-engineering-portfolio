import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hubert — From Electrical Systems to Intelligent Systems',
    description: 'Engineering across electrical infrastructure, industry, automation, software and AI.',
    siteName: 'Hubert / Engineering Profile',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Hubert — From Electrical Systems to Intelligent Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubert — From Electrical Systems to Intelligent Systems',
    description: 'Engineering across electrical infrastructure, industry, automation, software and AI.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
