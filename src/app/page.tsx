// /app/page.tsx
import React from "react";
import dynamic from 'next/dynamic';
import { Metadata } from "next";
import { HomeHero } from "../components/home/home-hero";
import {
  Proven, Rugged, What, WhyOrbitalDataStack, OuterEdge, WhoNeedsOrbitalDataStack, Big
} from "@/components/home/home-sections";
import { HomeCompare } from "../components/home/home-compare";
import { HomePricing } from "../components/home/home-pricing";

export const metadata: Metadata = {
  title: "SpaceBilt – We build the data centers that live in space.",
  description: "SpaceBilt – We build the data centers that live in space.",
  keywords: ["SpaceBilt", ],
  openGraph: {
    title: "SpaceBilt – We build the data centers that live in space.",
    description: "SpaceBilt – We build the data centers that live in space.",
    url: "https://www.spacebilt.co",
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
    images: ["https://spacebilt.co/icon"],
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
    "https://spacebilt.co",
    "https://twitter.com/spacebilt",
    "https://facebook.com/spacebilt"
  ],
  image: "/logo192.png",
  description: "SpaceBilt – We build the data centers that live in space.",
};

export default function Page() {
  
  return (
    <>
      <HomeHero />
      <What />
      <WhyOrbitalDataStack />
      <OuterEdge />
      <WhoNeedsOrbitalDataStack />
      <Big />
      {/* <Rugged /> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
