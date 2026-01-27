// src/components/sections/work/WorkHero.tsx
export default function WorkHero() {
  return (
    <section className="py-14 px-6 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
            <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8]">
              REAL <br />
              <span className="text-slate-100 font-outline-2">RESULTS.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-sky-400 pl-6 py-2">
            <span className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              +1.2M
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-35">
              Total visitors gained for our clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
