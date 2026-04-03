// app/services/page.tsx

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              We build websites
              <br />
              that actually drive revenue.
            </h1>

            <p className="text-gray-500 max-w-md">
              Not templates. Not just design. High-performance digital assets
              built to convert, scale, and grow your business.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/project-request"
                className="bg-black text-white px-6 py-3 text-sm font-medium"
              >
                Start your project
              </Link>
              <Link
                href="/work"
                className="border border-gray-300 px-6 py-3 text-sm font-medium hover:border-black"
              >
                View work
              </Link>
            </div>
          </div>

          {/* ABSTRACT VISUAL */}
          <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
            <div className="w-24 h-24 border border-gray-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 text-sm text-gray-500">
          <span>50+ Projects Delivered</span>
          <span>2M+ Users Impacted</span>
          <span>Fast, Scalable, SEO-Ready</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-28 max-w-5xl mx-auto space-y-32">
        {/* SERVICE 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-500 mb-6">
              Custom-built websites engineered for performance and scalability.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Conversion-focused architecture</li>
              <li>• Lightning-fast performance</li>
              <li>• Scalable, clean codebase</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 text-sm font-medium underline"
            >
              Start project →
            </Link>
          </div>

          <div className="aspect-[4/3] bg-gray-100 rounded-xl" />
        </div>

        {/* SERVICE 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 aspect-[4/3] bg-gray-100 rounded-xl" />

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-gray-500 mb-6">
              Interfaces designed to guide users, not confuse them.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Clear user flows</li>
              <li>• High-end visual systems</li>
              <li>• Mobile-first precision</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 text-sm font-medium underline"
            >
              View process →
            </Link>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4">E-commerce</h2>
            <p className="text-gray-500 mb-6">
              Online stores built for conversion, not just catalog display.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Optimized checkout flow</li>
              <li>• Product-focused UX</li>
              <li>• Scalable backend systems</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 text-sm font-medium underline"
            >
              Build store →
            </Link>
          </div>

          <div className="aspect-[4/3] bg-gray-100 rounded-xl" />
        </div>

        {/* SERVICE 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1 aspect-[4/3] bg-gray-100 rounded-xl" />

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">Performance & SEO</h2>
            <p className="text-gray-500 mb-6">
              Speed, structure, and visibility — built from the ground up.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Core Web Vitals optimization</li>
              <li>• Technical SEO foundation</li>
              <li>• Clean semantic structure</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 text-sm font-medium underline"
            >
              Optimize →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-16">
            Simple process. High-quality output.
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-sm">
            {["Discovery", "Strategy", "Execution", "Launch"].map((step, i) => (
              <div key={i}>
                <span className="text-gray-400">0{i + 1}</span>
                <h3 className="mt-2 font-medium">{step}</h3>
                <p className="text-gray-500 mt-1">
                  {step === "Discovery" && "Understand business & goals"}
                  {step === "Strategy" && "Define structure & direction"}
                  {step === "Execution" && "Design & develop system"}
                  {step === "Launch" && "Deploy & optimize"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="px-6 py-28 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-semibold tracking-tight">
          No templates.
          <br />
          No shortcuts.
        </h2>

        <p className="text-gray-500">
          Every project is designed and built from scratch — aligned with your
          business goals, not pre-made layouts.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 pb-28 max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold">Selected work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-3">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl" />
              <p className="text-sm text-gray-600">
                Increased conversions by 2x with redesigned flow.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">
            Ready to build something that performs?
          </h2>

          <p className="text-white/60 text-sm">
            Stop wasting traffic on weak websites.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium"
          >
            Start your project
          </Link>
        </div>
      </section>
    </main>
  );
}
