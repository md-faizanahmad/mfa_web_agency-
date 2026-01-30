// src/app/services/hosting/page.tsx

import HostingClient from "@/services/hosting-domain/Hosting";

export const metadata = {
  title: "Premium Cloud Hosting & Domain Management | MFA Agency",
  description:
    "Secure, high-speed cloud hosting for business-critical websites. We manage your domains and infrastructure for maximum reliability.",
};

export default function HostingPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Solution_Build_06
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Digital <br />
              <span className="text-sky-400 italic">Foundation.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            A fast website requires a powerful engine. We provide global cloud
            hosting that places your data closer to your customers. From domain
            registration to SSL certification, we handle the technical
            architecture so your site remains fast, secure, and always
            accessible.
          </p>

          {/* Infrastructure Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Global Edge Network
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Content delivery through worldwide nodes to ensure instant
                loading in any country.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Automated SSL
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Encrypted connections provided as standard to protect user data
                and boost SEO rankings.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <HostingClient />
        </div>
      </div>
    </main>
  );
}
