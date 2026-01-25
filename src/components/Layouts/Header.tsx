// src/components/Layouts/Header.tsx
import HeaderClient from "./HeaderClient";

export const navItems = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Services", href: "/services", icon: "Layers" },
  { name: "Work", href: "/work", icon: "Briefcase" },
  { name: "About", href: "/about", icon: "User" },
  { name: "Contact", href: "/contact", icon: "MessageSquare" },
];

export default function Header() {
  return (
    <>
      {/* Semantic SEO Wrapper for Desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block border-b border-brand-midnight/5 bg-white/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <HeaderClient items={navItems} variant="desktop" />
        </nav>
      </header>

      {/* Mobile Top Branding Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-md border-b border-brand-midnight/5 px-6 h-16 flex items-center justify-between">
        <div className="font-black text-xl tracking-tighter text-brand-midnight italic">
          MFA<span className="text-brand-cobalt">.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-clip animate-pulse">
            Live_System
          </span>
          <div className="w-2 h-2 rounded-full bg-red-900 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
        </div>
      </div>

      {/* Mobile Floating Bottom Dock */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md md:hidden">
        <HeaderClient items={navItems} variant="mobile" />
      </nav>
    </>
  );
}
