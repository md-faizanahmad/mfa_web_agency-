// src/app/services/maintenance/page.tsx

import MaintenanceClient from "@/services/maintenance/maintenanceClient";

export const metadata = {
  title: "Website Maintenance & 24/7 Support | MFA Agency",
  description:
    "Reliable system monitoring and technical support. We ensure your business website stays fast, secure, and online 24/7.",
};

export default function MaintenancePage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Solution_Build_05
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Total <br />
              <span className="text-sky-400 italic">Reliability.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            A high-speed website is only useful if it stays online. We provide
            continuous monitoring, security updates, and performance tuning to
            ensure your digital infrastructure never sleeps. We handle the
            updates so you can handle the business.
          </p>

          {/* Reliability Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Threat Prevention
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Active security patches and firewall management to keep your
                data safe.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Uptime Monitoring
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Real-time alerts and automatic scaling to prevent downtime
                during traffic spikes.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <MaintenanceClient />
        </div>
      </div>
    </main>
  );
}
