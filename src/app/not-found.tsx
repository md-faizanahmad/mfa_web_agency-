// src/app/not-found.tsx

import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen mt-8 bg-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[30vw] font-black uppercase tracking-tighter">
          404
        </h1>
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-10">
        {/* Tactical Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] font-mono">
            Error: Page_Not_Found
          </span>
        </div>

        {/* Simple Message */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Lost in the <br />
            <span className="text-sky-400 italic">System.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm mx-auto">
            The page you are looking for has been moved, deleted, or never
            existed in our infrastructure.
          </p>
        </div>

        {/* Action Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-sky-400 hover:text-slate-950 transition-all shadow-2xl shadow-slate-200"
          >
            <Home size={14} /> Return to Home
          </Link>
        </div>

        {/* Bottom Technical Footer */}
        <div className="pt-12 flex items-center justify-center gap-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Terminal size={12} />
            <span>MFA_Core_v2.0</span>
          </div>
          <div className="h-3 w-px bg-slate-100" />
          <span>Session_Secure</span>
        </div>
      </div>
    </section>
  );
}
