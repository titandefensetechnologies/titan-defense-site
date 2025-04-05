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

      <footer
  className="relative bg-cover bg-center text-gray-400"
  style={{ backgroundImage: 'url(/images/background.png)' }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  <div className="relative z-10 py-6 px-4 sm:px-6 md:px-16">
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start gap-y-6 text-sm">
      {/* Helpful Links */}
      <div className="w-full sm:w-1/2 px-2 text-center sm:text-left">
        <h3 className="text-white font-semibold mb-4">HELPFUL LINKS</h3>
        <ul className="space-y-2">
          <li>What We Do</li>
          <li>Our Capabilities</li>
          <li>Our Products</li>
          <li>Contact Us</li>
          <li>Media Relations</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="w-full sm:w-1/2 px-2 text-center sm:text-left">
        <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
        <ul className="space-y-2">
          <li>Suppliers</li>
          <li>Employees</li>
          <li>FAQs</li>
          <li>Careers</li>
          <li>Search Open Positions</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
      © 2025 Titan Defense Technologies. All rights reserved.
    </div>
  </div>
</footer>
    </main>
  );
}
