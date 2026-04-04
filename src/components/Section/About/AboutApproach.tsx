export default function AboutApproach() {
  return (
    <section className="px-6 py-20 border-b border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Understand the Problem",
              desc: "Every project starts with identifying real business needs, not assumptions.",
            },
            {
              title: "Design for Behavior",
              desc: "User flow and interaction are prioritized over visual decoration.",
            },
            {
              title: "Build for Scale",
              desc: "Systems are structured to grow without breaking or requiring rebuilds.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
