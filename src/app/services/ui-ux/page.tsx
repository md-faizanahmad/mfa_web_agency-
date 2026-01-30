// src/app/services/ui-ux/page.tsx

import UIUXClient from "@/services/ui-ux/ui-uxClient";

export const metadata = {
  title: "UI/UX Design & Conversion Strategy | MFA Agency",
  description:
    "High-performance user interfaces designed for business growth. We build conversion-focused experiences using modern UI/UX principles.",
};

export default function UIUXPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Solution_Build_04
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Experience <br />
              <span className="text-sky-400 italic">Engineering.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Design is how it works, not just how it looks. We engineer
            interfaces that guide your customers naturally toward the checkout
            button. By focusing on speed, clarity, and psychological flow, we
            turn casual visitors into loyal brand advocates.
          </p>

          {/* User-Focused Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Psychological Flow
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Strategic layouts that reduce &quot;choice fatigue&quot; and
                lead users to take action.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Frictionless UX
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Removing technical barriers so your customers can complete tasks
                in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <UIUXClient />
        </div>
      </div>
    </main>
  );
}
