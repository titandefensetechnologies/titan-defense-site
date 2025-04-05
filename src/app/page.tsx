'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source
    src="/videos/hero.mp4"
    type="video/mp4"
    media="(min-width: 768px)"
  />
  <source
    src="/videos/hero-mobile.mp4"
    type="video/mp4"
    media="(max-width: 767px)"
  />
  Your browser does not support the video tag.
</video>

      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-white text-center px-4 py-6">
        {/* Logo */}
        <div className="mt-6 sm:mt-12">
          <Image
            src="/images/logo.png"
            alt="Titan Defense Logo"
            width={isMobile ? 180 : 260}
            height={isMobile ? 180 : 260}
            className="mx-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold uppercase">
          <Link href="#about">About Us</Link>
          <Link href="#solutions">Defense Solutions</Link>
          <Link href="#systems">Advanced Systems</Link>
          <Link href="#contact">Contact Us</Link>
        </nav>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-black bg-opacity-80 text-gray-400 text-xs sm:text-sm px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-4">
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-white font-semibold mb-2">HELPFUL LINKS</h3>
            <ul className="space-y-1">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-white font-semibold mb-2">CONTACT US</h3>
            <ul className="space-y-1">
              <li>Suppliers</li>
              <li>Employees</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Search Open Positions</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 border-t border-gray-700 pt-4">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
