// src/components/layout/Footer.tsx
import Link from "next/link";
import { FooterInteraction } from "./FooterInteraction";

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white pt-20 pb-28 md:pb-12 border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter mb-4 block"
            >
              MFA<span className="text-brand-cobalt">.</span>
            </Link>
            <p className="text-blue-100/60 text-sm leading-relaxed">
              Engineering high-performance digital systems for the next
              generation of industry leaders.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/50">
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/services">Web Systems</Link>
              </li>
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/services">SEO Strategy</Link>
              </li>
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/services">Cloud Hosting</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/50">
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/work">Case Studies</Link>
              </li>
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/process">Our Method</Link>
              </li>
              <li className="hover:text-brand-cobalt transition-colors">
                <Link href="/contact">Get in Touch</Link>
              </li>
            </ul>
          </div>

          <FooterInteraction />
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/30">
          <p>© {new Date().getFullYear()} MFA. Built for Performance.</p>
          <div className="flex gap-6">
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
