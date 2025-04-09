'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const HeroClientWrapper = dynamic(() => import('@/components/HeroClientWrapper'), { ssr: false });

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center pt-6 pb-4">
        <img src="/images/logo.png" alt="Titan Defense Technologies Logo" className="w-48 md:w-64 mb-2" />
        <nav className="flex space-x-6 text-sm md:text-base">
          <Link href="#home" className="hover:text-gray-300">HOME</Link>
          <Link href="#technology" className="hover:text-gray-300">TECHNOLOGY</Link>
          <Link href="#mission" className="hover:text-gray-300">MISSION</Link>
        </nav>
      </header>

      {/* Hero Video */}
      <HeroClientWrapper />

      {/* Footer */}
      <footer className="relative z-10 mt-auto px-4 py-6 text-xs md:text-sm text-gray-400 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 className="text-white font-semibold mb-2">HELPFUL LINKS</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-white">What We Do</Link></li>
              <li><Link href="#" className="hover:text-white">Our Capabilities</Link></li>
              <li><Link href="#" className="hover:text-white">Our Products</Link></li>
              <li><Link href="#" className="hover:text-white">Media Relations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">CONTACT US</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-white">Suppliers</Link></li>
              <li><Link href="#" className="hover:text-white">Employees</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Search Open Positions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-xs">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
