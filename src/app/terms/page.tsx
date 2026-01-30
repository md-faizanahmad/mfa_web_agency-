// src/app/terms/page.tsx
export default function TermsPage() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Tactical Header */}
        <header className="space-y-4 border-b border-slate-100 pb-10">
          <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Terms of <br />{" "}
            <span className="text-slate-200 font-outline-2">Service.</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            Standard Operating Procedure
          </p>
        </header>

        {/* Content Section */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              1. Project Scope
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              MFA builds custom digital systems. Our work is defined by the
              specific goals we set at the start of each project. Any changes to
              the plan may impact the timeline.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              2. Payment & Delivery
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              Systems are delivered only after final testing and full payment.
              We ensure everything is operational before handing over the keys
              to your new infrastructure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
              3. Liability
            </h2>
            <p className="text-sm leading-relaxed text-slate-500">
              While we build for 100% performance, we are not responsible for
              third-party hosting failures or external search engine algorithm
              changes.
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <footer className="pt-10 border-t border-slate-100 text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
          MFA Agency // Legal_Department
        </footer>
      </div>
    </article>
  );
}
