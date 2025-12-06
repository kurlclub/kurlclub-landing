import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import AppLayout from './app-layout';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | KurlClub - Gym Management Software',
    default:
      'KurlClub - Gym Management Software | Fitness Studio Management Platform',
  },
  description:
    'KurlClub is the leading gym management software in India & GCC. Manage members, attendance, payments & trainers for gyms, yoga studios, dance classes & martial arts. Book a demo today!',

  applicationName: 'KurlClub',
  authors: [{ name: 'KurlClub' }],
  creator: 'KurlClub',
  publisher: 'KurlClub',
  metadataBase: new URL('https://kurlclub.com'),
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'KurlClub - Gym Management Software | Fitness Studio Management Platform',
    description:
      'Leading gym management software for India & GCC. Manage members, attendance, payments & trainers. Perfect for gyms, yoga studios, dance classes & martial arts.',
    url: 'https://kurlclub.com',
    siteName: 'KurlClub',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KurlClub - Gym Management Software',
    description:
      'Leading gym management software for India & GCC. Book a demo today!',
  },
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'business',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="theme-color" content="#D3F702" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'KurlClub',
                description:
                  'Gym management software for fitness studios, gyms, yoga studios, dance classes and martial arts centers in India and GCC',
                url: 'https://kurlclub.com',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web, iOS, Android',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'INR',
                  description: 'Free demo available',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'KurlClub',
                url: 'https://kurlclub.com',
                description:
                  'Leading gym management software provider for India and GCC markets',
                areaServed: [
                  'India',
                  'UAE',
                  'Saudi Arabia',
                  'Qatar',
                  'Oman',
                  'Bahrain',
                  'Kuwait',
                ],
                serviceType: 'Gym Management Software',
                knowsAbout: [
                  'gym management',
                  'fitness studio software',
                  'yoga studio management',
                  'dance studio software',
                  'martial arts management',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What is KurlClub gym management software?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'KurlClub is a comprehensive gym management software designed for fitness centers, gyms, yoga studios, dance classes, and martial arts centers in India and GCC. It offers member management, NFC attendance tracking, automated billing, trainer management, and a mobile app for seamless gym operations.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does KurlClub work for yoga studios and dance classes?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! KurlClub is perfect for all types of fitness businesses including yoga studios, dance classes, Zumba centers, martial arts dojos, boxing clubs, and traditional gyms. Our platform is designed to handle the unique needs of different fitness studio types with customizable features.',
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={figtree.variable}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
