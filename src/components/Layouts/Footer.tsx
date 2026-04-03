// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Terminal, Instagram, Facebook, Youtube, Mail } from "lucide-react";

import FooterVideo from "./FooterVideo";
import { FooterColumn } from "./FooterElement";

export default function Footer() {
  // const servicesLinks = [
  //   { label: "Website Development", href: "/services/websites" },
  //   { label: "Web Applications", href: "/services/webapps" },
  //   { label: "UI Engineering", href: "/services/ui-engineering" },
  //   { label: "Performance Optimization", href: "/services/performance" },
  // ];
  const servicesLinks = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "E-commerce Plateform", href: "/services/ecommerce" },
    { label: "SEO Audit", href: "/services/seo" },
    { label: "Paid Ads (Meta & Google)", href: "/services/ads" },
    // { label: "Performance Optimization", href: "/services/performance" },
    { label: "Web App Maintenance", href: "/services/maintenance" },
    { label: "Hosting & Domain", href: "/services/hosting-domain" },
  ];
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/project-request" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const contactLinks = [
    { label: "Email", href: "mailto:md.faizan.ahmad.web@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/917563092029" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/webgrowth_studio",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/webgrowthstudio",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@tech_x_craft",
    },
  ];

  return (
    <footer className="relative bg-brand-midnight pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <FooterVideo />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:border-brand-cobalt transition-colors">
                <Image
                  src="/brand.png"
                  alt="WebGrowth Studio"
                  width={28}
                  height={28}
                  className="object-contain rounded-full"
                />
              </div>

              <span className="text-xl font-black uppercase tracking-tight text-white">
                WebGrowth Studio
              </span>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We build high-performance websites and growth systems. WebGrowth
              Studio helps businesses across India improve their online presence
              through websites, SEO, and paid ads.
            </p>
            <p className="text-xs text-brand-cobalt pt-2">
              Get a free growth audit → See how your business can grow online
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="p-2 border border-white/10 hover:border-brand-cobalt transition-colors"
                >
                  <Icon size={16} className="text-white/70" />
                </Link>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            <FooterColumn title="Services" links={servicesLinks} />

            <FooterColumn title="Company" links={companyLinks} />

            <FooterColumn title="Legal" links={legalLinks} />

            <FooterColumn title="Contact" links={contactLinks} />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Terminal size={12} className="text-brand-cobalt" />
            <p className="text-xs uppercase tracking-widest text-white/40">
              © {new Date().getFullYear()} WebGrowth Studio
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/40">
            <Mail size={12} />
            md.faizan.ahmad.web@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
