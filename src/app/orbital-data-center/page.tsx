// /app/orbital-data-center/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText, Divider, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital Data Center – Space-Based Compute & Storage Infrastructure',
  description: 'An orbital data center is a space-based cluster of compute and storage designed to process, store, and route data in orbit. As AI workloads dominate data center economics, orbital data centers are evolving into Orbital AI Factories.',
  keywords: ['orbital data center', 'orbital data centres', 'data centers in space', 'space data center', 'in-orbit data center', 'orbital compute', 'space-based data center'],
  openGraph: {
    title: 'Orbital Data Center – Space-Based Compute & Storage',
    description: 'An orbital data center is a space-based cluster of compute and storage. As AI workloads dominate, orbital data centers are evolving into Orbital AI Factories.',
    url: 'https://www.orbitalaifactory.com/orbital-data-center',
    siteName: 'Orbital AI Factory',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital Data Center – Space-Based Compute & Storage',
    description: 'An orbital data center is a space-based cluster of compute and storage. The modern evolution is the Orbital AI Factory.',
    site: '@orbitalfactory',
  },
  alternates: {
    canonical: 'https://www.orbitalaifactory.com/orbital-data-center',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital Data Center',
  description: 'An orbital data center is a space-based cluster of compute and storage designed to process, store, and route data in orbit. As AI workloads dominate, orbital data centers are evolving into Orbital AI Factories.',
  author: {
    '@type': 'Organization',
    name: 'Orbital',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Orbital',
  },
  datePublished: '2025-01-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.orbitalaifactory.com/orbital-data-center',
  },
};

