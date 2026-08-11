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
};

export default nextConfig;
