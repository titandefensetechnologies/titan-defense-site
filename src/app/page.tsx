export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen object-cover absolute top-0 left-0 z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        <img
          src="/images/logo.png"
          alt="Titan Defense Technologies Logo"
          className="w-48 md:w-64 mb-6"
        />
        <h1 className="text-2xl md:text-4xl font-bold">
          Canadian Military Innovation
        </h1>
        <p className="mt-2 text-base md:text-lg">
          Tactical Systems. Battlefield Comms. Combat Wearables.
        </p>
      </div>
    </main>
  );
}
