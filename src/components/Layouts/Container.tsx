// components/layout/Container.tsx

type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
}
