'use client';

import React from 'react';
import Image from 'next/image';

export default function DesktopLandingPage() {
  // tweak these
  const BG_SHIFT = '-130px';  // negative moves UP, positive moves DOWN
  const BG_ZOOM_BASE = 0.95;  // base scale; animation will gently go a bit above this

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* === Fixed Background Layer === */}
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-0 right-0 top-0 h-[140vh]"
          style={{
            transform: `translateY(${BG_SHIFT})`, // translate stays on parent
            transformOrigin: 'center center',
          }}
        >
          {/* zoom animation runs on this child; base scale set inline */}
          <div
            className="w-screen h-full bg-zoom"
            style={{ transform: `scale(${BG_ZOOM_BASE})` }}
          >
            <div
              className="w-screen h-full bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url('/images/wp5317953.jpg')" }}
            />
          </div>
        </div>
      </div>

      {/* === Overlay === */}
      <div className="fixed inset-0 z-10 bg-black/60" aria-hidden />

      {/* === Header === */}
      <header className="absolute top-0 left-0 right-0 h-24 bg-black z-40 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-16 md:gap-20 text-lg md:text-xl font-semibold tracking-[0.25em] uppercase">
            {[
              { href: '#vigil-md', label: 'Vigil-MD' },
              { href: '#vigil-link', label: 'Vigil-Link' },
              { href: '#about', label: 'About Us' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative hover:text-red-500 transition-colors duration-200
                             after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                             after:bg-red-500 after:transition-[width] after:duration-300 hover:after:w-full
                             focus:outline-none focus-visible:ring-2 ring-red-500/60 ring-offset-2 ring-offset-black"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* === Logo Section === */}
      <div className="grid grid-cols-3 items-center h-32 sm:h-36">
        <div />
        <div className="justify-self-center flex items-center justify-center">
          {/* BIGGER, still object-contain so it won't distort */}
          <div className="relative w-80 h-24 sm:w-96 sm:h-28">
            <Image
              src="/images/logo.png"
              alt="Titan Defense Technologies"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* hamburger stays the same */}
      </div>

      {/* === Hero Video === */}
      <section
        className="relative z-20 flex items-center justify-center min-h-screen"
        style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
      >
        <div className="relative w-[60vw] max-w-[960px] bg-black/30 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
          <video autoPlay loop muted playsInline className="w-full h-auto object-contain">
            <source src="/videos/mine-hero.mp4" type="video/mp4" />
          </video>

          {/* Soft fade overlays */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </section>

      {/* === Footer === */}
      <footer className="absolute bottom-0 left-0 right-0 h-20 bg-transparent z-40 grid place-items-center">
        <p className="text-[12px] tracking-wider opacity-80 text-center leading-none">
          © 2025 TITAN DEFENSE TECHNOLOGIES. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
