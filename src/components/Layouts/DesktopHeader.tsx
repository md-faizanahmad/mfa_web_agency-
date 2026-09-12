import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface DesktopHeaderProps {
  items: NavItem[];
  pathname: string;
  scrolled: boolean;
}

export default function DesktopHeader({
  items,
  pathname,
  scrolled,
}: DesktopHeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-120 hidden md:block",
        "transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="WebGrowth Studio home"
          className="relative z-130 flex items-center h-10 transition-opacity hover:opacity-80"
        >
          <Image
            src="/brand_logo.png"
            alt="WebGrowth Studio"
            width={120}
            height={40}
            priority
            className="w-auto h-full object-contain rounded-full"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2 ms-15 p-1 border border-slate-200 rounded-full">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-5 py-2 rounded-full",
                  "text-[10px] font-black uppercase tracking-widest",
                  "transition-all duration-300",
                  isActive
                    ? "bg-sky-950 text-white shadow-lg shadow-slate-200"
                    : "text-slate-500 hover:text-sky-500 hover:bg-slate-50",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/project-request"
          aria-label="Request a new project"
          className={cn(
            "flex items-center gap-2",
            "bg-brand-midnight text-white px-6 py-3",
            "text-[10px] font-black uppercase tracking-widest",
            "transition-colors duration-300",
            "hover:bg-slate-950",
          )}
        >
          Request New Project
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </nav>
    </header>
  );
}
