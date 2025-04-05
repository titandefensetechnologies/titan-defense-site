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
          width={isMobile ? 220 : 300}
          height={isMobile ? 220 : 300}
          priority
        />
       <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base font-bold uppercase">
  <a href="/">HOME</a>
  <a href="/technology">TECHNOLOGY</a>
  <a href="/mission">MISSION</a>
</nav>
      </header>

      {/* Hero Video */}
      <div className="w-full relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full object-cover ${isMobile ? 'max-h-[500px]' : 'max-h-[650px]'}`}
        >
          <source src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'} type="video/mp4" />
        </video>
      </div>

      {/* Footer */}
      <footer className="w-full bg-cover bg-center py-6 text-gray-400 relative" style={{ backgroundImage: "url(/images/background.png)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between gap-10 text-sm">
            {/* Helpful Links */}
            <div className="flex-1 min-w-[150px] text-center sm:text-left">
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
