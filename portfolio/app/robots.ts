import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*" }],
    sitemap: "https://mellevanderlinde.com/sitemap.xml",
    host: "https://mellevanderlinde.com",
  };
}
