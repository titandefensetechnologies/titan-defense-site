'use client';

import Image from 'next/image';

export default function DesktopLandingPage() {
  const BG_SHIFT = '-160px'; // background upward shift
  const BG_ZOOM_BASE = 0.95;

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* === Fixed Background Layer === */}
      <div className="fixed inset-0 z-0 flex items-end justify-center bg-black" aria-hidden>
        <Image
          src="/images/wp5317953.png"
          alt="Titan Defense Background"
          fill
          className="object-cover object-bottom"
          priority
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 'calc(100vh - 5rem)', // stays flush with top of footer
          }}
        />
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

      {/* === Logo (Higher + Larger) === */}
      <div className="absolute -top-6 left-8 z-50">
        <Image
          src="/images/logo.png"
          alt="Titan Defense Technologies"
          width={1200}
          height={1200}
          className="w-auto h-72 md:h-80 lg:h-88 drop-shadow-[0_16px_36px_rgba(0,0,0,0.55)]"
          priority
        />
      </div>

      {/* === Hero Video + Caption === */}
      <section
        className="relative z-20 flex flex-col items-center justify-center min-h-screen"
        style={{ paddingTop: '5rem', paddingBottom: '5rem' }} // moved up slightly
      >
        <div className="relative w-[60vw] max-w-[960px] bg-black/30 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
          <video autoPlay loop muted playsInline className="w-full h-auto object-contain">
            <source src="/videos/mine-hero.mp4" type="video/mp4" />
          </video>

          {/* Soft fade overlays */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Caption (same as mobile) */}
        <div className="mt-8 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            Built to Protect. Designed to Lead.
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-90 leading-relaxed">
            AI-powered safety technology keeping underground workers connected and alive - where others fail.
          </p>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="absolute bottom-0 left-0 right-0 h-20 bg-black z-40 grid place-items-center">
        <p className="text-[12px] tracking-wider opacity-80 text-center leading-none">
          © 2025 TITAN DEFENSE TECHNOLOGIES. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
