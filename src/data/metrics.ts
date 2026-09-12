// src/data/metrics.ts

import { MetricItem } from "@/@types";

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: 100,
    suffix: "%",
    label: "Search Visibility",
    desc: "Built so search engines can easily find, understand, and show your website.",
    iconName: "Search",
    accentColor: "cobalt",
  },

  {
    id: "m2",
    value: 99.9,
    suffix: "%",
    label: "Works on Every Screen",
    desc: "A smooth experience for customers using phones, tablets, or computers.",
    iconName: "Smartphone",
    accentColor: "emerald",
  },

  {
    id: "m3",
    value: 0.4,
    suffix: "s",
    label: "Fast Page Speed",
    desc: "Pages load quickly so visitors spend less time waiting and more time exploring.",
    iconName: "Zap",
    accentColor: "rose",
  },

  {
    id: "m4",
    value: 24,
    suffix: "/7",
    label: "Always Online",
    desc: "Your website stays available for customers, enquiries, and sales around the clock.",
    iconName: "Clock",
    accentColor: "amber",
  },
];
