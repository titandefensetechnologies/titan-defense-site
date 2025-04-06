// app/page.tsx

export default function HomePage() {
  return (
    <section className="relative z-10 w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}
