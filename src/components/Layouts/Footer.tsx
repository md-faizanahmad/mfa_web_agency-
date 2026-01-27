// src/components/layout/Footer.tsx
import Link from "next/link";
import { FooterInteraction } from "./FooterInteraction";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { technicalSolutions, companyLinks } from "@/data/services";

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand & Contact Hub */}
          <div className="md:col-span-4 space-y-8">
            <header>
              <Link
                href="/"
                aria-label="MFA Home"
                className="text-3xl font-black tracking-tighter block uppercase"
              >
                MFA<span className="text-sky-400">.</span>
              </Link>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
                We build fast websites and custom Next.js systems. Our goal is
                to grow your business with speed and SEO.
              </p>
            </header>

            <address className="not-italic space-y-4">
              <ContactLink
                href="mailto:md.faizan.ahmad.web@gmail.com"
                icon={<Mail size={16} />}
              >
                md.faizan.ahmad.web@gmail.com
              </ContactLink>
              <ContactLink href="tel:+917563092029" icon={<Phone size={16} />}>
                +91 7563092029
              </ContactLink>
              <ContactLink
                href="https://wa.me/+917563092029"
                icon={<MessageCircle size={16} />}
                className="hover:text-emerald-400"
                iconBg="group-hover:bg-emerald-500/10 text-emerald-500"
              >
                WhatsApp Specialist
              </ContactLink>
            </address>

            {/* <nav aria-label="Social Media" className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 rounded-full border border-white/10 text-slate-400 hover:border-sky-400 hover:text-sky-400 transition-all bg-white/5"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </nav> */}
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
            className="md:col-span-2"
          />

          {/* Newsletter */}
          <div className="md:col-span-3">
            <FooterInteraction />
          </div>
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
 */
function FooterNav({
  title,
  links,
  className,
}: {
  title: string;
  links: any[];
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

function ContactLink({
  href,
  icon,
  children,
  className = "hover:text-sky-400",
  iconBg = "group-hover:bg-sky-400/10",
}: any) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 text-sm font-bold text-slate-400 transition-all group ${className}`}
    >
      <div className={`p-2 rounded-lg bg-white/5 transition-colors ${iconBg}`}>
        {icon}
      </div>
      {children}
    </a>
  );
}
