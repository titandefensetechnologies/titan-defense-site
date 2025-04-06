'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between text-white bg-black">
      {/* Hero Video */}
      <div className="w-full relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full object-cover ${
            isMobile ? 'min-h-[600px]' : 'min-h-[750px]'
          }`}
        >
          <source
            src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
