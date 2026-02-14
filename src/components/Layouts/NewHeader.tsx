// src/components/layout/HeaderClient.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// Ensure this matches your interface in types
interface NavItem {
  name: string;
  href: string;
}

export default function NewHeader({ items = [] }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-120 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="relative flex items-center h-8 md:h-10 z-130 hover:opacity-80 transition-opacity"
            aria-label="MFA Home"
          >
            <span className="sr-only">MFA Agency - Web Development & SEO</span>
            <Image
              src="/brand_logo.png"
              alt="MFA - High Performance Next.js Development Agency"
              width={120} // Adjust based on your logo's actual shape
              height={40} // Keep this small (md-size)
              className="w-auto h-full object-contain rounded-full"
              priority // Eager load for LCP performance
            />
          </Link>

          {/* DESKTOP NAV PILLS */}
          <div className="hidden md:flex items-center gap-1 0 p-1 border border-slate-100">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-900",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-slate-950 shadow-lg shadow-slate-200"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 bg-brand-midnight text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-sky-100"
            >
              Request New Project <ArrowUpRight size={14} />
            </Link>

            {/* ANIMATED HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-130 w-10 h-10 flex flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-950 block origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-6 h-0.5 bg-slate-950 block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-950 block origin-center"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-110 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] bg-white z-115 p-8 pt-32 md:hidden flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-12">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-sky-500 font-mono"></span>
                <nav className="flex flex-col gap-4">
                  {items.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="relative"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-4xl font-black uppercase tracking-tighter leading-none block py-2 transition-colors",
                            isActive ? "text-sky-500" : "text-slate-900",
                          )}
                        >
                          {item.name}
                        </Link>
                        {isActive && (
                          <motion.div
                            layoutId="mobile-pill"
                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-sky-400"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-6">
                <div className="h-px bg-slate-100 w-full" />
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-slate-950 text-white p-5 text-xs font-black uppercase tracking-[0.2em]"
                >
                  Request Project <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
