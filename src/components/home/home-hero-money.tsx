// /components/home/home-hero-money.tsx
import React, { FC } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

interface HomeHeroProps {
  backgroundColor?: string;
}

export const HomeHeroMoney: FC<HomeHeroProps> = ({ backgroundColor = '#000000' }) => {
  return (
    <Box
      sx={{
        backgroundColor,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* TOP HERO: headline, subhead, orbital node image */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 0, md:34 },
          pb: { xs: 16, md: 32 },
        }}
      >
        {/* Main hero text */}
        <Container
          maxWidth="md"
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            color="#ffffff"
            variant="h2"
            component="h2"
            sx={{ mt: { xs: 2, md: 6 }, mb: 4 }}
          >
            We build the AI factories
            <br /> that live in space.
          </Typography>

          <Typography
            // color="text.secondary"
            sx={{
                color: 'rgba(255,255,255,0.88)',   // more contrast than text.secondary
                maxWidth: 720,
                mx: 'auto',
            }}
            variant="h5"
            >
            From the first commercial lunar data server to petabyte-class orbital
            data center nodes on the ISS, SpaceBilt designs and integrates the
            servers, storage, and infrastructure that turn stations into Orbital
            AI Factories – and all of it runs on our Orbital Data Stack.
          </Typography>

          {/* Mobile: image stacked under text */}
          <Box
            sx={{
              mt: 4,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Box
              component="img"
              src="/assets/ai-factory-mobile.png"
              // src="/assets/ai-factory-pod.png"
              alt="Orbital AI Factory node in low Earth orbit"
              sx={{
                width: '100%',
                display: 'block',
              }}
            />
          </Box>
        </Container>

        {/* Desktop: image fills hero height on the right, but scaled so top is visible */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: { md: '60vw', lg: '52vw' },
            maxWidth: 'none',
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/assets/ai-factory-money2.png"
            alt="Orbital AI Factory node in low Earth orbit"
            sx={{
              height: 'calc(100% - 60px)',  // Use container height minus top margin
              marginTop: '60px',            // Offset from top
              width: 'auto',
              display: 'block',
              marginLeft: 'auto',           // ensure right alignment
              objectFit: 'contain',         // Preserve aspect ratio, show full image
            }}
          />

          {/* Gradient to keep any overlapping text readable */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '26%',
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.95), rgba(0,0,0,0))',
            }}
          />
        </Box>
      </Box>

      {/* INTRO SECTION: starts after hero + image */}
      <Container
        maxWidth="md"
        sx={{
          px: { xs: 2, md: 0 },
          pt: { xs: 2, md: 12 },
          pb: 16,
        }}
      >
        <Typography
          color="#ffffff"
          variant="h6"
          sx={{
            mb: 0,
            textAlign: { xs: 'left', md: 'center' },
          }}
        >
          INTRODUCING THE
        </Typography>

        <Typography
          variant="h1"
          sx={{
            mb: 5,
            mt: 2,
            textAlign: { xs: 'left', md: 'center' },
            backgroundImage:
              'linear-gradient(180deg, #004C94 45%, #297BC4 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: {
              xs: '4.4rem',
              sm: '4.5rem',
              md: '5rem',
            },
          }}
        >
          Orbital AI Factory
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mt: 3, textAlign: { xs: 'left', md: 'center' } }}
        >
          An Orbital AI Factory is a cluster of nodes in orbit that turns raw
          data into decisions: AI running next to telescopes, sensor
          constellations, stations, and in-space factories. Under the hood,
          every Orbital AI Factory runs on our Orbital Data Stack — the
          infrastructure that makes a data center work in space.
        </Typography>

        <Typography
          variant="h5"
          color="white"
          sx={{ mt: 4, mb: 4, textAlign: { xs: 'left', md: 'center' } }}
        >
          SpaceBilt isn&apos;t just talking about it. We&apos;ve already flown
          the core layers of that stack:
        </Typography>

        <List
          sx={{
            color: '#ffffff',
            '& .MuiListItemText-primary': {
              fontSize: '1.25rem',
            },
          }}
        >
          <ListItem disableGutters>
            <ListItemText primary="✅  Compute + storage layer: Large in-Space Server (LiSS), the world's first 100+ TB orbital data server, flight-qualified on the ISS." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="✅  Data center node layer: Axiom Orbital Data Center Node on the ISS, where SpaceBilt leads engineering and integration of optically interconnected, petabyte-class infrastructure." />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="✅  Lunar and cislunar layer: The first commercial data server to the Moon, generating real performance data in deep-space environments." />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};
