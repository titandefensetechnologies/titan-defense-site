export default function HomePage() {
  return (
    <div className="relative w-full text-white bg-black">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full h-[2in] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/background.png)',
        }}
      >
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/logo.png"
            alt="Titan Logo"
            className="h-[200px] w-auto sm:h-[300px]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex justify-center flex-wrap gap-3 px-4 py-4 bg-black text-white">
        <ul className="flex flex-wrap justify-center gap-6 text-base sm:text-xl font-bold">
          <li><a href="#about-us" className="hover:text-gray-300">ABOUT US</a></li>
          <li><a href="#defense-solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a></li>
          <li><a href="#advanced-systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a></li>
          <li><a href="#contact-us" className="hover:text-gray-300">CONTACT US</a></li>
        </ul>
      </div>

      {/* Hero Video Section */}
      <div className="relative w-full h-[60vh] overflow-hidden z-10">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/Hero-Mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Footer Section */}
      <footer className="bg-cover bg-center py-6 text-gray-400" style={{ backgroundImage: 'url(/images/background.png)' }}>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-start gap-10 px-4 sm:px-12 text-sm text-center sm:text-left">
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
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 px-6">
          © 2025 Titan Defense Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
