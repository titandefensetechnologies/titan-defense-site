'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-white bg-black">
      
      {/* Header */}
      <header className="w-full flex flex-col items-center py-6">
        <Image
          src="/images/logo.png"
          alt="Titan Defense Logo"
          width={220}
          height={220}
          priority
        />
        <nav className="mt-4 flex flex-wrap justify-center gap-6 text-sm font-bold">
          <a href="#about">ABOUT US</a>
          <a href="#solutions">DEFENSE SOLUTIONS</a>
          <a href="#systems">ADVANCED SYSTEMS</a>
          <a href="#contact">CONTACT US</a>
        </nav>
      </header>

      {/* Hero Video */}
      <div className="w-full relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-h-[500px] object-cover"
        >
          <source src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'} type="video/mp4" />
        </video>
      </div>

      {/* Footer */}
      <footer className="w-full bg-cover bg-center py-6 text-gray-400 relative" style={{ backgroundImage: "url(/images/background.png)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 px-6 sm:px-12">
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-start gap-8 text-sm">
            <div className="sm:w-1/2 w-full">
              <h3 className="text-white font-semibold mb-4 text-center sm:text-left">HELPFUL LINKS</h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>What We Do</li>
                <li>Our Capabilities</li>
                <li>Our Products</li>
                <li>Contact Us</li>
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
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
            © 2025 Titan Defense Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
