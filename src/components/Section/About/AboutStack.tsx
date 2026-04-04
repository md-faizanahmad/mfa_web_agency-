export default function AboutStack() {
  return (
    <section className="px-6 py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          Tech & Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-slate-900 mb-2">Frontend</p>
            <p>React, Next.js, TypeScript</p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-2">Backend</p>
            <p>Node.js, APIs, Database Systems</p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-2">Focus</p>
            <p>Performance, SEO, Scalable Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
