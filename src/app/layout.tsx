import type { Metadata, Viewport } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "Sakhi, Your Health Companion",
  description:
    "Sakhi is the female health companion every Indian woman deserves. Log your health, get AI-powered insights, and share with one trusted person who cares for you.",
  keywords: ["period tracker", "menstrual health", "women's health", "PCOD", "PCOS", "India", "Sakhi"],
  openGraph: {
    title: "Sakhi, Your Health Companion",
    description:
      "A girl's health is not just her data. It is something her people want to understand, and act on.",
    type: "website",
    locale: "en_IN",
    siteName: "Sakhi",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi, Your Health Companion",
    description: "The female health companion every Indian woman deserves.",
  },
};

export const viewport: Viewport = {
  /* The navbar is a translucent dark pill over a white page, so the two
     schemes want different browser chrome behind it. */
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
  return (
    <html lang="en" className={`${lato.variable} ${body.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body className="flex min-h-full flex-col bg-background-shell font-sans">
        <a
          href="#main"
          className="sr-only rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
