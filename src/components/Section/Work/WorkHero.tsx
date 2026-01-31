// src/components/sections/work/WorkHero.tsx
export default function WorkHero() {
  return (
    <section className="py-14 px-6 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
              Our Work <br />
              <span className="text-slate-200">Real Business Websites</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-sky-400 pl-6 py-2">
            <span className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Practical results
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-35">
              Websites designed to improve visibility, enquiries, and user
              experience.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
