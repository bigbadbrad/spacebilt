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

          {/* Network & Interconnect */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Network & Interconnect
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
                Inside the Node
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Optical Compute Fabric
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Each AI pod connects into a high-speed optical backplane that links GPU/ASIC racks across the node. The goal is to make a cluster of pods behave like a single, tightly-coupled AI supercomputer rather than isolated boxes.
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Throughput
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Aggregate internal fabric targets are in the tens of terabits per second per node, so large models and training shuffles can move freely between pods without saturating links.
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Latency & Determinism
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Short, fixed-length paths on the spine and simple topologies (ring / star / fat-tree) keep latency predictable for synchronised AI workloads.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Between Nodes (The Orbital Data Center Network)
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Free-Space Optical Links (FSO)
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Instead of relying on traditional RF alone, Orbital AI Factory nodes use laser crosslinks to talk to each other and to relay nodes. These free-space optical links provide fiber-class bandwidth in vacuum with very narrow beams and low interference.
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Link Budget & Capacity
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Each node carries multiple steerable optical terminals, with individual links in the hundreds of Gbps to multi-Tbps range. With several links active in parallel, node-to-node bandwidth also scales into the tens of Tbps, enough to keep large, synchronised AI clusters fed.
              </Typography>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                Topology
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Nodes form a resilient mesh across multiple orbital planes and inclinations. Traffic can be routed:
              </Typography>
              <List sx={{ color: '#cccccc', pl: 4, mb: 2 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="pod → local node"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="node → neighboring nodes via FSO"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 0.5 }}>
                  <ListItemText 
                    primary="node → ground via optical or RF gateway sats"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
              </List>

              <Typography variant="h6" color="white" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                RF as a Control / Backup Plane
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Conventional radio links remain for command, housekeeping, and as a lower-rate fallback. High-volume AI data and model sync ride on the optical links.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Why It Matters
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Instead of a handful of isolated "AI satellites," the Orbital AI Factory behaves like a distributed, laser-linked supercomputer in low Earth orbit, designed specifically for high-bandwidth, synchronised AI workloads.
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

