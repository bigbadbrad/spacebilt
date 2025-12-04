// /app/page.tsx
import React from "react";
import dynamic from 'next/dynamic';
import { Metadata } from "next";
import { HomeHero } from "../components/home/home-hero";
import { HomeHeroMoney } from "../components/home/home-hero-money";
import {
  Proven, Rugged, What, WhyOrbitalDataStack, OuterEdge, HowYouBuild, OrbitalAIFactorySpecs, WhoNeedsOrbitalDataStack, Big
} from "@/components/home/home-sections";
import { Signals } from "../components/home/home-signals";
import { HomeCompare } from "../components/home/home-compare";
import { HomePricing } from "../components/home/home-pricing";

export const metadata: Metadata = {
  title: "SpaceBilt – We build the data centers that live in space.",
  description: "SpaceBilt – We build the data centers that live in space.",
  keywords: ["SpaceBilt", ],
  openGraph: {
    title: "SpaceBilt – We build the data centers that live in space.",
    description: "SpaceBilt – We build the data centers that live in space.",
    url: "https://orbitalaifactory.com",
    siteName: "SpaceBilt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SpaceBilt – We build the data centers that live in space.",
    description: "SpaceBilt – We build the data centers that live in space.",
    site: "@spacebilt",
    creator: "@spacebilt",
    images: ["https://orbitalaifactory.com/icon"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpaceBilt",
  sameAs: [
    "https://orbitalaifactory.com",
    "https://twitter.com/spacebilt",
    "https://facebook.com/spacebilt"
  ],
  image: "/logo192.png",
  description: "SpaceBilt – We build the data centers that live in space.",
};

export default function Page() {
  
  return (
    <>
      {/* <HomeHero /> */}
      <HomeHeroMoney />
      <What />
      <WhyOrbitalDataStack />
      <OuterEdge />
      <HowYouBuild />
      {/* <OrbitalAIFactorySpecs /> */}
      <WhoNeedsOrbitalDataStack />
      <Signals />
      <Big />
      {/* <Rugged /> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
