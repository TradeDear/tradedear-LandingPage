'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TradingCategories from "@/components/TradingCategories";
import TrustedPlatforms from "@/components/TrustedPlatforms";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <TrustedPlatforms /> */}
        <Stats />
        <TradingCategories />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
