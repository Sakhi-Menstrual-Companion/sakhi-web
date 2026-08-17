import type { Metadata, Viewport } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AppDownloadBand } from "@/components/ui/app-download-band";
import { DesignSystemLauncher } from "@/components/design/design-system-launcher";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { GLASS_ROOT_ID } from "@/lib/liquid-glass";

// Body: neutral, highly legible. Correct register for health copy.
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const siteUrl = "https://sakhiapp.in";

export const metadata: Metadata = {
  /* Without this, the relative opengraph-image.png / twitter-image.png routes
     resolve against http://localhost:3000 in the build and every share card
     points at a dev server. Next warns about it on every build. */
  metadataBase: new URL(siteUrl),
  title: "Sakhi - Your Health Companion",
  description:
    "Sakhi is the female health companion every Indian woman deserves. Log your health, get AI-powered insights, and share with one trusted person who cares for you.",
  keywords: ["period tracker", "menstrual health", "women's health", "PCOD", "PCOS", "India", "Sakhi"],
  openGraph: {
    title: "Sakhi - Your Health Companion",
    description:
      "A girl's health is not just her data. It is something her people want to understand, and act on.",
    type: "website",
    locale: "en_IN",
    siteName: "Sakhi",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi - Your Health Companion",
    description: "The female health companion every Indian woman deserves.",
  },
};

export const viewport: Viewport = {
  /* These track the page surface, not the navbar, which is why they did not
     move when the bar went from charcoal to light glass. */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050406" },
  ],
  colorScheme: "light",
};

/**
 * Runs before first paint, so scroll-reveal targets are hidden from the very
 * first frame rather than flashing in and back out at hydration.
 *
 * It is also the switch that makes the reveal safe: the CSS that hides those
 * blocks is scoped to `.js-reveal`, so a browser with JS disabled never hides
 * anything and reads the page as plain server-rendered HTML.
 */
const revealBootstrap = `document.documentElement.classList.add('js-reveal')`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning below because revealBootstrap deliberately adds
  // `js-reveal` to <html> before React hydrates, so the class attribute is
  // always expected to differ from the server HTML. It covers only that one
  // element's own attributes, not the tree under it, so a genuine mismatch
  // anywhere else is still reported.
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        data-scroll-behavior="smooth"
        className={`${lato.variable} ${body.variable} h-full antialiased`}
      >
        <head>
          <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
          {/* Site-wide entity markup. Per-page schema (SoftwareApplication,
              ItemList, breadcrumbs) lives on the pages it describes instead
              of here, so this stays the two facts true on every route:
              Sakhi the organisation, and this site as a WebSite. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </head>
        <body className="flex min-h-full flex-col bg-background-shell font-sans">
          {/* The sampling root for the navbar's liquid-glass shader. It exists
              purely because LiquidGlass never captures its own root element,
              only that root's children, and it requires the glass element to
              be one of those children — so the bar and the page it refracts
              have to be siblings inside a wrapper. It carries the flex column
              that used to sit on <body> alone so the sticky footer still
              works. Removing the effect means removing this div too. */}
          <div id={GLASS_ROOT_ID} className="flex min-h-full flex-1 flex-col">
            <a
              href="#main"
              className="sr-only rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200"
            >
              Skip to content
            </a>
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <AppDownloadBand />
            <Footer />
            <DesignSystemLauncher />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
