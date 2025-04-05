'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video for Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional fallback for mobile */}
      <div className="absolute inset-0 bg-black md:hidden z-0" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Image
          src="/images/titan-logo.png"
          alt="Titan Defense Logo"
          width={300}
          height={300}
          className="mb-6"
        />
        <nav className="flex flex-wrap justify-center gap-6 text-lg font-bold">
          <a href="#about">ABOUT US</a>
          <a href="#solutions">DEFENSE SOLUTIONS</a>
          <a href="#advanced">ADVANCED SYSTEMS</a>
          <a href="#contact">CONTACT US</a>
        </nav>
      </div>

      {/* Footer */}
      <footer className="relative bg-black bg-opacity-80 text-gray-400 z-10">
        <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4">HELPFUL LINKS</h3>
            <ul className="space-y-2">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>
          <div>
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
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 py-4">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
