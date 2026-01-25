// src/components/sections/services/ServiceHero.tsx
export default function ServiceHero() {
  return (
    <section className="bg-white py-24 px-6 border-b border-brand-midnight/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
          <h1 className="text-6xl md:text-9xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.8] mb-8">
            Built for <br />
            <span className="text-brand-midnight/10 font-outline-2">
              Velocity.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl italic">
            We don&apos;t build generic websites. We engineer high-performance
            digital assets that function as growth engines for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
