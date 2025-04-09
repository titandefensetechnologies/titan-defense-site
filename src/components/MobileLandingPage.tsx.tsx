'use client';

export default function MobileLandingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="flex flex-col items-center py-6">
        <img src="/images/logo.png" alt="Titan Logo" className="w-60 mb-6" />
        <nav className="space-y-4 text-center text-xl">
          <a href="#home">Home</a>
          <a href="#technology">Technology</a>
          <a href="#mission">Mission</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* FOOTER */}
      <footer className="text-center mt-8 px-4 text-sm">
        <div className="mb-4">
          <h3 className="font-bold">HELPFUL LINKS</h3>
          <p>What We Do</p>
          <p>Our Capabilities</p>
          <p>Our Products</p>
          <p>Contact Us</p>
          <p>Media Relations</p>
        </div>
        <div>
          <h3 className="font-bold">CONTACT US</h3>
          <p>Suppliers</p>
          <p>Employees</p>
          <p>FAQs</p>
          <p>Careers</p>
          <p>Search Open Positions</p>
        </div>
        <div className="mt-6 text-xs text-gray-400">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
