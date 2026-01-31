// src/components/sections/services/ServiceHero.tsx
export default function ServiceHero() {
  return (
    <section className="bg-white py-24 px-6 border-b border-brand-midnight/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-6">
          <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-midnight tracking-tight leading-tight mb-6">
            Website Services <br />
            <span className="text-brand-midnight/20">
              That Help Your Business Grow
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            We design and develop simple, fast websites that help people find
            your business on Google and contact you easily.
          </p>
        </div>
      </div>
    </section>
  );
}
