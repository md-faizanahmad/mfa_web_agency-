// src/components/layout/HeaderClient.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MobileContactStrip from "@/shared/MobileContactStrip";
// Ensure this matches your interface in types
interface NavItem {
  name: string;
  href: string;
}

export default function NewHeader({ items = [] }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      {/* <header className="fixed top-0   left-0 right-0 z-120 "> */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-120  transition-all duration-300",
          scrolled ? "bg-white/80 backdrop-blur-md " : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-8 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="relative flex items-center h-8 md:h-10 z-130 hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <span className="sr-only">
              WebGrowth Studio - Web Development & SEO , ADS
            </span>
            <Image
              src="/brand.png"
              alt="WebGrowth Studio"
              width={120} // Adjust based on your logo's actual shape
              height={40} // Keep this small (md-size)
              className="w-auto h-full object-contain rounded-full"
              priority // Eager load for LCP performance
              role="presentation"
            />
          </Link>

          {/* DESKTOP NAV PILLS */}
          <div className="hidden  md:flex items-center gap-2 ms-15 0 p-1 border border-slate-70 rounded-full">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-sky-500",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-sky-950 rounded-full shadow-lg shadow-slate-200"
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
              href="/project-request"
              aria-label="Request a new project"
              className="hidden md:flex items-center gap-2 bg-brand-midnight text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all shadow-xl shadow-sky-100"
            >
              Request New Project <ArrowUpRight size={14} />
            </Link>

            {/* ANIMATED HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-130 cursor-pointer w-10 h-10 bg-white/80 backdrop-blur-md rounded-sm  flex flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-500 block origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-4 h-0.5 bg-red-700 block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-700 block origin-center"
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
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-110 md:hidden"
            />
            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[88%] bg-white z-115 md:hidden flex flex-col"
            >
              {/* TOP BAR */}
              {/* <div className="flex items-center justify-between px-6 mt-10 h-20 border-b border-black/5">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-black/40 uppercase">
                  Menu
                </span>
              </div> */}

              {/* NAV */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <nav className="flex flex-col gap-6">
                  {items.map((item, i) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          aria-label="Arrow"
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between group transition-all duration-300",
                            "text-xl font-semibold tracking-tight",
                            isActive
                              ? "text-black"
                              : "text-black/40 hover:text-black",
                          )}
                        >
                          <span>{item.name}</span>

                          {/* subtle arrow */}
                          <span className="opacity-0 group-hover:opacity-100 transition">
                            ↗
                          </span>
                        </Link>

                        {/* divider */}
                        <div className="mt-4 h-px bg-black/5" />
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* BOTTOM CTA */}
              <div className="px-6 pb-8">
                <MobileContactStrip />
                <Link
                  href="/project-request"
                  aria-label="Request a new project"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 border border-black text-black py-4 text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
                >
                  Start Project <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
