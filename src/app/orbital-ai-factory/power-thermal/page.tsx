// /app/orbital-ai-factory/power-thermal/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital Power & Radiator System – ROSA Solar Arrays & Thermal Management | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory power and thermal systems: ROSA-class roll-out solar arrays, 300–600 V DC bus, MPPT units, ISS-derived deployable radiators, and thermal management.',
  keywords: ['orbital solar arrays', 'space data center power', 'ROSA solar arrays', 'space radiator design', 'orbital thermal management'],
  openGraph: {
    title: 'Orbital Power & Radiator System | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory power and thermal systems including ROSA-class solar arrays and ISS-derived radiators.',
    url: 'https://www.spacebilt.co/orbital-ai-factory/power-thermal',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital Power & Radiator System | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory power and thermal systems.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://www.spacebilt.co/orbital-ai-factory/power-thermal',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital Power & Radiator System',
  description: 'Detailed specifications for Orbital AI Factory power and thermal systems including ROSA-class roll-out solar arrays, power conversion, ISS-derived deployable radiators, and thermal management.',
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
    '@id': 'https://www.spacebilt.co/orbital-ai-factory/power-thermal',
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
              Home
            </Link>
            <Typography color="#ffffff">Orbital AI Factory Power & Thermal</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Power System – At a Glance
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            ROSA-class roll-out solar arrays, power conversion & distribution, and thermal management systems
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

          {/* Thermal System */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Thermal Management System
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
                Radiator Architecture
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                2–4 deployable radiator assemblies mounted on short booms off the spine. Each assembly uses ISS-proven technology:
              </Typography>
              <List sx={{ color: '#cccccc', pl: 2, mb: 3 }}>
                <ListItem disableGutters>
                  <ListItemText 
                    primary="Base / torque arm at the spine"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText 
                    primary="Rotary joint for pointing"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText 
                    primary="Long strip of flat, co-planar radiator panels deployed by scissors-beam mechanism"
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
                    Per Assembly Specs
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Deployed length: ~22–23 m (≈75 ft)
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Width: ~6–7 m
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Area: ~140–160 m² per assembly
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    • Total for node: ~1,700–2,000 m² effective radiator area for 1 MW thermal load
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
                    Working Fluid & Operations
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    Ammonia or advanced coolant loop; interpanel flex hoses with micrometeoroid/thermal shielding.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Radiators gimbaled to stay edge-on to the Sun, normal to deep space. Panels are co-planar, maximizing view factor to cold space. Control modes coordinated with arrays so radiators avoid shadowing and back-heating.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Related Links */}
          <Divider sx={{ borderColor: '#333333', my: 6 }} />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" color="white" sx={{ mb: 3 }}>
              Explore More
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
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
                      Node Architecture →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Structure, spine design, and robotic servicing
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
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
                      Compute Pods →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI compute, storage, and networking specs
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
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

