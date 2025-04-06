'use client';

import { useEffect, useState } from "react";

export default function HeroVideoClient() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero.mp4");
  }, []);

  if (!videoSrc) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
