import { navItems } from "./components/nav";
import type { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";

export const baseUrl = "https://mellevanderlinde.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts().reduce(
    (acc, post) => {
      acc[`/blog/${post.slug}`] = post.metadata.title;
      return acc;
    },
    {} as { [key: string]: string },
  );

  const items = { "/": "Home", ...navItems, ...blogPosts };
  const routes = Object.entries(items).map(([path]) => path);

  const date = new Date();
  date.setHours(12);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
  }));
}
