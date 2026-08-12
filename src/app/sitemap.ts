import type { MetadataRoute } from "next";

const siteUrl = "https://sakhiapp.in";

/**
 * Every real, indexable route on the site. /design-system is deliberately
 * left out here, the same way it's marked `robots: { index: false }` on its
 * own page, it's an internal build tool, not a page for search results.
 *
 * lastModified is set to build time rather than a per-page git timestamp:
 * the content on every route changes together often enough (shared
 * components, shared copy passes) that a single build-time stamp is more
 * honest than a stale hardcoded date would be.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/product", priority: 0.9, changeFrequency: "weekly" },
    { path: "/health", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
