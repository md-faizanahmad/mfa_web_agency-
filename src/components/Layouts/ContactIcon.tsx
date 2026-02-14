export default function ContactIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-md bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      {children}
    </a>
  );
}
