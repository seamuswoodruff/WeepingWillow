import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Honeysuckle — Weeping Willow Co.",
    template: "%s | Honeysuckle",
  },
  description:
    "Honeysuckle is a premium non-alcoholic cocktail by Weeping Willow Co. — crafted with ginger, honey, lemon, and gentian bitters for a sophisticated, complex flavor.",
  keywords: ["mocktail", "non-alcoholic", "honeysuckle", "premium", "craft beverage", "sober curious"],
  openGraph: {
    title: "Honeysuckle — Weeping Willow Co.",
    description:
      "A premium non-alcoholic cocktail. Complex. Botanical. Unforgettable.",
    siteName: "Weeping Willow Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honeysuckle — Weeping Willow Co.",
    description: "A premium non-alcoholic cocktail. Complex. Botanical. Unforgettable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
