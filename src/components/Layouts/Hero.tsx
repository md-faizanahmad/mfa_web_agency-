"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Decorative Element: "The Engine" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-cobalt)_0%,transparent_70%)]" />
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: The Disrupted Heading (7 Columns) */}
        <div className="lg:col-span-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clip-text bg-linear-to-r from-brand-cobalt to-blue-400 text-brand-cobalt text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>Built for High-Growth Founders</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-[ -0.04em] text-brand-midnight mb-8">
              WE BUILD <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cobalt to-blue-400">
                SYSTEMS
              </span>{" "}
              <br />
              NOT JUST SITES.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium leading-relaxed mb-10">
              Transforming slow, invisible websites into high-conversion digital
              assets that dominate search results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-brand-midnight text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-cobalt transition-all group shadow-2xl shadow-brand-midnight/20"
              >
                Launch Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="bg-white border border-brand-midnight/10 text-brand-midnight px-8 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-brand-ice transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The Kinetic "Impact" Grid (4 Columns) */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <motion.div style={{ y: y1 }} className="space-y-6">
            {/* Metric Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-brand-midnight/5 flex items-start gap-4 transform -rotate-2">
              <div className="p-3 bg-green-50 rounded-lg text-green-600">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-brand-midnight">
                  99.9%
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-tight">
                  Core Web Vitals
                </div>
              </div>
            </div>

            {/* Metric Card 2 */}
            <motion.div
              style={{ y: y2 }}
              className="bg-brand-midnight p-6 rounded-2xl shadow-2xl shadow-brand-midnight/30 flex items-start gap-4 translate-x-8 rotate-3"
            >
              <div className="p-3 bg-brand-cobalt rounded-lg text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">+420%</div>
                <div className="text-xs font-bold text-blue-100/50 uppercase tracking-tight">
                  Organic Traffic Growth
                </div>
              </div>
            </motion.div>

            {/* Metric Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-brand-midnight/5 flex items-start gap-4 -translate-x-4 -rotate-1">
              <div className="p-3 bg-brand-ice rounded-lg text-brand-cobalt">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-brand-midnight">
                  &lt; 1.2s
                </div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-tight">
                  Avg. Load Velocity
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
