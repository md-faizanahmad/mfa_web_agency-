import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileContactStrip from "@/shared/MobileContactStrip";

interface NavItem {
  name: string;
  href: string;
}

interface MobileHeaderProps {
  items: NavItem[];
  pathname: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function MobileHeader({
  items,
  pathname,
  isOpen,
  onOpen,
  onClose,
}: MobileHeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-120 md:hidden bg-white">
        <nav
          aria-label="Mobile navigation"
          className="px-5 h-16 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="WebGrowth Studio home"
            className="relative z-130 flex items-center h-8 transition-opacity hover:opacity-80"
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

          {/* Menu Button */}
          <button
            type="button"
            onClick={isOpen ? onClose : onOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={cn(
              "relative z-130 w-10 h-10 cursor-pointer",
              "bg-white/80 backdrop-blur-md rounded-sm",
              "flex flex-col items-center justify-center gap-1.5",
              "transition-all duration-300",
              "hover:bg-white",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "block w-6 h-0.5 bg-[#036AF1] origin-center",
                "transition-transform duration-300",
                isOpen && "translate-y-2 rotate-45",
              )}
            />

            <span
              aria-hidden="true"
              className={cn(
                "block w-4 h-0.5 bg-[#0ABE96]",
                "transition-all duration-200",
                isOpen && "opacity-0 -translate-x-2",
              )}
            />

            <span
              aria-hidden="true"
              className={cn(
                "block w-6 h-0.5 bg-[#F75122] origin-center",
                "transition-transform duration-300",
                isOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        aria-hidden={!isOpen}
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-110 md:hidden",
          "bg-slate-950/20 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none",
        )}
      />

      {/* Mobile Menu */}
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 z-115 h-full w-[88%] md:hidden",
          "bg-white flex flex-col",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <nav aria-label="Mobile main navigation">
            <ul className="flex flex-col gap-6">
              {items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between group",
                        "text-xl font-semibold tracking-tight",
                        "transition-colors duration-300",
                        isActive
                          ? "text-black"
                          : "text-black/40 hover:text-black",
                      )}
                    >
                      <span>{item.name}</span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "transition-all duration-300",
                          "opacity-0 -translate-x-2",
                          "group-hover:opacity-100 group-hover:translate-x-0",
                        )}
                      >
                        ↗
                      </span>
                    </Link>

                    <div aria-hidden="true" className="mt-4 h-px bg-black/5" />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pb-8">
          <MobileContactStrip />

          <Link
            href="/project-request"
            onClick={onClose}
            aria-label="Start a new project"
            className={cn(
              "w-full flex items-center justify-center gap-2",
              "border border-black text-black py-4",
              "text-xs font-semibold tracking-widest uppercase",
              "transition-all duration-300",
              "hover:bg-black hover:text-white",
            )}
          >
            Start Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </>
  );
}
