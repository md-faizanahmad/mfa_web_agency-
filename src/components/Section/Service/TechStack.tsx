// src/components/sections/services/TechStackServer.tsx
import { TechItem } from "@/@types";
import TechStackClient from "./TechStackClient";

export const stackData: TechItem[] = [
  {
    id: "html",
    name: "Modern Web",
    category: "Structure",
    benefit: "Clean, readable site layouts",
    iconName: "Layout",
  },
  {
    id: "react",
    name: "Interactive UI",
    category: "Experience",
    benefit: "Smooth, app-like interactions",
    iconName: "Globe",
  },
  {
    id: "next",
    name: "SEO Growth",
    category: "Strategy",
    benefit: "Built-in search engine dominance",
    iconName: "Search",
  },
  {
    id: "php",
    name: "Server Power",
    category: "Backend",
    benefit: "Reliable data processing",
    iconName: "Server",
  },
  {
    id: "db",
    name: "Secure Storage",
    category: "Database",
    benefit: "Safe MySQL & NoSQL handling",
    iconName: "Database",
  },
  {
    id: "security",
    name: "Hardened Core",
    category: "Security",
    benefit: "Safe against modern threats",
    iconName: "Shield",
  },
];

export default function TechStackServer() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              Core <br />
              <span className="text-sky-400 italic">Capabilities.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm border-l-2 border-sky-400/30 pl-6 text-sm">
            We use a refined selection of modern tools to ensure your business
            system is fast, secure, and easy for your customers to use.
          </p>
        </div>

        <TechStackClient stack={stackData} />
      </div>
    </section>
  );
}
