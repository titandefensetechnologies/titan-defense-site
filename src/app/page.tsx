'use client';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">

      {/* HEADER */}
      <header className="py-4 md:py-2 flex flex-col items-center justify-start z-10 relative bg-black">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-72 md:w-[25rem] mt-4 mb-6 md:-mb-10"
        />

        {/* Navigation */}
        <nav className="mb-6 md:mb-4">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14 text-white text-lg md:text-xl font-normal">
            <li><a href="#home" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-gray-400 transition">Technology</a></li>
            <li><a href="#mission" className="hover:text-gray-400 transition">Mission</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* FOOTER */}
      <footer className="relative z-10 mt-auto px-4 py-8 bg-black bg-opacity-80 text-sm">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-8">
          
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">HELPFUL LINKS</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400 transition">What We Do</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Our Capabilities</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Our Products</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Media Relations</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">CONTACT US</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-gray-400 transition">Suppliers</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Employees</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400 transition">Search Open Positions</a></li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="text-center mt-8 text-xs text-gray-400">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
