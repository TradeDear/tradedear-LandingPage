import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./App.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tradedear.com"),
  title: {
    default: "TradeDear",
    template: "%s | TradeDear",
  },
  description: "Trade Crypto & Forex with Confidence.",
  keywords: [
    "best crypto broker",
    "crypto trading",
    "forex trading",
    "intraday trading",
    "trade crypto",
    "trade forex",
    "low margin broker",
    "fast execution trading",
    "live charts",
    "TradeDear",
  ],
  authors: [{ name: "TradeDear" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://tradedear.com",
    title: "TradeDear",
    description: "Trade Crypto & Forex with Confidence.",
    siteName: "TradeDear",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TradeDear Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "TradeDear",
    description: "Trade Crypto & Forex with Confidence.",
    images: ["/logo.png"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tradedear.com/#organization",
    name: "TradeDear",
    url: "https://tradedear.com/",
    logo: "https://tradedear.com/Tradedear-logo.png",
    slogan: "Trade Crypto & Forex with Confidence.",
    sameAs: [
      // ✅ Social links add karna optional
      // "https://twitter.com/...",
      // "https://www.linkedin.com/company/..."
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tradedear.com/#website",
    url: "https://tradedear.com/",
    name: "TradeDear",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tradedear.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
