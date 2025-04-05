"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src={isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero-desktop.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <img
          src="/images/titan-logo.png"
          alt="Titan Defense Logo"
          className="h-28 w-auto mb-6"
        />
        <nav className="flex flex-wrap justify-center gap-6 text-sm sm:text-lg font-bold">
          <Link href="#about">ABOUT US</Link>
          <Link href="#solutions">DEFENSE SOLUTIONS</Link>
          <Link href="#systems">ADVANCED SYSTEMS</Link>
          <Link href="#contact">CONTACT US</Link>
        </nav>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-gray-400 bg-black bg-opacity-80 z-30 py-6">
        <div className="flex flex-wrap justify-center md:justify-between gap-y-6 px-4 md:px-16 text-sm">
          {/* Helpful Links */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-white font-semibold mb-4 text-center md:text-left">HELPFUL LINKS</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-white font-semibold mb-4 text-center md:text-left">CONTACT US</h3>
            <ul className="space-y-2 text-center md:text-left">
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
      </footer>
    </main>
  );
}