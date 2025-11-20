import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: {
    template: '%s | KurlClub',
    default: 'KurlClub',
  },
  description: 'Gym management system for fitness center owners',
  applicationName: 'KurlClub',
  appleWebApp: {
    title: 'KurlClub',
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: ['/favicon.png'],
    apple: ['/apple-favicon.png'],
  },
  manifest: '/manifest.json',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className={figtree.variable}>{children}</body>
    </html>
  );
}
