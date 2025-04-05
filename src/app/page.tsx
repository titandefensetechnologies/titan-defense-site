'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* 🎥 Responsive Hero Video */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" media="(min-width: 768px)" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 🛡 Overlay Logo + Nav */}
      <div className="absolute top-0 left-0 w-full px-4 md:px-16 pt-4 flex flex-col items-center z-10">
        <Image
          src="/images/logo.png"
          alt="Titan Defense Logo"
          width={250}
          height={250}
          className="mb-4 w-auto h-[140px] md:h-[200px]"
        />
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 font-bold text-sm md:text-base">
          <a href="#about" className="hover:text-gray-300">ABOUT US</a>
          <a href="#solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a>
          <a href="#systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a>
          <a href="#contact" className="hover:text-gray-300">CONTACT US</a>
        </nav>
      </div>

      {/* 🔻 Footer */}
      <footer
        className="relative bg-cover bg-center text-gray-400 mt-auto"
        style={{ backgroundImage: 'url(/images/background.png)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 py-6 px-4 sm:px-6 md:px-16">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start gap-10 text-sm text-center sm:text-left">
            {/* Helpful Links */}
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

            {/* Contact Info */}
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

          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
            © 2025 Titan Defense Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
