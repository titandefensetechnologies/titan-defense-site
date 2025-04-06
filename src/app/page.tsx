'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Detect mobile width
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4');
  }, []);

  if (!videoSrc) return (
    <section className="w-full h-screen bg-black flex items-center justify-center text-white text-xl">
      Loading video...
    </section>
  );

  return (
    <section className="relative z-10 w-full h-screen bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}