export default function OrbitalDataCenterPage() {
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
            <Typography color="#ffffff">Orbital Data Center</Typography>
          </Breadcrumbs>

          <Typography variant="h1" color="white" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Orbital Data Center
          </Typography>
          
          {/* Hero Definition */}
          <Box
            sx={{
              backgroundColor: '#1b1b1d',
              p: 4,
              borderRadius: 1,
              mb: 6,
            }}
          >
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3, fontSize: '1.2rem', lineHeight: 1.6 }}>
              An orbital data center is a space-based cluster of compute and storage designed to process, store, and route data in orbit. As AI workloads dominate data center economics, orbital data centers are evolving into <Link href="/" style={{ color: '#297BC4', textDecoration: 'none', fontWeight: 600 }}>Orbital AI Factories</Link> — infrastructure that converts raw space data into decisions in real time.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
              For the modern definition, see <Link href="/" style={{ color: '#297BC4', textDecoration: 'none' }}>Orbital AI Factory</Link>.
            </Typography>
          </Box>

          <Divider sx={{ borderColor: '#333333', mb: 6 }} />

          {/* Section 1: What is an orbital data center? */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              What is an Orbital Data Center?
            </Typography>
            
            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
                mb: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                Simple Definition
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                An orbital data center is a free-flying or station-attached cluster of compute nodes, storage systems, and networking infrastructure that operates in Earth orbit. Unlike terrestrial data centers, orbital data centers leverage the unique advantages of space: proximity to sensors, abundant solar power, radiative cooling, and global coverage.
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
              <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                What Makes It Different from Terrestrial Data Centers
              </Typography>
              <List sx={{ color: '#cccccc', pl: 4, mb: 2 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="No land, real estate, or cooling towers required"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Direct access to space-based sensors and telescopes without downlink bottlenecks"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Unlimited solar power generation (no grid dependency)"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Radiative cooling to deep space (no water or air cooling needed)"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Global coverage and low-latency access from any point on Earth"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
              </List>
            </Box>

            <Box
              sx={{
                backgroundColor: '#1b1b1d',
                p: 4,
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" color="white" sx={{ mb: 2, fontWeight: 600 }}>
                Why Orbit is Attractive
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color="white" sx={{ mb: 1, fontSize: '1.2rem' }}>
                    Proximity to Sensors
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Process Earth observation, RF, and SAR data at the source, eliminating massive downlink bandwidth requirements.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color="white" sx={{ mb: 1, fontSize: '1.2rem' }}>
                    Bandwidth Reduction
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Pre-process and compress data in orbit, sending only insights and decisions to Earth instead of raw sensor streams.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color="white" sx={{ mb: 1, fontSize: '1.2rem' }}>
                    Resiliency
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Distributed infrastructure that survives natural disasters, geopolitical disruptions, and terrestrial infrastructure failures.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color="white" sx={{ mb: 1, fontSize: '1.2rem' }}>
                    Solar + Radiative Cooling
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Unlimited power generation and efficient heat rejection to deep space enable high-power compute without terrestrial constraints.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Section 2: Use Cases */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Use Cases (Non-AI and AI)
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
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
                    Earth Observation Preprocessing
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Process multispectral, hyperspectral, and SAR imagery in orbit, generating analysis-ready products before downlink.
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
                    RF/SAR Analytics
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Real-time signal processing, spectrum analysis, and RF intelligence at the edge of space.
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
                    Space-Domain Awareness
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Track, catalog, and analyze space objects in real time using on-orbit compute and sensor fusion.
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
                    Station Services
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Provide compute, storage, and networking services to space stations, lunar bases, and in-space manufacturing facilities.
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
                    In-Space Manufacturing Process Data
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Real-time monitoring, quality control, and process optimization for additive manufacturing and materials processing in space.
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
                    AI Inference at the Edge of Space
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Run large language models, computer vision models, and specialized AI workloads next to sensors, enabling real-time decision-making without Earth round-trip latency.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Section 3: Architecture at a Glance */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Architecture at a Glance
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
                Orbital data centers are built from modular compute and storage nodes that can be assembled, upgraded, and serviced in orbit. Each node typically includes:
              </Typography>
              
              <List sx={{ color: '#cccccc', pl: 4, mb: 3 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Modular compute/storage pods with standardized interfaces for AI workloads, data processing, and storage"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Optical backhaul links to Earth and free-space optical links between nodes for high-throughput networking"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Power + thermal spine: solar arrays for power generation and deployable radiators for heat rejection"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Orbital logistics: grapple fixtures, docking ports, and standardized interfaces for robotic servicing and upgrades"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Robotic servicing: nodes designed to be maintained, upgraded, and expanded by space tugs and robotic arms without human EVA"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
              </List>
              
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                Multiple nodes can be linked together via high-capacity optical links to form a distributed cluster, scaling from single-node missions to multi-megawatt orbital compute platforms.
              </Typography>
            </Box>
          </Box>

          {/* Section 4: Why the term is evolving into "AI Factory" */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Why the Term is Evolving into "AI Factory"
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
                Orbital data center is the widely used term for compute and storage in space. But as AI becomes the primary workload, these systems increasingly function as <Link href="/" style={{ color: '#297BC4', textDecoration: 'none', fontWeight: 600 }}>Orbital AI Factories</Link> — turning raw orbital data into real-time decisions.
              </Typography>
              
              <Typography variant="h5" color="white" sx={{ mb: 2, mt: 4, fontWeight: 600 }}>
                The Key Distinction
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem', fontStyle: 'italic' }}>
                "The term 'data center' describes the physical form. 'AI factory' describes the economic function."
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Traditional data centers store and route data. Orbital AI Factories process data at the source, run AI inference in real time, and generate actionable insights before data ever reaches Earth. This shift from storage-centric to compute-centric architecture reflects the economic reality: AI workloads now drive the majority of data center investment and power consumption.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                The modern evolution of the orbital data center is the <Link href="/" style={{ color: '#297BC4', textDecoration: 'none', fontWeight: 600 }}>Orbital AI Factory</Link>.
              </Typography>
            </Box>
          </Box>

          {/* Section 5: How Orbital Fits */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              How Orbital Fits
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
                We have already flown the core infrastructure layers that make orbital data centers possible:
              </Typography>
              
              <List sx={{ color: '#cccccc', pl: 4, mb: 3 }}>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="LiSS (Lunar Infrastructure Support System): Proven orbital compute and storage hardware"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="ISS node integration: Experience deploying compute infrastructure on space stations"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Lunar server deployments: Edge compute infrastructure for deep space missions"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pb: 1.5 }}>
                  <ListItemText 
                    primary="Strategic partnerships: Working with leading space agencies and commercial space companies"
                    primaryTypographyProps={{ fontSize: '1.1rem' }}
                  />
                </ListItem>
              </List>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem', fontWeight: 600 }}>
                In other words: We build orbital data centers — and define the next category: <Link href="/" style={{ color: '#297BC4', textDecoration: 'none', fontWeight: 600 }}>Orbital AI Factories</Link>.
              </Typography>
            </Box>
          </Box>

          {/* Section 6: FAQ */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" color="white" sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Frequently Asked Questions
            </Typography>
            
            <Grid container spacing={3}>
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
                    Are orbital data centers crewed?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    No. Orbital data centers are designed to operate autonomously with robotic servicing. They can be attached to crewed stations, but the compute infrastructure itself runs without human operators.
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
                    How do they cool?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Orbital data centers use deployable radiators that reject heat directly to deep space via radiation. This is far more efficient than terrestrial cooling systems and enables much higher power densities.
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
                    What's the difference between an orbital data center and an edge satellite?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Edge satellites typically have limited compute for basic processing. Orbital data centers are dedicated compute platforms with multi-megawatt power budgets, petabyte-scale storage, and high-throughput networking designed for intensive AI and data processing workloads.
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
                    When will they scale?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    Early orbital data center deployments are already in development. As launch costs continue to decrease and AI workloads demand edge compute, we expect to see significant scaling in the 2030s.
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
                    Is this LEO only?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                    While initial deployments focus on Low Earth Orbit (LEO) for proximity to Earth and lower launch costs, orbital data centers can operate in Medium Earth Orbit (MEO), Geostationary Orbit (GEO), and even cislunar space depending on mission requirements.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* CTA Section */}
          <Divider sx={{ borderColor: '#333333', my: 6 }} />
          <Box
            sx={{
              backgroundColor: '#1b1b1d',
              p: 6,
              borderRadius: 1,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" color="white" sx={{ mb: 3 }}>
              Learn More About Orbital AI Factories
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
              The modern evolution of the orbital data center is the Orbital AI Factory — infrastructure that converts raw space data into real-time decisions.
            </Typography>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#297BC4',
                  color: 'white',
                  px: 4,
                  py: 2,
                  borderRadius: 1,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#1e5a8a',
                  },
                }}
              >
                Explore Orbital AI Factory →
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

