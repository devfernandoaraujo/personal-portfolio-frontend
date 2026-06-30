import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';

export const metadata: Metadata = {
  title: 'Fernando Araujo — Full-Stack Software Engineer',
  description:
    'Full-stack software engineer building production apps in React, Next.js, TypeScript and C# / .NET — now shipping AI products. Available for full-time or contract across Canada and the US.',
  keywords: [
    'Fernando Araujo',
    'Software Engineer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'C#',
    '.NET',
    'AI',
    'Canada',
  ],
  authors: [{ name: 'Fernando Araujo' }],
  openGraph: {
    title: 'Fernando Araujo — Full-Stack Software Engineer',
    description: 'Building production apps in React, Next.js, TypeScript and C# / .NET.',
    url: 'https://www.fernandomatosaraujo.com',
    siteName: 'Fernando Araujo',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONTS_HREF} rel="stylesheet" />
      </head>
      <body>
        <div className="fa-app">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
