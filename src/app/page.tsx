// /app/page.tsx
import React from "react";
import dynamic from 'next/dynamic';
import { Metadata } from "next";
import { HomeHero } from "../components/home/home-hero";
import { HomeHeroMoney } from "../components/home/home-hero-money";
import {
  Proven, Rugged, What, WhyOrbitalDataStack, OuterEdge, HowYouBuild, OrbitalAIFactorySpecs, FourPhaseScalingPath, WhoNeedsOrbitalDataStack, Big
} from "@/components/home/home-sections";
import { Signals } from "../components/home/home-signals";
import { InvestmentIndex } from "../components/home/home-investment-index";
import { HomeCompare } from "../components/home/home-compare";
import { HomePricing } from "../components/home/home-pricing";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";

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
    site: "@orbitalfactory",
    creator: "@orbitalfactory",
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
      <OrbitalAIFactorySpecs />
      <FourPhaseScalingPath />
      <WhoNeedsOrbitalDataStack />
      <Signals />
      <Big />
      <InvestmentIndex />
      {/* Link to Orbital Data Center page */}
      <Box
        sx={{
          backgroundColor: '#000000',
          py: { xs: 6, md: 8 },
          borderTop: '1px solid #222222',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 2, fontSize: '1rem' }}
          >
            Also known as{' '}
            <Link
              href="/orbital-data-center"
              style={{
                color: '#297BC4',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              orbital data centers
            </Link>
            .
          </Typography>
        </Container>
      </Box>
      {/* <Rugged /> */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
