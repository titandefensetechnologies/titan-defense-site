import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Titan Defense Technologies | Canadian Military Innovation',
  description: 'Commanding the battlespace through next-gen warfighter systems.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Titan Defense Technologies',
    description: 'Commanding the battlespace through next-gen warfighter systems.',
    url: 'https://titan-defense.com',
    siteName: 'Titan Defense Technologies',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Titan Defense Technologies' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Defense Technologies',
    description: 'Commanding the battlespace through next-gen warfighter systems.',
    images: ['/og-image.jpg'],
  },
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        {/* ✅ Enables proper mobile scaling; does not affect desktop */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
