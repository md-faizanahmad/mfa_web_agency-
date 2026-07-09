// src/app/services/website-development/page.tsx

import { MotionWrapper } from "@/components/Section/About/MotionWrapper";
import Link from "next/link";

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Websites engineered to perform —
              <br />
              not just exist.
            </h1>

            <p className="text-gray-500 max-w-md">
              We build high-performance websites focused on speed, scalability,
              and conversion — designed from scratch, never templates.
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

          {/* VISUAL */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-sm text-gray-400">UI + Code Preview</div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 text-sm text-gray-500">
          <span>50+ Projects Delivered</span>
          <span>High Performance Systems</span>
          <span>SEO-Ready Architecture</span>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="px-6 py-28 max-w-5xl mx-auto space-y-20">
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            What we actually build
          </h2>
        </MotionWrapper>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* CARD 1 */}
          <MotionWrapper>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Custom Website Development
              </h3>
              <p className="text-gray-500 text-sm">
                Fully custom-built websites aligned with your business logic —
                not pre-made templates or page builders.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clean scalable codebase</li>
                <li>• Business-first structure</li>
                <li>• Modular architecture</li>
              </ul>
            </div>
          </MotionWrapper>

          {/* CARD 2 */}
          <MotionWrapper>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Performance Engineering</h3>
              <p className="text-gray-500 text-sm">
                Built for speed from the ground up — not optimized later.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Core Web Vitals optimized</li>
                <li>• Lazy loading & code splitting</li>
                <li>• SSR / SSG rendering</li>
              </ul>
            </div>
          </MotionWrapper>

          {/* CARD 3 */}
          <MotionWrapper>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Scalable Architecture</h3>
              <p className="text-gray-500 text-sm">
                Built to grow with your business — not break under it.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• API-first structure</li>
                <li>• Clean folder architecture</li>
                <li>• Database-ready systems</li>
              </ul>
            </div>
          </MotionWrapper>

          {/* CARD 4 */}
          <MotionWrapper>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Conversion-Focused Structure
              </h3>
              <p className="text-gray-500 text-sm">
                Every section is designed to move users toward action.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clear user flow</li>
                <li>• Strategic CTA placement</li>
                <li>• Business-driven UX</li>
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-semibold">Built with modern stack</h2>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Prisma",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-gray-300 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-28 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-16">
          Simple process. High-quality output.
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-sm">
          {[
            {
              title: "Discovery",
              desc: "Understand business goals and requirements",
            },
            {
              title: "Strategy",
              desc: "Define structure, flow, and architecture",
            },
            {
              title: "Development",
              desc: "Build scalable and high-performance system",
            },
            {
              title: "Launch",
              desc: "Deploy, test, and optimize continuously",
            },
          ].map((step, i) => (
            <MotionWrapper key={i}>
              <div>
                <span className="text-gray-400">0{i + 1}</span>
                <h3 className="mt-2 font-medium">{step.title}</h3>
                <p className="text-gray-500 mt-1">{step.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-28 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-semibold tracking-tight">
          Most websites fail because they’re built for looks.
        </h2>

        <p className="text-gray-500">
          We build for speed, structure, scalability, and conversion. Design
          supports the system — not the other way around.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="px-6 pb-28 max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold">Selected work</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <MotionWrapper key={item}>
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl" />

                <p className="text-sm text-gray-600">
                  Reduced load time from 4.2s → 1.1s. Increased engagement by
                  38%.
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-24 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">
            If your website isn’t generating business, it’s a liability.
          </h2>

          <p className="text-white/60 text-sm">Let’s fix it.</p>

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
