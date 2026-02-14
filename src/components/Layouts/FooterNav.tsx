import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

export default function FooterNav({
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
      <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6">
        {title}
      </h4>

      <ul className="space-y-4 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
