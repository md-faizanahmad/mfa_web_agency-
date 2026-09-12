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
}

export default function DesktopHeader({ items, pathname }: DesktopHeaderProps) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-120 hidden md:block",
        "border-b border-slate-200 bg-white",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-19 max-w-7xl items-center justify-between px-8"
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="WebGrowth Studio home"
          className="flex h-9 items-center transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src="/brand_logo.png"
            alt="WebGrowth Studio"
            width={120}
            height={40}
            priority
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <ul
          aria-label="Primary navigation"
          className="flex h-full items-center gap-9"
        >
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative flex h-full items-center",
                    "text-[11px] font-medium uppercase tracking-[0.16em]",
                    "transition-colors duration-200",
                    isActive
                      ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-950",
                  )}
                >
                  {item.name}

                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-px",
                      "origin-center bg-slate-950",
                      "transition-transform duration-200",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/project-request"
          aria-label="Start a new project"
          className={cn(
            "group flex items-center gap-3",
            "border border-slate-950 px-5 py-3",
            "text-[10px] font-semibold uppercase tracking-[0.14em]",
            "text-slate-950",
            "transition-colors duration-200",
            "hover:bg-slate-950 hover:text-white",
          )}
        >
          <span>Start a Project</span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </nav>
    </header>
  );
}
