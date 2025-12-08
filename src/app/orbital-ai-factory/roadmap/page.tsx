// /app/orbital-ai-factory/roadmap/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Typography, Grid, Breadcrumbs } from '@mui/material';

export const metadata: Metadata = {
  title: 'Orbital AI Factory Roadmap – 4-Phase Scaling Path from Edge Nodes to Factory-Class Infrastructure',
  description: 'The Orbital AI Factory roadmap: Phase 1 (10–50 kW Proving Nodes), Phase 2 (100 kW Edge Nodes), Phase 3 (1 MW Factory Nodes), Phase 4 (Off-Earth Manufacturing). From edge nodes to megawatt-class factory infrastructure.',
  keywords: ['orbital AI factory roadmap', 'space data center scaling', 'orbital infrastructure phases', 'space compute roadmap', 'orbital data center evolution'],
  openGraph: {
    title: 'Orbital AI Factory Roadmap – 4-Phase Scaling Path',
    description: 'The Orbital AI Factory is a phased infrastructure roadmap from edge nodes to megawatt-class factory infrastructure.',
    url: 'https://www.orbitalaifactory.com/orbital-ai-factory/roadmap',
    siteName: 'Orbital AI Factory',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbital AI Factory Roadmap – 4-Phase Scaling Path',
    description: 'From edge nodes to factory-class infrastructure: the phased roadmap for Orbital AI Factories.',
    site: '@orbitalfactory',
  },
  alternates: {
    canonical: 'https://www.orbitalaifactory.com/orbital-ai-factory/roadmap',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Orbital AI Factory Roadmap',
  description: 'The Orbital AI Factory is a phased infrastructure roadmap from edge nodes to megawatt-class factory infrastructure.',
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
    '@id': 'https://www.orbitalaifactory.com/orbital-ai-factory/roadmap',
  },
};

export default function RoadmapPage() {
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
            <Typography color="#ffffff">Roadmap</Typography>
          </Breadcrumbs>

          <Typography
            color="#ffffff"
            variant="h6"
            sx={{
              mt: { xs: 2, md: 10 },
              mb: 4,
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            FROM EDGE NODES TO FACTORY-CLASS INFRASTRUCTURE
          </Typography>
          <Typography variant="h2" color="white" sx={{ mt: 0, mb: 6, mr: { xs: 4, md: 40 } }}>
            The Orbital AI Factory Roadmap
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ mb: 3, }}>
            The Orbital AI Factory is a phased infrastructure roadmap. We start with small, repeatable edge nodes to validate radiation, coolant-to-radiator loops, and laser networking — then scale into serviceable megawatt-class factory nodes. Longer-term, off-Earth manufacturing unlocks the next cost curve.
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 8, }}>
            The 1 MW node is our reference design for what a mature Orbital AI Factory looks like — and it becomes inevitable once earlier phases validate the economics of power, thermal, and radiation-tolerant compute.
          </Typography>

          <Grid container spacing={4}>
            {/* Phase 1 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#1b1b1d',
                  p: 4,
                  height: '100%',
                  borderRadius: 1,
                  border: '1px solid #333333',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Phase 1 — 10–50 kW Proving Nodes
                </Typography>
                <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', mb: 2, fontWeight: 500 }}>
                  Power class: 10–50 kW
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2, fontWeight: 600 }}>
                  Goal: Validate the stack in orbit
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2 }}>
                  Small, cheap payload-class nodes. Test: GPU thermal loop behavior, radiation mitigation + ECC/scrubbing, basic FSO routing + results-only downlink.
                </Typography>
                <Typography variant="body1" sx={{ color: '#888888', fontSize: '1rem', fontStyle: 'italic' }}>
                  Outcome: Real flight data that derisks scaled designs
                </Typography>
              </Box>
            </Grid>

            {/* Phase 2 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#1b1b1d',
                  p: 4,
                  height: '100%',
                  borderRadius: 1,
                  border: '1px solid #333333',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Phase 2 — 100 kW Edge Nodes
                </Typography>
                <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', mb: 2, fontWeight: 500 }}>
                  Power class: 100 kW
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2, fontWeight: 600 }}>
                  Goal: First scalable commercial form
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2 }}>
                  Sensor-adjacent AI with results-only downlink. Optimized for: low mass, high area-to-mass deployables, manufacturability.
                </Typography>
                <Typography variant="body1" sx={{ color: '#888888', fontSize: '1rem', fontStyle: 'italic' }}>
                  Outcome: The first economically repeatable node class
                </Typography>
              </Box>
            </Grid>

            {/* Phase 3 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#1b1b1d',
                  p: 4,
                  height: '100%',
                  borderRadius: 1,
                  border: '1px solid #333333',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Phase 3 — 1 MW Factory Nodes
                </Typography>
                <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', mb: 2, fontWeight: 500 }}>
                  Power class: 1 MW
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2, fontWeight: 600 }}>
                  Goal: The orbital "regional data center"
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2 }}>
                  Serviceable spine + modular pods. ROSA-class mega-wings + low-mass deployable radiators. High-capacity node-to-node FSO mesh.
                </Typography>
                <Typography variant="body1" sx={{ color: '#888888', fontSize: '1rem', fontStyle: 'italic' }}>
                  Outcome: A true orbital data center building block
                </Typography>
              </Box>
            </Grid>

            {/* Phase 4 */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: '#1b1b1d',
                  p: 4,
                  height: '100%',
                  borderRadius: 1,
                  border: '1px solid #333333',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Phase 4 — Off-Earth Manufacturing
                </Typography>
                <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', mb: 2, fontWeight: 500 }}>
                  Power class: Multi-TW scale
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2, fontWeight: 600 }}>
                  Goal: The multi-TW cost curve
                </Typography>
                <Typography variant="body1" sx={{ color: '#cccccc', fontSize: '1.1rem', mb: 2 }}>
                  Lunar / cislunar production. Potential mass-driver logistics.
                </Typography>
                <Typography variant="body1" sx={{ color: '#888888', fontSize: '1rem', fontStyle: 'italic' }}>
                  Outcome: Infrastructure scaling unconstrained by Earth launch economics
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Back link */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography variant="body1" sx={{ color: '#297BC4', fontSize: '1.1rem', fontWeight: 500 }}>
                ← Back to Orbital AI Factory
              </Typography>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

