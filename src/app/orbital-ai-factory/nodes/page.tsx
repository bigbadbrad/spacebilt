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
    url: 'https://www.orbitalaifactory.com/orbital-ai-factory/nodes',
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
    canonical: 'https://www.orbitalaifactory.com/orbital-ai-factory/nodes',
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
    '@id': 'https://www.orbitalaifactory.com/orbital-ai-factory/nodes',
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
              Orbital AI Factory
            </Link>
            <Typography color="#ffffff">Node Architecture</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Orbital AI Factory Node Architecture
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            An Orbital AI Factory is a cluster of high-power nodes working together in orbit. Each node is a 1 MW-class AI data center with structure, spine design, modularity, and robotic servicing interfaces.
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Introduction */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Cluster of High-Power Nodes
            </Typography>
            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                An Orbital AI Factory isn't a single spacecraft – it's a cluster of high-power nodes working together in orbit.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Each node is a 1 MW-class AI data center in space: a central lattice spine with ROSA-style solar wings on each end, deployable radiators, and a chain of modular compute pods. A node carries everything it needs to run large AI models at the edge of space: power generation, thermal rejection, storage, networking, and high-bandwidth free-space optical (FSO) links.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem', fontWeight: 600 }}>
                Factories are created by linking multiple nodes into a coherent cluster:
              </Typography>
              <List sx={{ color: '#cccccc', pl: 4, mb: 3 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Nodes fly in coordinated orbits around the same target (a telescope, sensor constellation, station, or in-space factory)."
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="High-capacity FSO links between nodes form a single high-throughput fabric, so workloads, checkpoints, and datasets can move across the cluster as if it were one logical data center."
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Each node remains fully independent and serviceable: pods, wings, and radiators can be added, swapped, or upgraded without disturbing the rest of the factory."
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
              </List>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                This architecture scales like cloud regions: one node for early missions, then two, four, eight nodes as power and AI demand grow – all while reusing the same qualified hardware building blocks.
              </Typography>
            </Box>
          </Box>

          {/* Main Spine & Layout */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Node Main Spine & Layout
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

          {/* Related Links */}
          <Divider sx={{ borderColor: '#333333', my: 6 }} />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" color="white" sx={{ mb: 3 }}>
              Explore More
            </Typography>
            <Grid container spacing={3}>
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
                      Physical specs, AI compute configurations, storage, and networking
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                      Learn more &gt;
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
                      Solar Power
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      ROSA-class solar arrays and power conversion systems
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

