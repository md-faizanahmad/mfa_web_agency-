// components/layout/SectionWrapper.tsx

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className }: Props) {
  return <section className={`py-28 ${className || ""}`}>{children}</section>;
}
