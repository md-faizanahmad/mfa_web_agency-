// src/components/sections/work/WorkHero.tsx
export default function WorkHero() {
  return (
    <section className="py-24 px-6 border-b border-brand-midnight/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
            <h1 className="text-7xl md:text-9xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.8]">
              SYSTEMS <br />
              <span className="text-brand-midnight/10 font-outline-2">
                IN ACTION.
              </span>
            </h1>
          </div>
          <div className="flex flex-col gap-2 border-l-2 border-brand-cobalt pl-6 py-2">
            <span className="text-3xl font-black text-brand-midnight tracking-tighter uppercase leading-none">
              +1.2M
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Aggregate Traffic Growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
