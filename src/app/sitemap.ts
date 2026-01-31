import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agency.mdfaizanahmad.in";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ui-ux`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/maintenance`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/hosting-domain`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faqs`,
      changeFrequency: "weekly",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: "weekly",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      lastModified: now,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "weekly",
      lastModified: now,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "weekly",
      lastModified: now,
      priority: 0.9,
    },
  ];
}
