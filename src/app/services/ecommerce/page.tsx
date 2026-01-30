// src/app/services/ecommerce/page.tsx

import EcomClient from "@/services/ecom/ecomClient";

export const metadata = {
  title: "E-commerce Development | Custom Online Stores & Dashboards",
  description:
    "Sell more with a high-speed online store. We build custom e-commerce systems with secure payments and easy management tools.",
};

export default function EcomPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side - 7 Columns */}
        <div className="lg:col-span-7 space-y-10">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              Solution_Build_02
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Scalable <br />
              <span className="text-sky-400 italic">Storefronts.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            We build online stores that load in milliseconds. From secure
            payment processing to easy-to-use admin panels, we provide
            everything you need to manage your products and grow your revenue
            without the technical headache.
          </p>

          {/* Business-Focused Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Secure Payments
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Reliable integration with Stripe, PayPal, and more for safe
                customer checkouts.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 group hover:border-sky-400 transition-colors">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Easy Dashboard
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                A simple custom panel to update prices, track stock, and manage
                orders instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side - 5 Columns */}
        <div className="lg:col-span-5">
          <EcomClient />
        </div>
      </div>
    </main>
  );
}
