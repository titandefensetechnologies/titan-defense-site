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
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] mt-[0.25in]">
        <img src="/images/logo.png" alt="Titan Logo" className="h-[300px] w-auto" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex justify-between items-center px-4 py-2 bg-black text-white">
        <ul className="flex flex-1 justify-evenly text-xl font-bold">
          <li><a href="#about-us" className="hover:text-gray-300">ABOUT US</a></li>
          <li><a href="#defense-solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a></li>
          <li><a href="#advanced-systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a></li>
          <li><a href="#contact-us" className="hover:text-gray-300">CONTACT US</a></li>
        </ul>
      </div>

      {/* Hero Video Section */}
      <div className="relative w-full h-[75vh] overflow-hidden z-10 pt-[100px]">
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
      </div>

      {/* Footer Section */}
      <footer className="bg-cover bg-center py-6 text-gray-400" style={{ backgroundImage: 'url(/images/background.png)' }}>
        <div className="flex flex-wrap justify-center gap-12 md:gap-32 px-4 md:px-16 text-sm">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">HELPFUL LINKS</h3>
            <ul className="space-y-2">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-left">
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
