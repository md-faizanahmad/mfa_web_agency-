// src/data/metrics.ts

import { MetricItem } from "@/@types";

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: 100,
    suffix: "%",
    label: "Google_Indexing",
    desc: "Surgical SEO architecture ensuring 100% crawlability for search engine robots.",
    iconName: "Search",
    accentColor: "cobalt",
  },
  {
    id: "m2",
    value: 99.9,
    suffix: "%",
    label: "Responsive_Node",
    desc: "Adaptive UI systems that maintain 99.9% layout integrity on all mobile devices.",
    iconName: "Smartphone",
    accentColor: "emerald",
  },
  {
    id: "m3",
    value: 0.4,
    suffix: "s",
    label: "System_Velocity",
    desc: "Ultra-low latency loading speeds powered by Next.js Edge infrastructure.",
    iconName: "Zap",
    accentColor: "rose",
  },
  {
    id: "m4",
    value: 24,
    suffix: "/7",
    label: "Support_Architecture",
    desc: "Continuous technical monitoring and structured post-launch optimization.",
    iconName: "Clock",
    accentColor: "amber",
  },
];
