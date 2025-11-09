'use client';

export default function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/mine-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Mission-Ready Innovation
        </h1>
        <p className="text-lg md:text-2xl max-w-[800px] opacity-90 leading-relaxed">
          Empowering industrial and defense sectors with advanced, ruggedized technologies built for the world’s toughest environments.
        </p>
      </div>
    </section>
  );
}
