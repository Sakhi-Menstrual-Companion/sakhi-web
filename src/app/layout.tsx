import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakhi — Your Health Companion",
  description:
    "Sakhi is the female health companion every Indian woman deserves. Log your health, get AI-powered insights, and share with one trusted person who cares for you.",
  keywords: ["period tracker", "menstrual health", "women's health", "PCOD", "PCOS", "India", "Sakhi"],
  openGraph: {
    title: "Sakhi — Your Health Companion",
    description:
      "A girl's health is not just her data. It is something her people want to understand, and act on.",
    type: "website",
    locale: "en_IN",
    siteName: "Sakhi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi — Your Health Companion",
    description: "The female health companion every Indian woman deserves.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8F2F4] font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
