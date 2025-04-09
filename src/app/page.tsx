export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Hero Video Section */}
      <div className="w-full relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[100vh] object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Placeholder for Coming Sections */}
      <section className="text-center py-10 px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Titan Defense Technologies</h1>
        <p className="text-lg text-gray-300">
          Canadian military innovation built for tomorrow's battlefield. From smart wearables
          to resilient communication systems, we command the edge.
        </p>
      </section>
    </main>
  );
}
