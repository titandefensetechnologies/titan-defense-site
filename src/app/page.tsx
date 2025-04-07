// src/app/page.tsx
// Trigger deploy: restoring hero.mp4 from 22756bc

export default function HomePage() {
  return (
    <section className="relative z-10 w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src="/videos/hero-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}
