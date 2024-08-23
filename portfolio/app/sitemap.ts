import { navItems } from "./components/nav";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.entries(navItems).map(([path]) => {
    return path;
  });

  return routes.map((route) => ({
    url: `https://mellevanderlinde.com${route}`,
    lastModified: new Date(),
  }));
}
