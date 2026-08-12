const siteUrl = "https://sakhiapp.in";

/**
 * Schema.org JSON-LD, site-wide and per-page. Every field here is something
 * verifiable from the live site or the App Store listing, nothing invented
 * for the sake of a richer snippet. In particular: no aggregateRating or
 * review block on the SoftwareApplication entry, because no verified App
 * Store rating figure exists yet (checked against 01-HQ, it's an unfilled
 * "[FILL]" placeholder as of this writing). Add it the day a real number
 * does, not before, Google penalises fabricated review markup and a wrong
 * one is worse than none.
 */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sakhi",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "Sakhi is a free period tracker and health companion app built for Indian women, covering cycle tracking, symptom logging, AI-powered insights and 16 researched health conditions.",
  email: "contact@sakhiapp.in",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sakhi",
  url: siteUrl,
  inLanguage: "en-IN",
};

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Sakhi",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  description:
    "A free period tracker and health companion for Indian women. Cycle tracking, symptom logging, Sakhi AI, a doctor-ready health report, and Be Her Sakhi consent-based sharing with one trusted person.",
  url: `${siteUrl}/product`,
  downloadUrl: "https://apps.apple.com/app/id6742219623",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
};

/**
 * One ItemList entry per condition group shown on /health, matching exactly
 * what's rendered on the page (same names, same order the visible copy
 * uses). This describes the page's own content, it is not a medical claim
 * about the conditions themselves, so it doesn't need the citation-per-stat
 * treatment the prose on that page already carries.
 */
export function healthLibraryJsonLd(conditionNames: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sakhi Health Library",
    description: "16 health conditions Sakhi helps women understand, covered on the Sakhi Health Library page.",
    url: `${siteUrl}/health`,
    numberOfItems: conditionNames.length,
    itemListElement: conditionNames.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
