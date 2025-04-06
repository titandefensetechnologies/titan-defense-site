'use client';
// Force redeploy to remove ghost routes

export default function HomePage() {
  return (
    <section className="relative z-10 w-full h-screen bg-red-800 text-white flex items-center justify-center text-xl font-bold">
      ONLY THIS SHOULD BE VISIBLE
    </section>
  );
}
