// /app/orbital-ai-factory/compute-pods/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital AI Compute Pods – Specs, AI Compute Configurations & Storage | SpaceBilt',
  description: 'Detailed specifications for Orbital AI Factory compute pods: 50–150 kW thermal design power, multi-petabyte storage, GPU/AI-ASIC blades, high-speed networking, and robotic servicing.',
  keywords: ['orbital AI compute pod', 'space data center compute', 'orbital GPU pods', 'space AI hardware', 'orbital compute modules'],
  openGraph: {
    title: 'Orbital AI Compute Pods | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory compute pods with AI compute, storage, networking, and power/thermal systems.',
    url: 'https://www.spacebilt.co/orbital-ai-factory/compute-pods',
    siteName: 'SpaceBilt',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital AI Compute Pods | SpaceBilt',
    description: 'Detailed specifications for Orbital AI Factory compute pods with AI compute and storage.',
    site: '@spacebilt',
  },
  alternates: {
    canonical: 'https://www.spacebilt.co/orbital-ai-factory/compute-pods',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital AI Compute Pods',
  description: 'Detailed specifications for Orbital AI Factory compute pods including physical specs, AI compute configurations, storage, networking, and power/thermal systems.',
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
    '@id': 'https://www.spacebilt.co/orbital-ai-factory/compute-pods',
  },
};

export default function ComputePodsPage() {
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
            <Typography color="#ffffff">Orbital AI Factory Compute Pods</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Orbital AI Compute Pod
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', fontSize: '1.1rem', fontStyle: 'italic' }}>
            Think of this as the "rack" inside the orbital data center.
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: '800px' }}>
            Physical specs, AI compute configurations, storage, networking, and pod-level power/thermal
          </Typography>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Physical & Mechanical */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Physical & Mechanical
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
                    Form Factor
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    Unpressurized modular pod
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '1rem' }}>
                    Nominal external envelope: ~1.5 m (W) × 1.5 m (H) × 2.5 m (L)
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
                    Mounting
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    Slides onto spine rails with kinematic locating features
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                    Single robotic latch for structural attachment and release
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
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Interfaces (Rear Bulkhead)
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <List sx={{ color: '#cccccc', pl: 0 }}>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="High-voltage DC bus connectors"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Coolant quick-disconnects (supply/return)"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                  </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <List sx={{ color: '#cccccc', pl: 0 }}>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="High-speed optical or copper data backplane"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText 
                        primary="Low-voltage control + telemetry"
                        primaryTypographyProps={{ fontSize: '1rem' }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Compute & Storage */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Compute & Storage (Configurable)
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
                    AI Compute
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    50–150 kW thermal design power per pod (configuration-dependent)
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '1rem' }}>
                    Accommodates GPU/AI-ASIC blades arranged in ruggedized racks. On-pod high-speed fabric (NVLink-class or custom interconnect) enables low-latency communication between accelerators within the pod.
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
                    Storage
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    Multi-petabyte class per pod using radiation-tolerant SSD arrays
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                    Local erasure-coded object store for resilience. Storage capacity scales with mission requirements, supporting everything from real-time data processing to long-term archival.
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
              <Typography variant="h5" color="white" sx={{ mb: 3, fontWeight: 600 }}>
                Networking
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                Spine-level optical backplane connecting pods within a node. Node-to-node crosslinks via external optical or RF terminals enable distributed computing across multiple orbital nodes, creating a mesh network for data sharing and compute offloading.
              </Typography>
            </Box>
          </Box>

          {/* Power & Thermal */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Power & Thermal Inside the Pod
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
                    Power
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Local DC/DC for rack and board rails
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    • Hot-swappable power modules behind access panels (for servicing)
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
                    Thermal
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Cold plates on accelerators and dense logic
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    • Pumped liquid loop from pod to node-level radiator manifold
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    • Internal health monitoring for leak detection and temperature excursion
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Reliability & Servicing */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Reliability & Servicing
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
                    Fault Isolation
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Pod-level power and fabric isolation; a failed pod can be powered down without impacting others. This modular approach ensures that hardware failures are contained and don't cascade through the entire node.
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
                    Upgrades
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Pods can be swapped to upgrade GPUs/ASICs or change workload (AI, compression, storage-heavy, etc.). Standardized interfaces keep spine and power/thermal structure unchanged across generations, enabling technology refresh without redesigning the entire node.
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
                      Solar arrays, power conversion, and radiator systems
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

