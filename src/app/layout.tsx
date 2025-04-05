// src/app/layout.tsx
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Titan Defense Technologies',
  description: 'Canadian defense innovation for the future battlefield.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="flex flex-col items-center py-6">
          <Image
            src="/images/logo.png"
            alt="Titan Defense Logo"
            width={300}
            height={300}
            priority
          />
          <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold uppercase">
            <Link href="/">HOME</Link>
            <Link href="/technology">TECHNOLOGY</Link>
            <Link href="/mission">MISSION</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          className="w-full bg-cover bg-center py-6 text-gray-400 relative"
          style={{ backgroundImage: "url(/images/background.png)" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
          <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between gap-10 text-sm">
              <div className="flex-1 min-w-[150px] text-center sm:text-left">
                <h3 className="text-white font-semibold mb-3">HELPFUL LINKS</h3>
                <ul className="space-y-1">
                  <li>What We Do</li>
                  <li>Our Capabilities</li>
                  <li>Our Products</li>
                  <li>Media Relations</li>
                </ul>
              </div>
              <div className="flex-1 min-w-[150px] text-center sm:text-left">
                <h3 className="text-white font-semibold mb-3">CONTACT US</h3>
                <ul className="space-y-1">
                  <li>Suppliers</li>
                  <li>Employees</li>
                  <li>FAQs</li>
                  <li>Careers</li>
                  <li>Search Open Positions</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
              © 2025 Titan Defense Technologies. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
