// /components/home/home-hero-money.tsx
import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemText } from '@mui/material';
import type { FC } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface HomeHeroProps {
  backgroundColor?: string;
}

const stackItems = [
  'Traffic Source',
  'Segment / PostHog',
  'Data Warehouse (Snowflake/BigQuery)',
  'dbt / Modeling Layer',
  'CDP (Salesforce/Adobe)',
  'Personalization Engine (Optimizely/Dynamic Yield)',
  'React App',
  'User',
];

const audienceFlowItems = [
  'Traffic Source',
  'AudienceFlow SDK',
  'AF Vector Database',
  'AF Real-Time AI Personalization API',
  'React App',
  'User',
];

export const HomeHero: FC<HomeHeroProps> = ({ backgroundColor = '#000000' }) => {
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#000000',
        pt: { xs: 0, md: 18 },
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography color="#ffffff" variant="h2" component="h2" sx={{ mt: 4, mb: 3, textAlign: 'center' }}>
            We build the data centers<br />that live in space.
        </Typography>

        </Container>

        <Container maxWidth="md" sx={{ px: { xs: 2, md: 0 } }}>
            
        <Typography color="#ffffff" variant="h3" sx={{ mt: 4, mb: 0, textAlign: { xs: 'left', md: 'center' }, }}>
            From the first commercial lunar data server to petabyte-class Orbital Data Center nodes on the ISS, SpaceBilt designs and integrates the servers, storage, and infrastructure that make orbital cloud real.
        </Typography>
        </Container>

        <Typography color="#ffffff" variant="h6" sx={{ mt: 12, mb: 0, textAlign: { xs: 'left', md: 'center' }, }}>
            INTRODUCING THE
            </Typography>
        <Typography
            variant="h1"
            sx={{
            mb: 5,
            mt: 2,
            textAlign: { xs: 'left', md: 'center' },
            backgroundImage: 'linear-gradient(180deg, #004C94 45%, #297BC4 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: {
            xs: '4.4rem',   // small on mobile
            sm: '4.5rem', // slightly larger tablet
            md: '5rem',   // full h1 on desktop
        },
            }}
        >
          Orbital Data Stack
        </Typography>

        <Container maxWidth="md">
            <Typography variant="h4" color="white" sx={{ mt: 3, textAlign: { xs: 'left', md: 'center' }, }}>
            The Orbital Data Stack is everything it takes to run a data center in space — from radiation-tolerant servers and petabyte-scale storage to optical backhaul and in-orbit logistics.
            </Typography>
            <Typography variant="h4" color="white" sx={{ mt: 3, mb: 12, textAlign: { xs: 'left', md: 'center' }, }}>
            SpaceBilt isn’t just talking about it. We’ve already flown it:
            </Typography>
            <List color="white">
              <ListItem disableGutters>
                <ListItemText primary="✅  Compute + storage layer: Large in-Space Server (LiSS), the world’s first 100+ TB orbital data server, flight-qualified on the ISS." />
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
    </>
  );
};
