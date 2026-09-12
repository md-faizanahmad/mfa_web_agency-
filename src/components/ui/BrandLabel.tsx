interface BrandLabelProps {
  children: React.ReactNode;
}

export default function BrandLabel({ children }: BrandLabelProps) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">
      <span
        aria-hidden="true"
        className="relative flex h-0.5 w-12 overflow-hidden bg-slate-200"
      >
        <span className="absolute inset-0 origin-left animate-[brandFill_2.4s_ease-in-out_infinite]">
          <span className="absolute inset-y-0 left-0 w-1/3 bg-[#036AF1]" />
          <span className="absolute inset-y-0 left-1/3 w-1/3 bg-[#0ABE96]" />
          <span className="absolute inset-y-0 right-0 w-1/3 bg-[#F75122]" />
        </span>
      </span>

      {children}
    </div>
  );
}
