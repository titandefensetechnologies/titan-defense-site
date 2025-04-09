'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* Hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header className="relative z-10 flex flex-col items-center pt-8">
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

      {/* Footer */}
      <footer className="relative z-10 mt-auto w-full text-sm text-gray-300 px-6 py-10 bg-black bg-opacity-70 backdrop-blur">
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
    </main>
  )
}
