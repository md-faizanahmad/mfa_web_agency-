// src/app/services/seo/page.tsx

import SEOClient from "@/services/seo/seoClient";

export const metadata = {
  title: "Technical SEO & Search Growth | MFA Agency",
  description:
    "Dominating search engine results through technical excellence. We build Next.js systems optimized for Google's latest performance standards.",
};

export default function SEOPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Solution_Build_03
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Organic <br />
              <span className="text-sky-400 italic">Authority.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Search rankings are not an accident; they are engineered. We build
            technical foundations that Google loves—lightning-fast speeds,
            perfect mobile responsiveness, and clean code that makes it easy for
            search engines to rank your business at the top.
          </p>

          {/* Strategic Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Core Web Vitals
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Optimization for Google&apos;s speed metrics to ensure your site
                stays ahead of competitors.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Semantic Structure
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                High-level data mapping that tells search engines exactly what
                your business offers.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <SEOClient />
        </div>
      </div>
    </main>
  );
}
