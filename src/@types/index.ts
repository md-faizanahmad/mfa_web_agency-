export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  desc: string;
  iconName: "Zap" | "Activity" | "TrendingUp" | "ShieldCheck";
}
