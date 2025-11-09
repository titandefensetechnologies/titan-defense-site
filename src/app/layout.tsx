import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Titan Defense Technologies | AI Safety & Connectivity Systems for Mining and Industry',
  description:
    'Titan Defense Technologies develops VIGIL-MD - an AI-enabled safety and communication system built for zero-signal mining environments. Designed in Canada to protect underground workers with instant detection, smart garments, and secure relay networking.',
  icons: { icon: '/favicon.ico' },

  openGraph: {
    title: 'Titan Defense Technologies | Built to Protect. Designed to Lead.',
    description:
      'Pioneering AI-powered safety and communication systems for the global critical-minerals industry. VIGIL-MD delivers real-time visibility, instant alerts, and continuous connectivity in the world’s toughest underground environments.',
    url: 'https://titandefensetechnologies.com',
    siteName: 'Titan Defense Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Titan Defense Technologies – AI Safety Systems for Mining',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Titan Defense Technologies | AI Safety Systems for Mining & Industry',
    description:
      'VIGIL-MD: AI-powered safety garments and secure communication relays keeping miners connected and alive where others fail.',
    images: ['/og-image.jpg'],
  },

  themeColor: '#000000',

  keywords: [
    'Titan Defense Technologies',
    'VIGIL-MD',
    'AI safety systems',
    'mine safety technology',
    'underground communications',
    'critical minerals',
    'industrial defense',
    'smart garments',
    'worker monitoring',
    'Canadian innovation',
    'real-time safety alerts',
    'AI wearables',
    'secure relay network',
    'mining IoT',
    'ESG mining solutions',
    'connected workforce',
  ],

  metadataBase: new URL('https://titan-defense.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
