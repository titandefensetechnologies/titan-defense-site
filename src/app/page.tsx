'use client';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* HEADER */}
      <header className="py-0 flex flex-col items-center justify-start z-10 relative bg-black">
  <img
    src="/images/logo.png"
    alt="Titan Defense Technologies Logo"
    className="w-96 md:w-[28rem] -mt-4 -mb-10"
  />
  <nav className="-mt-2">
  <ul className="flex flex-wrap justify-center gap-32 text-white text-xl md:text-2xl font-normal pb-4">
    <li>
      <a href="#HOME" className="relative hover:text-gray-300 transition-colors duration-300">
        HOME
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a href="#TECHNOLOGY" className="relative hover:text-gray-300 transition-colors duration-300">
        TECHNOLOGY
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a href="#MISSION" className="relative hover:text-gray-300 transition-colors duration-300">
        OUR MISSION
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </a>
    </li>
    <li>
      <a href="#CONTACT" className="relative hover:text-gray-300 transition-colors duration-300">
        CONTACT
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
      </a>
    </li>
  </ul>
</nav>
</header>

      {/* HERO VIDEO */}
      <div className="relative w-full h-[calc(100vh-160px)] z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-3 mt-7">
  <div className="flex flex-wrap justify-center gap-24 px-4">
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-3">HELPFUL LINKS</h3>
      <ul>
        <li><a href="#what-we-do" className="hover:text-gray-300 transition">What We Do</a></li>
        <li><a href="#capabilities" className="hover:text-gray-300 transition">Our Capabilities</a></li>
        <li><a href="#products" className="hover:text-gray-300 transition">Our Products</a></li>
        <li><a href="#contact" className="hover:text-gray-300 transition">Contact Us</a></li>
        <li><a href="#media-relations" className="hover:text-gray-300 transition">Media Relations</a></li>
      </ul>
    </div>

    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-3">CONTACT US</h3>
      <ul>
        <li><a href="#suppliers" className="hover:text-gray-300 transition">Suppliers</a></li>
        <li><a href="#employees" className="hover:text-gray-300 transition">Employees</a></li>
        <li><a href="#faqs" className="hover:text-gray-300 transition">FAQs</a></li>
        <li><a href="#careers" className="hover:text-gray-300 transition">Careers</a></li>
        <li><a href="#open-positions" className="hover:text-gray-300 transition">Search Open Positions</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-6 text-center">
    <p className="text-sm">&copy; 2025 Titan Defense Technologies. All rights reserved.</p>
  </div>
</footer>
    </main>
  );
}
