// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private/"], // Disallow any private paths
    },
    sitemap: "https://agency.mdfaizanahmad.in/sitemap.xml",
  };
}
