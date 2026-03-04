// src/components/layout/footer/FooterElements.tsx
import { FooterColumnProps, StatusTagProps } from "@/@types/footer";
import Link from "next/link";

export function StatusTag({ icon: Icon, label }: StatusTagProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10">
      <Icon size={12} className="text-brand-cobalt" />
      <span className="text-[9px] font-black uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm font-bold text-white/60 hover:text-brand-cobalt transition-colors uppercase tracking-tighter"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
