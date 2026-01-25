// src/components/Layouts/HeaderClient.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  MessageSquare,
  User,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap = { Home, Layers, Briefcase, User, MessageSquare };

interface items {
  name: string;
  href: string;
  icon: string;
}

export default function HeaderClient({
  items,
  variant,
}: {
  items: items[];
  variant: "desktop" | "mobile";
}) {
  const pathname = usePathname();

  if (variant === "desktop") {
    return (
      <>
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-brand-midnight hover:scale-105 transition-transform"
        >
          MFA<span className="text-brand-cobalt">.</span>
        </Link>

        <div className="flex items-center gap-2 bg-brand-ice/50 p-1.5 rounded-full border border-brand-midnight/5">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-xs font-black uppercase tracking-widest transition-all",
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-brand-midnight",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-nav"
                    className="absolute inset-0 bg-brand-midnight rounded-full -z-10 shadow-lg shadow-brand-midnight/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="group flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-midnight transition-all shadow-xl shadow-brand-cobalt/20"
        >
          Initialize
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </Link>
      </>
    );
  }

  // MOBILE BOTTOM DOCK
  return (
    <div className=" bg-blue-400  backdrop-blur-2xl border border-white/10 rounded-1xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <ul className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = IconMap[item.icon as keyof typeof IconMap];

          return (
            <li key={item.name} className="relative">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center p-2 rounded-2xl transition-all duration-500",
                  isActive ? "scale-110" : "opacity-40 grayscale",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav"
                    className="absolute inset-0   -z-10"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <Icon
                  className={cn(
                    "w-5 h-5 mb-1",
                    isActive ? "text-white" : "text-gray-100",
                  )}
                />
                <span
                  className={cn(
                    "text-[8px] font-black uppercase tracking-[0.2em]",
                    isActive ? "text-white" : "text-white/40",
                  )}
                >
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="w-1 h-1 bg-brand-cobalt rounded-full mt-1"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
