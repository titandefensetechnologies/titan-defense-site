import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.titandefensetechnologies.com'),

  title: 'Titan Defense Technologies | Real-Time Mining Safety & Underground Intelligence Systems',
  description:
    'Titan Defense Technologies delivers advanced mining safety technology powered by real-time worker monitoring, underground intelligence networks, and blackout-proof connectivity. VIGIL-MD protects miners even in zero-signal environments, collapses, and power failures.',

  keywords: [
    'mining safety',
    'underground mining safety',
    'worker safety monitoring',
    'real-time safety intelligence',
    'underground communication systems',
    'safety technology',
    'AI safety systems',
    'VIGIL-MD',
    'Titan Defense Technologies',
    'zero-signal mining connectivity',
    'industrial safety solutions',
    'vital signs monitoring',
    'emergency alert systems',
    'mining incident prevention',
    'Canadian mining innovation'
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'Titan Defense Technologies | Real-Time Mining Safety Intelligence',
    description:
      'VIGIL-MD provides blackout-proof underground safety intelligence, real-time physiological monitoring, and instant emergency alerts for miners. Engineered for the world’s most dangerous environments.',
    url: 'https://www.titandefensetechnologies.com',
    siteName: 'Titan Defense Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Titan Defense Technologies – Real-Time Mining Safety Intelligence',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Titan Defense Technologies | Mining Safety Technology & Underground Intelligence',
    description:
      'Mining safety networks delivering real-time monitoring and blackout-proof emergency communication. VIGIL-MD keeps miners connected—even when everything else fails.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}