// Minimal Premium Footer

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-midnight border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
        {/* Left */}
        <p>© {new Date().getFullYear()} MFA Agency. All rights reserved.</p>

        {/* Center */}
        <div className="flex items-center gap-3 text-white">
          <Image
            src="/brand_logo.png"
            alt="MFA Agency Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-medium tracking-wide">MFA Agency</span>
        </div>

        {/* Right */}
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
