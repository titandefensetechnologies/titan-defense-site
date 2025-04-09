'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* HEADER */}
      <header className="relative z-10 flex flex-col items-center py-6">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-48 md:w-64 mb-4"
        />
        <nav className="flex space-x-6 text-white text-lg">
          <a href="#">Home</a>
          <a href="#">Technology</a>
          <a href="#">Mission</a>
        </nav>
      </header>

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[80vh] object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* FOOTER */}
      <footer className="relative z-10 bg-black text-white text-center py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELPFUL LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#">What We Do</a></li>
              <li><a href="#">Our Capabilities</a></li>
              <li><a href="#">Our Products</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Media Relations</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li><a href="#">Suppliers</a></li>
              <li><a href="#">Employees</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Search Open Positions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4 text-sm">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
