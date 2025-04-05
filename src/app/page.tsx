'use client'

export default function HomePage() {
  return (
    <div className="relative w-full h-screen text-white bg-black overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src="/images/logo.png"
          alt="Titan Logo"
          className="h-[220px] w-auto mb-8"
        />
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
          <li><a href="#about-us" className="hover:text-gray-300">ABOUT US</a></li>
          <li><a href="#defense-solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a></li>
          <li><a href="#advanced-systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a></li>
          <li><a href="#contact-us" className="hover:text-gray-300">CONTACT US</a></li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center text-xs text-gray-500 z-10 py-2 bg-black/60">
        © 2025 Titan Defense Technologies. All rights reserved.
      </footer>
    </div>
  )
}
