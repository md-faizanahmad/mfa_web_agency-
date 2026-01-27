// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { navItems } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agency.mdfaizanahmad.in"; // Replace with your actual domain

  // 1. Map main navigation pages
  const mainPages = navItems
    .filter((item) => item.href.startsWith("/"))
    .map((item) => ({
      url: `${baseUrl}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8,
    }));

  // 2. Map individual work/portfolio items if they have their own pages

  return [...mainPages];
  // If you create dynamic pages for work later, use: return [...mainPages, ...workPages];
}
