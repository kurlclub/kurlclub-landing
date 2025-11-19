import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const figtree = localFont({
  src: [
    { path: '/fonts/Figtree-VariableFont_wght.ttf', weight: '100 900' },
    { path: '/fonts/static/Figtree-Light.ttf', weight: '300' },
    { path: '/fonts/static/Figtree-Regular.ttf', weight: '400' },
    { path: '/fonts/static/Figtree-Medium.ttf', weight: '500' },
    { path: '/fonts/static/Figtree-SemiBold.ttf', weight: '600' },
    { path: '/fonts/static/Figtree-Bold.ttf', weight: '700' },
    { path: '/fonts/static/Figtree-Black.ttf', weight: '800' },
  ],
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
    icon: ['/favicon.ico', '/icon-192.png'],
    apple: ['/apple-icon.png'],
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
      <body className={`${figtree.className}`}>{children}</body>
    </html>
  );
}
