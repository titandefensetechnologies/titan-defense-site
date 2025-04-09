'use client';

export default function Home() {
  return (
    <main className="relative w-full bg-black text-white">
      {/* Logo at the Top */}
      <div className="flex justify-center items-center py-6">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-48 md:w-64"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-6 mb-8 text-lg font-semibold">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/technology" className="hover:text-gray-300">Technology</a>
        <a href="/mission" className="hover:text-gray-300">Mission</a>
      </nav>

      {/* Hero Video */}
      <div className="relative w-full max-w-6xl mx-auto px-4 mb-12">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
