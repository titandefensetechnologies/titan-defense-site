'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroClientWrapper = dynamic(() => import('@/components/HeroClientWrapper'), { ssr: false });

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">

      {/* HEADER */}
      <header className="py-0 flex flex-col items-center justify-start z-10 relative bg-black">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-96 md:w-[25rem] -mb-10 mt-4 md:mt-0"
        />

        <nav className="-mt-2 md:-mt-1">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14 text-white text-lg md:text-xl font-normal mt-4 md:mt-0">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-gray-300 transition">Technology</a></li>
            <li><a href="#mission" className="hover:text-gray-300 transition">Mission</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO VIDEO */}
      <HeroClientWrapper />

      {/* FOOTER */}
      <footer className="relative z-10 mt-auto bg-black bg-opacity-90 text-white py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-16 text-sm md:text-base text-center md:text-left">
          {/* Helpful Links */}
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold mb-3">HELPFUL LINKS</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-300 transition">What We Do</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Our Capabilities</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Our Products</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Media Relations</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/2">
            <h4 className="font-semibold mb-3">CONTACT US</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-300 transition">Suppliers</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Employees</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Search Open Positions</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
