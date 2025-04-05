import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
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
      <body className="bg-black text-white flex flex-col min-h-screen">
        {/* Header: Logo + Nav */}
        <header className="flex flex-col items-center py-6">
          <Image
            src="/images/logo.png"
            alt="Titan Logo"
            width={240}
            height={240}
            priority
          />
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm sm:text-base font-bold uppercase">
            <Link href="/">HOME</Link>
            <Link href="/technology">TECHNOLOGY</Link>
            <Link href="/mission">MISSION</Link>
          </nav>
        </header>

        {/* Main Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer
          className="bg-cover bg-center py-6 text-gray-400 relative"
          style={{ backgroundImage: "url(/images/background.png)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
          <div className="relative z-10 px-6 sm:px-12">
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-start gap-8 text-sm">
              <div className="sm:w-1/2 w-full">
                <h3 className="text-white font-semibold mb-4 text-center sm:text-left">HELPFUL LINKS</h3>
                <ul className="space-y-2 text-center sm:text-left">
                  <li>What We Do</li>
                  <li>Our Capabilities</li>
                  <li>Our Products</li>
                  <li>Media Relations</li>
                </ul>
              </div>
              <div className="sm:w-1/2 w-full">
                <h3 className="text-white font-semibold mb-4 text-center sm:text-left">CONTACT US</h3>
                <ul className="space-y-2 text-center sm:text-left">
                  <li>Suppliers</li>
                  <li>Employees</li>
                  <li>FAQs</li>
                  <li>Careers</li>
                  <li>Search Open Positions</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
              © 2025 Titan Defense Technologies. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
