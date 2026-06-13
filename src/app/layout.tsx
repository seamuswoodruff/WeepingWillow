import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drinkhoneysuckle.com'),
  title: {
    default: "Honeysuckle — Weeping Willow Co.",
    template: "%s | Weeping Willow Co.",
  },
  description:
    "Honeysuckle is a premium non-alcoholic cocktail by Weeping Willow Co. — crafted with ginger, honey, lemon, and gentian bitters for a sophisticated, complex flavor.",
  openGraph: {
    title: "Honeysuckle — Weeping Willow Co.",
    description: "A premium non-alcoholic cocktail. Complex. Botanical. Unforgettable.",
    siteName: "Weeping Willow Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Honeysuckle — Premium Non-Alcoholic Cocktail by Weeping Willow Co.',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honeysuckle — Weeping Willow Co.",
    description: "A premium non-alcoholic cocktail. Complex. Botanical. Unforgettable.",
    images: ['/images/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/willow-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Weeping Willow Co.",
  "url": "https://www.drinkhoneysuckle.com",
  "logo": "https://www.drinkhoneysuckle.com/images/willow-icon.svg",
  "description": "Weeping Willow Co. makes Honeysuckle, a premium non-alcoholic cocktail crafted with honey, lemon, ginger, and gentian bitters.",
  "foundingDate": "2024",
  "founders": [
    { "@type": "Person", "name": "Aidan Stark-Chessa" },
    { "@type": "Person", "name": "Seamus Woodruff" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Portland",
    "addressRegion": "ME",
    "addressCountry": "US"
  },
  "sameAs": []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
