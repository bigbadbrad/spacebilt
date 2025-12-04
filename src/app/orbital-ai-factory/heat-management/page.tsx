// /app/orbital-ai-factory/heat-management/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital Heat Management & Radiators – ISS-Derived Deployable Assemblies | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory heat management: direct liquid cooling from AI chips, low-mass deployable radiators, ISS-derived assemblies, and thermal rejection systems.',
  keywords: ['orbital heat management', 'space radiators', 'ISS radiators', 'orbital thermal rejection', 'space cooling systems'],
  openGraph: {
    title: 'Orbital Heat Management & Radiators | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory heat management including deployable radiators and direct liquid cooling systems.',
    url: 'https://www.orbitalaifactory.com/orbital-ai-factory/heat-management',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital Heat Management & Radiators | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory heat management systems.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://www.orbitalaifactory.com/orbital-ai-factory/heat-management',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital Heat Management & Radiators',
  description: 'Detailed specifications for Orbital AI Factory heat management systems including direct liquid cooling, deployable radiators, and thermal rejection.',
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
    '@id': 'https://www.orbitalaifactory.com/orbital-ai-factory/heat-management',
  },
};

export default function HeatManagementPage() {
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
            <Typography color="#ffffff">Heat Management</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Heat Management & Radiators
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Direct liquid cooling from AI chips to low-mass deployable radiators, rejecting ~1 MW of heat via high-emissivity panels pointed at deep space
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Coolant Path */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Coolant Path & Direct Liquid Cooling
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
                Direct Liquid Cooling from AI Chips to Space
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Each H100-class accelerator stack is mounted on a cold plate inside the pod. A closed liquid loop (ammonia or advanced space-rated coolant) pulls heat off the cold plates, runs through pod manifolds, and feeds into the node-level radiator assemblies on the spine. The loop returns cooled fluid back into the pods, exactly like a terrestrial liquid-cooled rack, but scaled for zero-g and vacuum.
              </Typography>
            </Box>
          </Box>

          {/* Deployable Radiators */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Low-Mass, Low-Cost Deployable Radiators
            </Typography>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Radiators are thin, flexible panel assemblies that stow compactly for launch and deploy using a scissors-beam mechanism derived from ISS radiators.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                <strong>Design targets:</strong>
              </Typography>
              <List sx={{ color: '#cccccc', pl: 4, mb: 2 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="High area-to-mass ratio (m² per kg) to keep launch cost down"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="Simple kinematics (one deployment degree of freedom + single rotary joint) to keep mechanisms cheap and reliable"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="Panel construction optimized for mass-produced modules that can be swapped or added as thermal load grows"
                    primaryTypographyProps={{ fontSize: '1rem' }}
                  />
                </ListItem>
              </List>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                When deployed, panels are co-planar and gimballed so they present minimal cross section to the Sun, and maximal cross section to deep space, maximizing net infrared heat rejection.
              </Typography>
            </Box>
          </Box>

          {/* Radiator Architecture */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Radiator Architecture (ISS-Derived Deployable Assemblies)
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
                2–4 deployable radiator assemblies mounted on short booms off the spine. Each assembly is analogous to ISS radiators (Oren & Howell style):
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
                    primary="Long strip of flat, co-planar radiator panels deployed by a scissors-beam mechanism"
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
                    • Total for node: scaled to ~1,700–2,000 m² effective radiator area for a 1 MW thermal load
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
                    Working fluid: ammonia or advanced coolant loop; interpanel flex hoses with micrometeoroid/thermal shielding
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Radiators gimbaled to stay edge-on to the Sun, normal to deep space. Panels are co-planar (do not face each other), maximizing view factor to cold space. Control modes coordinated with arrays so radiators avoid shadowing and back-heating.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Infrared Emission */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Infrared Emission to Space
            </Typography>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                The radiator surface stack is tuned for high emissivity in the thermal IR band and low absorptivity in the visible / near-IR band. Almost all electrical input to the node ultimately leaves as IR photons from these panels, closing the energy balance for megawatt-class AI workloads.
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
                      Node Architecture →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Structure, spine design, and robotic servicing
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
                      Compute Pods →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI compute, storage, and networking specs
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
                      Network & Interconnect →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Optical compute fabric and free-space optical links
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/orbital-ai-factory/solar-power" style={{ textDecoration: 'none' }}>
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
                      Solar Power →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ROSA-class solar arrays and power conversion systems
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

