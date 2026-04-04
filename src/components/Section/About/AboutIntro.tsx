export default function AboutIntro() {
  return (
    <section className="px-6 py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            What We Build
          </h2>
        </div>

        <div className="space-y-5 text-slate-600">
          <p>
            We design and build structured digital platforms that are fast,
            scalable, and built for real-world usage.
          </p>

          <p>
            Every project is approached with a focus on performance, usability,
            and long-term maintainability — not just surface-level design.
          </p>

          <p>
            The goal is simple: create systems that support growth, not limit
            it.
          </p>
        </div>
      </div>
    </section>
  );
}
