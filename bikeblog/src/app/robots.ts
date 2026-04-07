import type { MetadataRoute } from "next";
import { getCityConfig } from "@/config/cities";

export default function robots(): MetadataRoute.Robots {
  const city = getCityConfig("groningen");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${city.siteUrl}/sitemap.xml`,
    host: city.siteUrl,
  };
}
