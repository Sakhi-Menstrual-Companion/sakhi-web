import type { MetadataRoute } from "next";

const siteUrl = "https://sakhiapp.in";

/**
 * /design-system is disallowed here as well as marked noindex on the page
 * itself, belt and braces: robots.txt keeps well-behaved crawlers from
 * spending crawl budget on it at all, the page-level noindex is the
 * fallback for anything that fetches it anyway (or already has it indexed
 * from before this file existed).
 *
 * /about is unlisted for now and gets the same pair. Worth knowing if that
 * ever changes while the site is live: disallowing a URL stops the crawler
 * fetching it, which also stops it reading the noindex. For a page already
 * in the index that combination can strand it there as a bare URL, and the
 * order has to be noindex first, disallow only once it has dropped out.
 * That is not the situation here — the domain is not serving yet, so there
 * is nothing indexed to strand.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system", "/about"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
