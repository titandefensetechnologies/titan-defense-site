// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Titan Defense Technologies",
  description: "Canadian defense innovation at its finest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {/* Header */}
        <header className="w-full py-4 flex flex-col items-center justify-center bg-black z-50">
          <Image
            src="/images/logo.png"
            alt="Titan Defense Logo"
            width={240}
            height={80}
            className="mb-2 object-contain"
          />
          <nav className="flex space-x-6 text-white text-lg font-bold uppercase tracking-wide md:text-base">
            <Link href="/">Home</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/mission">Mission</Link>
          </nav>
        </header>

        {/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Desktop video (md and up) */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>

  {/* Mobile video (below md) */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="block md:hidden absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/hero-mobile.mp4" type="video/mp4" />
  </video>
</section>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="relative mt-12 text-sm text-white bg-black z-50">
          <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
              <ul className="space-y-2">
                <li><Link href="#">What We Do</Link></li>
                <li><Link href="#">Our Capabilities</Link></li>
                <li><Link href="#">Our Products</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Media Relations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><Link href="#">Suppliers</Link></li>
                <li><Link href="#">Employees</Link></li>
                <li><Link href="#">FAQs</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Search Open Positions</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center py-4 border-t border-white/20 text-xs">
            © 2025 Titan Defense Technologies. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
