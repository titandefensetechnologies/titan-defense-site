'use client';

import React from 'react';

export default function DesktopLandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">

      {/* Header */}
      <header className="py-2 flex flex-col items-center justify-start z-10 relative bg-black">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-96 md:w-[26rem] -mb-10"
        />
        <nav className="-mt-2">
          <ul className="flex justify-center gap-20 text-white text-xl font-medium">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-gray-300 transition">Technology</a></li>
            <li><a href="#mission" className="hover:text-gray-300 transition">Mission</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Video */}
      <div className="relative z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-10 px-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-20 text-sm">
          {/* Helpful Links */}
          <div className="text-center">
            <h2 className="font-bold mb-2">HELPFUL LINKS</h2>
            <ul className="space-y-1">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h2 className="font-bold mb-2">CONTACT US</h2>
            <ul className="space-y-1">
              <li>Suppliers</li>
              <li>Employees</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Search Open Positions</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
