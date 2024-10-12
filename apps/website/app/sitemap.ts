import { navItems } from "./components/nav";
import type { MetadataRoute } from "next";

export const baseUrl = "https://mellevanderlinde.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const items = { "/": "Home", ...navItems };
  const routes = Object.entries(items).map(([path]) => path);
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
