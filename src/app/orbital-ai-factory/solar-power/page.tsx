// /app/orbital-ai-factory/solar-power/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital Solar Power System – ROSA Solar Arrays & Power Conversion | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory solar power systems: ROSA-class roll-out solar arrays, 300–600 V DC bus, MPPT units, and power conversion systems.',
  keywords: ['orbital solar arrays', 'space data center power', 'ROSA solar arrays', 'orbital power systems', 'space solar power'],
  openGraph: {
    title: 'Orbital Solar Power System | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory solar power systems including ROSA-class solar arrays and power conversion.',
    url: 'https://www.orbitalaifactory.com/orbital-ai-factory/solar-power',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital Solar Power System | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory solar power systems.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://www.orbitalaifactory.com/orbital-ai-factory/solar-power',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital Solar Power System',
  description: 'Detailed specifications for Orbital AI Factory solar power systems including ROSA-class roll-out solar arrays and power conversion systems.',
  author: {
    '@type': 'Organization',
    name: 'SpaceBilt',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SpaceBilt',
  },
  datePublished: '2025-01-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.orbitalaifactory.com/orbital-ai-factory/solar-power',
  },
};

export default function PowerThermalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <Box
        sx={{
          backgroundColor: '#000000',
          minHeight: '100vh',
          pt: { xs: 10, md: 15 },
          pb: 15,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4, color: '#cccccc' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#cccccc' }}>
              Orbital AI Factory
            </Link>
            <Typography color="#ffffff">Solar Power</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Solar Power System
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            ROSA-class roll-out solar arrays, power conversion & distribution systems
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Solar Generation */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Solar Generation (ROSA-Class Roll-Out Wings)
            </Typography>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Architecture
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Two primary solar wings mounted on opposite ends of the main spine. Each wing is a ROSA-class roll-out solar array:
              </Typography>
              <List sx={{ color: '#cccccc', pl: 2, mb: 3 }}>
                <ListItem disableGutters>
                  <ListItemText 
                    primary="Flexible blanket stowed on a drum"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText 
                    primary="Deployed along a lightweight boom once on orbit"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
              </List>
            </Box>

            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#1b1b1d',
                    p: 4,
                    borderRadius: 1,
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                    Scale
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Total solar area: ~3,000 m² (both wings) for a 1 MW-class node
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Per wing: ~1,500 m², e.g. ~50 m roll-out length × ~30 m effective span
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    • Effective power density: ~330–350 W/m² (multi-junction cells + derates)
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#1b1b1d',
                    p: 4,
                    borderRadius: 1,
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                    Deployment Sequence
                  </Typography>
                  <List sx={{ color: '#cccccc', pl: 0 }}>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="1. Sector covers open; blanket + boom released from canister"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="2. Roll-out boom extends, pulling the blanket with it"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="3. Blanket unrolls under tension, guided by edge battens"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="4. Root and tip mechanisms latch, tensioning the array"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="5. Root gimbal enters continuous Sun-tracking mode"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                Pointing & Control
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Single-axis solar array drive per wing at the root. Modes: Sun-tracking, feathered (drag/safe-mode), parked for servicing.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Pointing modes include 'science / power max' and 'astronomy-friendly', following lessons learned from large-array LEO sats like <span style={{ color: '#ffffff' }}>AST's BlueWalker</span>: slight tilts of solar and radiator planes reduce optical brightness while maintaining required power and heat rejection.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Array loads and jitter managed via sensors + attitude control loops, ensuring stable power generation while minimizing structural loads during orbital maneuvers.
              </Typography>
            </Box>
          </Box>

          {/* Power Conversion & Distribution */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Power Conversion & Distribution
            </Typography>

            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#1b1b1d',
                    p: 4,
                    borderRadius: 1,
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                    Primary DC Bus
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    ~300–600 V class for efficient power transport across the node
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                    Higher voltage reduces current, minimizing I²R losses and enabling lighter power distribution harnesses.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#1b1b1d',
                    p: 4,
                    borderRadius: 1,
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                    Conversion
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • MPPT units near the pod cluster for each string group
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    • DC/DC converters to 48–60 V rack power and low-voltage avionics rails
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                Energy Storage (Config-Dependent)
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Swappable battery modules in one or more pods. Sized for eclipse operations or run-sun-only, depending on mission. Battery capacity and placement optimized for orbital period and power demand profiles.
              </Typography>
            </Box>
          </Box>

          {/* Related Links */}
          <Divider sx={{ borderColor: '#333333', my: 6 }} />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" color="white" sx={{ mb: 3 }}>
              Explore More
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Link href="/orbital-ai-factory/nodes" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      backgroundColor: '#1b1b1d',
                      p: 3,
                      borderRadius: 1,
                      border: '1px solid #333333',
                      transition: 'border-color 0.2s',
                      '&:hover': {
                        borderColor: '#555555',
                      },
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 1, fontWeight: 600 }}>
                      Node Architecture
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Structure, spine design, and robotic servicing
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/orbital-ai-factory/compute-pods" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      backgroundColor: '#1b1b1d',
                      p: 3,
                      borderRadius: 1,
                      border: '1px solid #333333',
                      transition: 'border-color 0.2s',
                      '&:hover': {
                        borderColor: '#555555',
                      },
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 1, fontWeight: 600 }}>
                      Compute Pods
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      AI compute, storage, and networking specs
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/orbital-ai-factory/heat-management" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      backgroundColor: '#1b1b1d',
                      p: 3,
                      borderRadius: 1,
                      border: '1px solid #333333',
                      transition: 'border-color 0.2s',
                      '&:hover': {
                        borderColor: '#555555',
                      },
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 1, fontWeight: 600 }}>
                      Heat Management
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Direct liquid cooling and deployable radiator systems
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/orbital-ai-factory/network-interconnect" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      backgroundColor: '#1b1b1d',
                      p: 3,
                      borderRadius: 1,
                      border: '1px solid #333333',
                      transition: 'border-color 0.2s',
                      '&:hover': {
                        borderColor: '#555555',
                      },
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 1, fontWeight: 600 }}>
                      Network & Interconnect
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Optical compute fabric and free-space optical links
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      backgroundColor: '#1b1b1d',
                      p: 3,
                      borderRadius: 1,
                      border: '1px solid #333333',
                      transition: 'border-color 0.2s',
                      '&:hover': {
                        borderColor: '#555555',
                      },
                    }}
                  >
                    <Typography variant="h6" color="white" sx={{ mb: 1, fontWeight: 600 }}>
                      Back to Orbital AI Factory Overview →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Return to the main Orbital AI Factory specifications page
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

