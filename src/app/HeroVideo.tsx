'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // We're on the client now
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null; // ⛔ Don't render anything server-side

  return (
    <section className="relative w-full h-screen overflow-hidden z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
        <source
          src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
