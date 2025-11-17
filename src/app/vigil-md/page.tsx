export default function VigilMDPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-3xl font-bold mb-6 tracking-wide">VIGIL-MD</h1>
      <p className="max-w-3xl text-lg opacity-90 leading-relaxed">
        VIGIL-MD is a mission-critical safety and monitoring system built for zero-signal
        underground environments. It continuously monitors heart rate, posture, and motion,
        detecting incidents such as falls or cardiac irregularities and transmitting alerts
        instantly to surface control via the VIGIL-LINK relay network.
      </p>
    </section>
  );
}
