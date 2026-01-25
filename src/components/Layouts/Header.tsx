"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  Layers,
  MessageSquare,
  User,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Work", href: "/work", icon: Briefcase },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* --- DESKTOP TOP HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block border-b border-brand-midnight/5 bg-background/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-brand-midnight"
          >
            MFA<span className="text-brand-cobalt">.</span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-brand-cobalt",
                    isActive ? "text-brand-cobalt" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-brand-midnight text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-cobalt transition-all shadow-lg shadow-brand-cobalt/10"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </nav>
      </header>

      {/* --- MOBILE TOP LOGO BAR --- */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-md border-b border-brand-midnight/5 px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tighter text-brand-midnight">
          MFA.
        </span>
        <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center border border-brand-cobalt/10">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-cobalt animate-pulse" />
        </div>
      </div>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-100 md:hidden">
        <div className="bg-brand-midnight backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-brand-midnight/40">
          <ul className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="flex-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center py-2.5 gap-1 transition-all rounded-xl",
                      isActive ? "bg-white/10 text-white" : "text-blue-100/40",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5",
                        isActive ? "text-brand-cobalt" : "",
                      )}
                    />
                    <span className="text-[9px] font-bold uppercase tracking-widest">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
