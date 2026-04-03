// components/ui/Heading.tsx

type Props = {
  children: React.ReactNode;
  size?: "lg" | "xl";
};

export function Heading({ children, size = "xl" }: Props) {
  return (
    <h2
      className={`font-semibold tracking-tight ${
        size === "xl" ? "text-4xl md:text-6xl" : "text-3xl"
      }`}
    >
      {children}
    </h2>
  );
}
