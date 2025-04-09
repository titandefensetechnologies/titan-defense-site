'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header className="pt-8 flex flex-col items-center z-10">
        <Image
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          width={160}
          height={160}
          className="mb-2"
        />
        <nav className="flex space-x-8 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-300">HOME</Link>
          <Link href="/technology" className="hover:text-gray-300">TECHNOLOGY</Link>
          <Link href="/mission" className="hover:text-gray-300">MISSION</Link>
        </nav>
      </header>

      {/* Spacer to keep hero centered */}
      <div className="flex-grow" />

      {/* Footer */}
      <footer className="w-full px-6 py-10 bg-black bg-opacity-80 backdrop-blur text-sm text-gray-300 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <ul className="mb-6 md:mb-0 text-center md:text-left">
            <li className="font-semibold text-white mb-2">HELPFUL LINKS</li>
            <li className="hover:text-white cursor-pointer">What We Do</li>
            <li className="hover:text-white cursor-pointer">Our Capabilities</li>
            <li className="hover:text-white cursor-pointer">Our Products</li>
            <li className="hover:text-white cursor-pointer">Media Relations</li>
          </ul>
          <ul className="text-center md:text-right">
            <li className="font-semibold text-white mb-2">CONTACT US</li>
            <li className="hover:text-white cursor-pointer">Suppliers</li>
            <li className="hover:text-white cursor-pointer">Employees</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Search Open Positions</li>
          </ul>
        </div>
        <div className="text-center text-xs mt-6 border-t border-gray-700 pt-4">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
