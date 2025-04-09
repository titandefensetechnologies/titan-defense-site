
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titan Defense Technologies | Canadian Military Innovation',
  description: 'Commanding the battlespace through next-gen warfighter systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
