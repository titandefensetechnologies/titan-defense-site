export default function HomePage() {
  return (
    <div className="relative w-full text-white bg-black">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full h-[2in] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/background.png)', // Background image
        }}
      >
        {/* Logo centered underneath the background image, moved up by 1/4 inch, and increased size by 20% */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[50%] mt-[0.25in]">
          <img src="/images/logo.png" alt="Titan Logo" className="h-[300px] w-auto" /> {/* Logo size increased by 20% */}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex justify-between items-center px-.1 py-.5 bg-black text-white">
        <ul className="flex flex-1 justify-evenly text-xl font-bold">
          <li><a href="#about-us" className="hover:text-gray-300">ABOUT US</a></li>
          <li><a href="#defense-solutions" className="hover:text-gray-300">DEFENSE SOLUTIONS</a></li>
          <li><a href="#advanced-systems" className="hover:text-gray-300">ADVANCED SYSTEMS</a></li>
          <li><a href="#contact-us" className="hover:text-gray-300">CONTACT US</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Removed the "Contact Operations" button completely */}
      </div>

      {/* Hero Video Section */}
      <div className="relative w-full h-[75vh] overflow-hidden z-10 pt-[100px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback in case video is not supported */}
          Your browser does not support the video tag or the file format.
        </video>

        {/* Hero Content - Text Removed */}
      </div>

      {/* Footer Section with Background Image */}
      <footer
        className="bg-cover bg-center py-2 text-gray-400"
        style={{
          backgroundImage: 'url(/images/background.png)', // Background image for footer
        }}
      >
        <div className="flex flex-wrap justify-between gap-y-8 text-sm" style={{ rowGap: '6.5in', marginLeft: '1in', marginRight: '1in' }}>
          {/* Helpful Links */}
          <div className="w-full sm:w-[45%] md:w5">
            <h3 className="text-white font-semibold mb-4 text-center">HELPFUL LINKS</h3>
            <ul className="space-y-2 text-center">
              <li>What We Do</li>
              <li>Our Capabilities</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>Media Relations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-[45%] md:w5">
            <h3 className="text-white font-semibold mb-4 text-center">CONTACT US</h3>
            <ul className="space-y-2 text-center">
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
      </footer>
    </div>
  );
}
