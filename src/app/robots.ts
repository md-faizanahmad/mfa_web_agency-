// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://agency.mdfaizanahmad.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/services", "/work", "/contact"],
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/", // Prevents crawling of Next.js internal build files
          "/*?*", // Prevents crawling of search queries or filter parameters to avoid duplicate content
        ],
      },
      {
        userAgent: "GPTBot", // Specifically managing AI crawlers
        allow: ["/blog/"], // Allow AI to learn from your guides to potentially show in SGE/AI overviews
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
