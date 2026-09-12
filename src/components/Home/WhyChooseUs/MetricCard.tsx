import { MetricItem } from "@/@types";
import { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";

export default function MetricCard({
  metric,
  Icon,
  index,
}: {
  metric: MetricItem;
  Icon: Icons.LucideIcon;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const target = Number(metric.value);
        const duration = 1200;
        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(target * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [metric.value]);

  const decimals = Number.isInteger(Number(metric.value)) ? 0 : 1;

  return (
    <article
      ref={cardRef}
      className="
    group sticky top-20
    flex min-h-45 cursor-pointer flex-col justify-between
    overflow-hidden border border-slate-200 bg-white p-6
    transition-colors duration-300
    hover:border-slate-300

    sm:relative
  "
      style={{
        zIndex: index + 1,
      }}
    >
      {/* Card Number */}
      <span
        aria-hidden="true"
        className="
          absolute right-5 top-5
          text-[10px] font-semibold tracking-[0.18em]
          text-slate-300
          transition-colors duration-300
          group-hover:text-[#036AF1]
        "
      >
        0{index + 1}
      </span>

      {/* Background Icon */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-8 -right-6 z-0
          text-slate-100
          transition-all duration-500
          group-hover:scale-105
          group-hover:text-[#036AF1]/10
        "
      >
        <Icon size={140} strokeWidth={1} />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Value */}
        <div
          className="
            flex items-baseline
            text-2xl font-extrabold tracking-tight text-slate-900
            md:text-3xl
          "
        >
          {count.toFixed(decimals)}

          <span
            className="
              ml-0.5 text-sm font-bold tracking-normal
              text-slate-400
              transition-colors duration-300
              group-hover:text-[#036AF1]
            "
          >
            {metric.suffix}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            {metric.label}
          </h3>

          <p className="text-xs leading-relaxed text-slate-500">
            {metric.desc}
          </p>
        </div>
      </div>

      {/* Brand Accent */}
      <div
        aria-hidden="true"
        className="
          relative z-10 mt-5 flex h-0.5 w-full
          overflow-hidden bg-slate-100
        "
      >
        <span className="h-full w-1/3 origin-left scale-x-0 bg-[#036AF1] transition-transform duration-300 group-hover:scale-x-100" />

        <span className="h-full w-1/3 origin-left scale-x-0 bg-[#0ABE96] transition-transform delay-75 duration-300 group-hover:scale-x-100" />

        <span className="h-full w-1/3 origin-left scale-x-0 bg-[#F75122] transition-transform delay-150 duration-300 group-hover:scale-x-100" />
      </div>
    </article>
  );
}
