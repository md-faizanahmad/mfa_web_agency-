// src/app/services/web-development/page.tsx

import WebDevClient from "@/services/web-development/WebClient";

export const metadata = {
  title: "Professional Website Development | Custom Next.js Systems",
  description:
    "Get a fast, custom business website designed for growth. We build high-performance Next.js systems that rank on Google.",
};

export default function WebDevPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* SEO-Rich Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              1 Solution_Build_0
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Custom <br />
              <span className="text-sky-400 italic">Web Solutions.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            We don&apos;t use templates. We build custom websites from the
            ground up to ensure your business is fast, secure, and easy for your
            customers to navigate. Whether you need a landing page or a full
            e-commerce system, we deliver high-performance code.
          </p>

          {/* Search-Ready Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
                Search Growth
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Built-in SEO structure to help your business appear on Google
                search results.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">
                Mobile First
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Perfect viewing experience on smartphones, tablets, and desktop
                screens.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Visual Side */}
        <div className="lg:col-span-5">
          <WebDevClient />
        </div>
      </div>
    </main>
  );
}
