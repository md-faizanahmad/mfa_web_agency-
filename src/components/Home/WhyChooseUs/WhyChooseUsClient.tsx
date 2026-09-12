"use client";

import * as Icons from "lucide-react";
import { MetricItem } from "@/@types";
import MetricCard from "./MetricCard";

export default function WhyChooseUsClient({
  metrics,
}: {
  metrics: MetricItem[];
}) {
  return (
    <>
      {/* Mobile Sticky Stack */}
      <div className="sm:hidden">
        {metrics.map((metric, index) => {
          const Icon = Icons[metric.iconName] as Icons.LucideIcon;

          return (
            <div key={metric.id} className="relative h-[85vh]">
              <MetricCard metric={metric} Icon={Icon} index={index} />
            </div>
          );
        })}
      </div>

      {/* Desktop */}
      <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = Icons[metric.iconName] as Icons.LucideIcon;

          return (
            <MetricCard
              key={metric.id}
              metric={metric}
              Icon={Icon}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}
