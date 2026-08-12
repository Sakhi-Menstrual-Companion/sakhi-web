import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
    // Next 16 refuses any quality value not explicitly listed here (400s the
    // request). 100 is the hero mockup's quality={100}; 75 is next/image's
    // own default, used everywhere else on the site.
    qualities: [75, 100],
  },

  // The nine original pages were merged into three (/product, /about,
  // /resources); /health later moved back out to its own route once its
  // sixteen conditions outgrew being a section of /product. Permanent
  // redirects rather than deleting the old routes outright: any bookmark,
  // backlink or search result still pointing at /features or /contribute
  // lands on the right content instead of a 404. Destinations carry their
  // own anchor, which wins over whatever fragment the visitor's original URL
  // had (browsers only restore the original fragment when the redirect
  // target specifies none) — acceptable here since these were internal page
  // anchors nobody linked to externally.
  async redirects() {
    return [
      { source: "/features", destination: "/product#features", permanent: true },
      { source: "/story", destination: "/about#story", permanent: true },
      { source: "/vision", destination: "/about#vision", permanent: true },
      { source: "/team", destination: "/about#people", permanent: true },
      { source: "/contributors", destination: "/about#people", permanent: true },
      { source: "/contribute", destination: "/resources#contribute", permanent: true },
      // /resources#brand no longer exists: the brand system moved out of that
      // page and /design-system is where it lives, so the old URL points there
      // rather than at an anchor that would silently land mid-page.
      { source: "/brand", destination: "/design-system", permanent: true },
      { source: "/press", destination: "/resources#press", permanent: true },
    ];
  },
};

export default nextConfig;
