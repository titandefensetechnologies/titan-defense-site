'use client';

import { useState, useEffect } from "react";

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero.mp4");
  }, []);

  if (!videoSrc) return null; // avoid server preload and flicker

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}
