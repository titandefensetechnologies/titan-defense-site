'use client'

import { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative w-full text-white bg-black">
      {/* Hero Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/images/background.png"
        >
        <source src="/videos/hero-fixed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Logo */}
        <header className="flex flex-col items-center pt-6 px-4 sm:px-10">
          <img
            src="/images/logo.png"
            alt="Titan Logo"
            className="h-[200px] sm:h-[250px] w-auto mb-4"
          />

          {/* Navigation */}
          <nav className="w-full max-w-5xl mx-auto">
            <div className="flex justify-between items-center text-xl font-bold">
              <button
                className="sm:hidden px-2 py-1 border border-white rounded"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
              <ul className="hidden sm:flex flex-1 justify-evenly">
                <li><a href="#about-us" className="hover:text-gray-300">ABOUT US</a></li>
                <li><a href="#defense-solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a></li>
                <li><a href="#advanced-systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a></li>
                <li><a href="#contact-us" className="hover:text-gray-300">CONTACT US</a></li>
              </ul>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul className="sm:hidden mt-4 space-y-3 text-center">
                <li><a href="#about-us" onClick={() => setIsMenuOpen(false)}>ABOUT US</a></li>
                <li><a href="#defense-solutions" onClick={() => setIsMenuOpen(false)}>DEFENSE SOLUTIONS</a></li>
                <li><a href="#advanced-systems" onClick={() => setIsMenuOpen(false)}>ADVANCED SYSTEMS</a></li>
                <li><a href="#contact-us" onClick={() => setIsMenuOpen(false)}>CONTACT US</a></li>
              </ul>
            )}
          </nav>
        </header>

        {/* Spacer to make content visible below logo */}
        <div className="flex-1" />

        {/* Footer */}
        <footer className="bg-black bg-opacity-70 mt-10 pt-10 pb-6 px-6 text-gray-400">
          <div className="flex flex-wrap justify-between gap-y-8 text-sm">
            {/* Helpful Links */}
            <div className="w-full sm:w-[45%]">
              <h3 className="text-white font-semibold mb-4 text-center">HELPFUL LINKS</h3>
              <ul className="space-y-2 text-center">
                <li>What We Do</li>
                <li>Our Capabilities</li>
                <li>Our Products</li>
                <li>Contact Us</li>
                <li>Media Relations</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full sm:w-[45%]">
              <h3 className="text-white font-semibold mb-4 text-center">CONTACT US</h3>
              <ul className="space-y-2 text-center">
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
      </div>
    </div>
  )
}
