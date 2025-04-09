// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* HEADER */}
      <header className="flex flex-col items-center justify-start z-10 relative bg-black py-2 md:py-0">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-72 md:w-[25rem] mb-4"
        />
        <nav className="md:-mt-2">
          {/* Desktop nav links */}
          <ul className="hidden md:flex flex-wrap justify-center gap-16 text-white text-lg md:text-xl">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#technology" className="hover:text-gray-300 transition">Technology</a></li>
            <li><a href="#mission" className="hover:text-gray-300 transition">Mission</a></li>
            <li><a href="#media" className="hover:text-gray-300 transition">Media</a></li>
          </ul>
          {/* Hamburger icon for mobile */}
          <div className="md:hidden mt-2">
            <button className="text-white text-3xl">☰</button>
          </div>
        </nav>
      </header>

      {/* HERO VIDEO */}
      <section className="relative w-full flex-1">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[calc(100vh-80px)] object-cover absolute top-0 left-0 z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold mb-2">HELPFUL LINKS</h3>
            <ul className="space-y-1">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2">CONTACT US</h3>
            <ul className="space-y-1">
              <li>Suppliers</li>
              <li>Employees</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Search Open Positions</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">© 2025 Titan Defense Technologies. All rights reserved.</p>
      </footer>
    </main>
  );
}
