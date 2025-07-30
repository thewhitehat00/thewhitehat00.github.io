// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The White Hat',
  description: 'A cybersecurity community for ethical hackers.',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
  openGraph: {
    title: 'The White Hat',
    description: 'Join the ethical hacking community.',
    url: 'https://thewhitehat00.github.io',
    siteName: 'The White Hat',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'The White Hat preview',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The White Hat',
    description: 'Join the ethical hacking community.',
    images: ['/preview.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

