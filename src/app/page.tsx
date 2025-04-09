
export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <img src="/images/logo.png" alt="Titan Logo" className="h-48 mb-4" />
      <video autoPlay loop muted playsInline className="w-full max-w-4xl">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Titan Defense Technologies. All rights reserved.
      </footer>
    </div>
  )
}
