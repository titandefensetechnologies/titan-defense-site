import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Titan Defense Technologies | Mining Safety Intelligence Networks',
  description:
    'Titan Defense Technologies develops intelligent mining safety systems that monitor vital signs and environmental data in real time. Our VIGIL-MD network delivers instant alerts and continuous connectivity in zero-signal underground environments - keeping crews protected and connected.',
  icons: { icon: '/favicon.ico' },

  openGraph: {
    title: 'Titan Defense Technologies | Intelligent Mining Safety Systems',
    description:
      'Building the future of mining safety through intelligent networks that monitor vital signs and trigger real-time alerts when risk thresholds are reached. Designed and built in Canada.',
    url: 'https://www.titandefensetechnologies.com',
    siteName: 'Titan Defense Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Titan Defense Technologies – Mining Safety Intelligence Networks',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Titan Defense Technologies | Mining Safety Intelligence Networks',
    description:
      'Real-time monitoring, vital tracking, and instant alerting for underground workers. The next evolution in mining safety intelligence.',
    images: ['/og-image.jpg'],
  },

  themeColor: '#000000',

  keywords: [
    'Titan Defense Technologies',
    'VIGIL-MD',
    'mining safety',
    'safety intelligence networks',
    'real-time monitoring',
    'vital signs tracking',
    'underground communication',
    'industrial safety',
    'zero-signal connectivity',
    'Canadian innovation',
    'automated safety alerts',
    'mine worker protection',
    'sensor network',
    'environmental monitoring',
  ],

  metadataBase: new URL('https://www.titandefensetechnologies.com'),
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
