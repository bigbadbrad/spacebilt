// /app/orbital-ai-factory/network-interconnect/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Network & Interconnect – Optical Compute Fabric & Free-Space Optical Links | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory network and interconnect systems: high-speed optical compute fabric, free-space optical links, and distributed laser-linked supercomputer architecture.',
  keywords: ['orbital network', 'space data center networking', 'free-space optical links', 'FSO', 'orbital interconnect', 'laser crosslinks'],
  openGraph: {
    title: 'Network & Interconnect | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory network and interconnect systems including optical compute fabric and free-space optical links.',
    url: 'https://orbitalaifactory.com/orbital-ai-factory/network-interconnect',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Network & Interconnect | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory network and interconnect systems.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://orbitalaifactory.com/orbital-ai-factory/network-interconnect',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Network & Interconnect',
  description: 'Detailed specifications for Orbital AI Factory network and interconnect systems including optical compute fabric, free-space optical links, and distributed supercomputer architecture.',
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
    '@id': 'https://orbitalaifactory.com/orbital-ai-factory/network-interconnect',
  },
};

export default function NetworkInterconnectPage() {
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
            <Typography color="#ffffff">Network & Interconnect</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Network & Interconnect
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Instead of isolated "AI satellites," the Orbital AI Factory operates as a distributed, laser-linked supercomputer in low Earth orbit, designed for high-bandwidth, synchronised AI workloads.
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Inside the Node */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Inside the Node
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
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Short, fixed-length paths on the spine and simple topologies (ring / star / fat-tree) keep latency predictable for synchronised AI workloads.
              </Typography>
            </Box>
          </Box>

          {/* Between Nodes */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Between Nodes (The Orbital Data Center Network)
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
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Conventional radio links remain for command, housekeeping, and as a lower-rate fallback. High-volume AI data and model sync ride on the optical links.
              </Typography>
            </Box>
          </Box>

          {/* Why It Matters */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Why It Matters
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
                      Heat Management →
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Direct liquid cooling and deployable radiator systems
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

