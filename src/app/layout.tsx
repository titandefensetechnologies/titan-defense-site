import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Titan Defense Technologies | Canada',
  description: 'Titan Defense Technologies – Advanced Canadian military systems, sensors, AI, and integrated capabilities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* Header */}
        <header className="w-full flex flex-col items-center pt-6">
          <Image
            src="/images/logo.png"
            alt="Titan Defense Logo"
            width={320}
            height={320}
            priority
          />
          <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm sm:text-base font-bold uppercase text-white">
            <Link href="/">HOME</Link>
            <Link href="/technology">TECHNOLOGY</Link>
            <Link href="/mission">MISSION</Link>
          </nav>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer
          className="w-full bg-cover bg-center py-6 text-gray-400 relative"
          style={{ backgroundImage: "url(/images/background.png)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
          <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between text-sm">
              {/* Helpful Links */}
              <div className="flex-1 min-w-[150px] text-center sm:text-left mb-6 sm:mb-0">
                <h3 className="text-white font-semibold mb-3">HELPFUL LINKS</h3>
                <ul className="space-y-1">
                  <li>What We Do</li>
                  <li>Our Capabilities</li>
                  <li>Our Products</li>
                  <li>Contact Us</li>
                  <li>Media Relations</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex-1 min-w-[150px] text-center sm:text-left">
                <h3 className="text-white font-semibold mb-3">CONTACT US</h3>
                <ul className="space-y-1">
                  <li>Suppliers</li>
                  <li
