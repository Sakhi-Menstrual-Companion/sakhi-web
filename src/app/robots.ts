import type { MetadataRoute } from "next";

const siteUrl = "https://sakhiapp.in";

/**
 * /design-system is disallowed here as well as marked noindex on the page
 * itself, belt and braces: robots.txt keeps well-behaved crawlers from
 * spending crawl budget on it at all, the page-level noindex is the
 * fallback for anything that fetches it anyway (or already has it indexed
 * from before this file existed).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
