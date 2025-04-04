import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Titan Defense Technologies | Canadian Military Innovation',
  description: 'Commanding the battlespace through next-gen warfighter systems, LoRa communications, and tactical medical innovations. Proudly built in Canada.',
  keywords: [
    'Titan Defense Technologies',
    'Canadian Defense Contractor',
    'Military Innovation',
    'Tactical Systems',
    'C4ISR',
    'Battlefield Comms',
    'LoRa Medical Sensors',
    'Non-Terrestrial Networks',
    'Combat Wearables',
    'Defense AI',
  ],
  metadataBase: new URL('https://www.titandefensetechnologies.com'),
  openGraph: {
    title: 'Titan Defense Technologies',
    description: 'Next-gen Canadian defense systems for the modern battlespace. Tactical innovation. Mission-critical reliability.',
    url: 'https://www.titandefensetechnologies.com',
    siteName: 'Titan Defense Technologies',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Titan Defense Technologies Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Defense Technologies',
    description: 'Commanding the battlespace through innovation. Explore Canadian defense tech that leads the future.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.titandefensetechnologies.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
