// src/components/layout/Footer.tsx
import Link from "next/link";
import { FooterInteraction } from "./FooterInteraction";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { technicalSolutions, companyLinks } from "@/data/services";
import Image from "next/image";
import React from "react";

// const socialLinks = [
//   // { Icon: Linkedin, href: "#", label: "LinkedIn" },
//   {
//     Icon: Instagram,
//     href: "https://www.instagram.com/ahmadfaizan.log",
//     label: "Instagram",
//   },
//   // { Icon: Twitter, href: "#", label: "Twitter" },
// ];

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white pt-24 pb-32 md:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 mb-20">
          {/* Brand & Contact Hub */}
          <div className="md:col-span-4 space-y-8">
            <header>
              <Link
                href="/"
                className="relative flex items-center h-8 md:h-10 z-130 hover:opacity-80 transition-opacity"
                aria-label="MFA Home"
              >
                <span className="sr-only">
                  MFA Agency - Web Development & SEO
                </span>
                <Image
                  src="/brand_logo.png"
                  alt="MFA - High Performance Next.js Development Agency"
                  width={120} // Adjust based on your logo's actual shape
                  height={40} // Keep this small (md-size)
                  className="w-auto h-full object-contain rounded-full"
                  priority // Eager load for LCP performance
                />
              </Link>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
                We build fast websites and custom design. Our goal is to grow
                your business with speed and SEO.
              </p>
            </header>

            <address className="not-italic flex gap-4 items-center  space-y-4">
              <ContactLink
                href="mailto:md.faizan.ahmad.web@gmail.com"
                icon={<Mail size={16} />}
                className="hover:text-pink-800"
                iconBg=" text-red-400"
              ></ContactLink>
              <ContactLink
                href="tel:+917563092029"
                icon={<Phone size={16} />}
                className="hover:to-blue-400"
                iconBg=" text-blue-400"
              ></ContactLink>
              <ContactLink
                href="https://wa.me/+917563092029"
                icon={<MessageCircle size={16} />}
                className="hover:text-emerald-400"
                iconBg=" text-emerald-500 mb-3"
              ></ContactLink>
            </address>
            <address className="not-italic flex gap-4">
              <span className="text-sky-500">Available_Worldwide</span>
            </address>
          </div>

          {/* Mapped Solutions */}
          <FooterNav
            title="Technical Solutions"
            links={technicalSolutions}
            className="md:col-span-3"
          />

          {/* Mapped Company Links */}
          <FooterNav
            title="Company"
            links={companyLinks}
            className="md:col-span-3"
          />

          {/* Newsletter */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} MFA Agency. Built for speed.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** * Sub-components to keep the main Footer clean
 */ interface FooterLink {
  name: string;
  href: string;
}
function FooterNav({
  title,
  links,
  className,
}: {
  title: string;
  links: FooterLink[];
  className?: string;
}) {
  return (
    <nav className={className}>
      <h4 className="text-white font-black mb-6 text-[10px] uppercase tracking-[0.3em]">
        {title}
      </h4>
      <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-sky-400 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
interface ContactLink {
  href: string;
  // children: string;
  className: string;
  iconBg: string;
  icon: React.ReactElement;
}
function ContactLink({
  href,
  icon,
  // children,
  className = "hover:text-sky-400",
  iconBg = "group-hover:bg-sky-400/10",
}: ContactLink) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3  text-sm font-bold text-slate-400 transition-all group ${className}`}
    >
      <div className={`p-2 rounded-lg bg-white/5 transition-colors ${iconBg}`}>
        {icon}
      </div>
      {/* {children} */}
    </a>
  );
}
