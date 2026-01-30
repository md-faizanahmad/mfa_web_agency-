// src/app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Tactical Header */}
        <header className="space-y-4 border-b border-slate-100 pb-10">
          <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Privacy <br />{" "}
            <span className="text-slate-200 font-outline-2">Protocol.</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            Last Updated: January 30, 2026
          </p>
        </header>

        {/* Content Section */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              1. Data Collection
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              We only collect information that helps us build better systems for
              you. This includes contact details you provide and basic website
              usage data to improve our performance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              2. Usage
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              Your data is never sold. We use it strictly to manage your
              projects, improve site speed, and communicate about system
              updates.
            </p>
          </section>

          <section className="space-y-4 border-l-2 border-sky-400 pl-6 py-2 bg-slate-50">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              3. Security
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 italic">
              All client information is stored in encrypted environments. We
              treat your business data with the same security we use for our own
              core infrastructure.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
