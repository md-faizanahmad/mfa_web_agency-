export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  desc: string;
  iconName: "Zap" | "Activity" | "TrendingUp" | "ShieldCheck";
}
// src/types/index.ts
export interface TechItem {
  id: string;
  name: string;
  category: string;
  benefit: string; // Refactored from 'desc' to show business value
  iconName: "Globe" | "Layout" | "Database" | "Server" | "Shield" | "Search";
}
export interface Project {
  title: string;
  image: string;
  liveUrl: string;
  category: string; // "Shop", "Dashboard", "Hotel"
  benefit: string; // "Sells more", "Easy management"
}
