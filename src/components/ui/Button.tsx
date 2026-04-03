// components/ui/Button.tsx

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 text-sm font-medium transition-all duration-300
        ${
          variant === "primary"
            ? "bg-black text-white hover:bg-gray-800"
            : "border border-gray-300 hover:border-black"
        }`}
    >
      {children}
    </Link>
  );
}
