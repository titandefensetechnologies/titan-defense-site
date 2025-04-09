'use client';

import React from 'react';

const HeroClientWrapper = () => {
  return (
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
  );
};

export default HeroClientWrapper;
