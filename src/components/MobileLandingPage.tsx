'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function MobileLandingPage() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ===== TWEAKS =====
  const BG_Y = '62%';       // move background up/down (55–80%)
  const LOGO_W = '36rem';   // logo box width on base (e.g. '32rem', '36rem', '40rem')
  const LOGO_H = '11rem';   // logo box height on base (e.g. '9rem', '10rem', '11rem')
  // ===================

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="relative text-white overflow-hidden">
      {/* Background (mobile) */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/mobile-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: `center ${BG_Y}`,
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* LOCKED FULL-SCREEN LAYOUT (no scroll) */}
      <div className="fixed inset-0 grid grid-rows-[auto_1fr_auto]">
{/* === HEADER (centered logo + hamburger) === */}
<header className="relative z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
  <div className="mx-auto max-w-screen-sm px-4">
    {/* Use a relative container so we can absolutely center the logo
        and pin the hamburger to the right */}
    <div className="relative h-36 sm:h-40">
      {/* Centered logo (ignores the hamburger width) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative" style={{ width: '36rem', height: '11rem' }}>
          <Image
            src="/images/logo.png"
            alt="Titan Defense Technologies"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Hamburger pinned to the right, vertically centered */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/15 hover:ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
        >
          {/* Hamburger / X */}
          <svg className={`h-7 w-7 ${open ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-7 w-7 ${open ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Dropdown: absolute under the header, centered; never clipped */}
  <div
    id="mobile-menu"
    className={`absolute left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-sm px-4
      overflow-hidden transition-[max-height,opacity] duration-300
      ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
  >
    <nav aria-label="Primary" className="pb-3 pt-1">
      <ul className="flex flex-col items-center gap-3 text-base font-semibold uppercase tracking-[0.15em]">
        <li><a href="#home" className="hover:text-red-500">Home</a></li>
        <li><a href="#vigil-md" className="hover:text-red-500">Vigil-MD</a></li>
        <li><a href="#vigil-link" className="hover:text-red-500">Vigil-Link</a></li>
        <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>


        {/* Click-outside backdrop for the dropdown */}
        {open && (
          <button
            aria-label="Close menu backdrop"
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
          />
        )}

{/* === CENTER VIDEO (moved up slightly + tagline underneath) === */}
<section className="flex flex-col items-center justify-center px-0 -mt-3">
  <div className="relative w-full max-w-none overflow-hidden">
    <div className="w-full h-[32vh] sm:h-[34vh] bg-black/60">
      <video
        ref={videoRef}
        src="/videos/mine-hero.mp4"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        className="w-full h-full object-cover"
        onClick={() => videoRef.current?.play().catch(() => {})}
      />
    </div>
  </div>

  {/* === Tagline Text === */}
  <div className="mt-4 text-center px-6">
    <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-white">
      Built to Protect. Designed to Lead.
    </h2>
    <p className="text-sm sm:text-base mt-2 text-gray-300 max-w-md mx-auto leading-snug">
AI-powered safety technology keeping underground workers connected and alive - where others fail.
    </p>
  </div>
</section>

        {/* === FOOTER (sticks to bottom) === */}
        <footer className="grid place-items-center py-4 text-xs text-gray-400 bg-black/40 backdrop-blur-sm">
          © 2025 Titan Defense Technologies. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
