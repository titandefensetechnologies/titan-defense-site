// Full Updated Homepage Hero Section with Resized Video

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative w-full h-[75vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {/* Header */}
          <header className="flex justify-between items-center px-6 pt-6">
            <img
              src="/images/logo.png"
              alt="Titan Defense Logo"
              className="h-16 w-auto"
            />
            <nav className="space-x-6 text-white font-semibold">
              <a href="#about">ABOUT US</a>
              <a href="#solutions">DEFENSE SOLUTIONS</a>
              <a href="#systems">ADVANCED SYSTEMS</a>
              <a href="#contact">CONTACT US</a>
            </nav>
          </header>

          {/* Optional Centered Call to Action */}
          <div className="text-white text-center pb-20 z-10">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              DEFENDING THE FUTURE
            </h1>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-cover bg-center text-gray-400" style={{ backgroundImage: 'url(/images/background.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 py-6 px-4 sm:px-6 md:px-16">
          <div className="flex flex-wrap justify-center gap-y-6 text-sm text-center md:text-left md:justify-between">
            <div className="w-full md:w-1/2 px-2">
              <h3 className="text-white font-semibold mb-4">HELPFUL LINKS</h3>
              <ul className="space-y-2">
                <li>What We Do</li>
                <li>Our Capabilities</li>
                <li>Our Products</li>
                <li>Contact Us</li>
                <li>Media Relations</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-2">
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
  );
}