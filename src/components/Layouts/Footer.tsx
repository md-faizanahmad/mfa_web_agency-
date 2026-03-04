// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Shield, Globe, Terminal } from "lucide-react";
import FooterVideo from "./FooterVideo";
import { FooterColumn, StatusTag } from "./FooterElement";

export default function Footer() {
  const protocolLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  const connectLinks = [
    { label: "Contact", href: "/project-request" },
    { label: "WhatsApp", href: "https://wa.me/917563092029" },
  ];

  return (
    <footer className="relative bg-brand-midnight pt-24 pb-12 overflow-hidden border-t border-white/5">
      <FooterVideo />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Module */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="p-2 bg-white/10 backdrop-blur-md border border-white/10 group-hover:border-brand-cobalt transition-colors">
                <Image
                  src="/brand_logo.png"
                  alt="MFA Logo"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-white">
                MFA_SYSTEMS
              </span>
            </Link>

            <p className="text-white/50 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
              Deploying high-velocity digital solutions across global edge
              networks.
            </p>

            <div className="flex gap-4 pt-4">
              <StatusTag icon={Globe} label="Global_Sync" />
              <StatusTag icon={Shield} label="Secure_v3" />
            </div>
          </div>

          {/* Navigation Module */}
          <div className="lg:col-span-7 flex flex-wrap gap-x-16 gap-y-10 justify-start lg:justify-end">
            <FooterColumn title="Protocol" links={protocolLinks} />
            <FooterColumn title="Connectivity" links={connectLinks} />
          </div>
        </div>

        {/* System Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Terminal size={12} className="text-brand-cobalt" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              © {new Date().getFullYear()} MFA_AGENCY // BUILD_2.4.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
