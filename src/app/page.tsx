'use client';
// Force redeploy: only hero-mobile.mp4

export default function HomePage() {
  return (
    <section className="relative z-10 w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
