// /components/home/home-page-content.tsx
import React from "react";
import { HomeHeroMoney } from "./home-hero-money";
import {
  Proven, Rugged, What, WhyOrbitalDataStack, OuterEdge, HowYouBuild, OrbitalAIFactorySpecs, FourPhaseScalingPath, WhoNeedsOrbitalDataStack, PayloadAsAService, Big
} from "@/components/home/home-sections";
import { Signals } from "./home-signals";
import { InvestmentIndex } from "./home-investment-index";
import { HomeCompare } from "./home-compare";
import { HomePricing } from "./home-pricing";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";

interface HomePageContentProps {
  companyName: string;
}

export function HomePageContent({ companyName }: HomePageContentProps) {
  return (
    <>
      {/* <HomeHero /> */}
      <HomeHeroMoney companyName={companyName} />
      <What companyName={companyName} />
      <WhyOrbitalDataStack companyName={companyName} />
      <OuterEdge companyName={companyName} />
      <HowYouBuild companyName={companyName} />
      <OrbitalAIFactorySpecs companyName={companyName} />
      <FourPhaseScalingPath companyName={companyName} />
      <WhoNeedsOrbitalDataStack companyName={companyName} />
      <PayloadAsAService companyName={companyName} />
      <Signals companyName={companyName} />
      <Big companyName={companyName} />
      <InvestmentIndex companyName={companyName} />
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
    </>
  );
}
