// /app/orbital-ai-factory/nodes/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital AI Factory Node Architecture – Structure, Spine Design & Robotic Servicing | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory nodes: 25–40 m lattice spine, modular pod architecture, ROSA-class solar arrays, ISS-derived radiators, and robotic servicing interfaces.',
  keywords: ['orbital AI factory node', 'space data center architecture', 'orbital node design', 'space station data center', 'orbital compute architecture'],
  openGraph: {
    title: 'Orbital AI Factory Node Architecture | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory nodes: 25–40 m lattice spine, modular pod architecture, and robotic servicing interfaces.',
    url: 'https://www.spacebilt.co/orbital-ai-factory/nodes',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital AI Factory Node Architecture | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory nodes with modular pod architecture and robotic servicing.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://www.spacebilt.co/orbital-ai-factory/nodes',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital AI Factory Node Architecture',
  description: 'Detailed specifications for Orbital AI Factory nodes including structure, spine design, modularity, and robotic servicing interfaces.',
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
    '@id': 'https://www.spacebilt.co/orbital-ai-factory/nodes',
  },
};

export default function NodesPage() {
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
            <Typography color="#ffffff">Orbital AI Factory Node Architecture</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Orbital AI Factory Node Architecture
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Structure, spine design, modularity, and robotic servicing interfaces for 1 MW-class orbital data center nodes
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Main Spine & Layout */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Main Spine & Layout
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
                    Spine
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    25–40 m central lattice truss (aluminum or composite)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                    The spine serves as the primary structural element, providing mounting points for compute pods, solar arrays, radiators, and all supporting systems. The lattice design minimizes mass while maximizing stiffness for precision pointing and thermal management.
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
                    Mounting Points
                  </Typography>
                  <List sx={{ color: '#cccccc', pl: 0 }}>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="4–8 AI compute pods in a line near center"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Solar array root joints at each end"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Radiator bases adjacent to the pod cluster"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="ADCS, comms antennas, grapple fixtures, and servicing interfaces"
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
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Modularity
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Standardized pod rails with mechanical + power + data + coolant connectors
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Grapple fixtures and clear approach corridors for tugs or station arms
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Node designed to be assembled and upgraded in orbit, allowing for incremental capacity increases and technology refresh cycles without complete replacement.
              </Typography>
            </Box>
          </Box>

          {/* Radiators */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Radiators (ISS-Derived Deployable Assemblies)
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
              <List sx={{ color: '#cccccc', pl: 2 }}>
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

          {/* Related Links */}
          <Divider sx={{ borderColor: '#333333', my: 6 }} />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" color="white" sx={{ mb: 3 }}>
              Explore More
            </Typography>
            <Grid container spacing={3}>
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
                      Physical specs, AI compute configurations, storage, and networking
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/power-thermal" style={{ textDecoration: 'none' }}>
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
                      Power & Thermal →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ROSA-class solar arrays and power conversion systems
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

