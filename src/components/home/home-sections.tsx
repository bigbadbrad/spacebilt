// /components/home/home-sections.tsx
import React from "react";
import Link from 'next/link';
import { Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, List, ListItem, ListItemText } from "@mui/material";

export const What: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 15, md: 20 },
        pb: 15,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="flex-start" spacing={0}>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 1, md: 1 }, // Text on left
              textAlign: { xs: "left", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pl: { xs: 0, md: 4 }, // Adjust padding for left-aligned text
              pb: { xs: 2, md: 6 },
            }}
          >
            <Typography variant="h1" color="#cccccc" sx={{ mt: 0, mb: 2 }}>
              What is the Orbital Data Stack?
            </Typography>
            <Typography variant="h6" color="#ffffff" sx={{ mt: 0, mb: 3 }}>
              Three-layer breakdown:
            </Typography>
            <List sx={{ color: '#ffffff' }}>
              <ListItem disableGutters>
                <ListItemText 
                  primary="1. Orbital Compute & Storage"
                  secondary="Ruggedized servers and SSD arrays designed for radiation, vacuum, and thermal extremes — from 100+ TB LiSS units to petabyte-class AxODC nodes on the ISS."
                  primaryTypographyProps={{ color: '#ffffff', sx: { fontWeight: 600, mb: 0.5 } }}
                  secondaryTypographyProps={{ color: '#cccccc' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText 
                  primary="2. Data Center Integration"
                  secondary="Power, cooling, networking, and optical links that turn individual servers into a true orbital data center — including AxODC Node ISS with high-speed optical backhaul."
                  primaryTypographyProps={{ color: '#ffffff', sx: { fontWeight: 600, mb: 0.5 } }}
                  secondaryTypographyProps={{ color: '#cccccc' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText 
                  primary="3. Orbital Logistics & Lifecycle"
                  secondary="Design, qualification, launch integration, on-orbit operations, upgrades, and repurposing — so capacity can be added, moved, and modernized without de-orbiting hardware."
                  primaryTypographyProps={{ color: '#ffffff', sx: { fontWeight: 600, mb: 0.5 } }}
                  secondaryTypographyProps={{ color: '#cccccc' }}
                />
              </ListItem>
            </List>
            <Typography variant="h2" color="#ffffff" sx={{ mt: 0, mb: 3 }}>
              SpaceBilt is the only company with flight-proven hardware and partnerships across every layer of the Orbital Data Stack.
            </Typography>

          </Grid>

          {/* Right: VisualAPI Flow */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 2, md: 2 }, // Visual on right
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
              mt: { xs: 0, md: 0 },
              pl: { xs: 0, md: 4 } // Adjust padding for right-aligned visual
            }}
          >
            {/* an image */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const Proven: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 15, md: 20 },
        pb: 15,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="flex-start" spacing={0}>
          {/* Left: Benefits and Explanation */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 1, md: 1 }, // Text on left
              textAlign: { xs: "left", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pl: { xs: 0, md: 4 }, // Adjust padding for left-aligned text
              pb: { xs: 2, md: 6 },
            }}
          >
            <Typography variant="h6" color="#cccccc" sx={{ mt: 0, mb: 2 }}>
              FLIGHT-PROVEN ORBITAL DATA SERVERS
            </Typography>
            <Typography variant="h2" color="#ffffff" sx={{ mt: 0, mb: 3 }}>
              From ISS to the Moon, SpaceBilt servers are already operating where other orbital cloud concepts are still just a PowerPoint.
            </Typography>


          </Grid>

          {/* Right: VisualAPI Flow */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 2, md: 2 }, // Visual on right
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
              mt: { xs: 0, md: 0 },
              pl: { xs: 0, md: 4 } // Adjust padding for right-aligned visual
            }}
          >
            {/* an image */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const Rugged: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 12, md: 15 },
        pb: 10,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="flex-start" spacing={6}>
          {/* Left side: simple visual list now as TableContainer */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 2, md: 1 }, // Visual on left
              display: "flex",
              justifyContent: "center", // Centers the TableContainer horizontally
              alignItems: "top", // Aligns the TableContainer to the top
              mt: { xs: 0, md: 0 },
              pr: { xs: 0, md: 4 } // Adjust padding for left-aligned visual
            }}
          >
            {/* an image */}
          </Grid>

          {/* Right side: Headline and copy */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 1, md: 2 }, // Text on right
              textAlign: { xs: "left", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pb: { xs: 2, md: 6 },
              pl: { xs: 0, md: 6 },
            }}
          >
            <Typography variant="h6" color="white" sx={{ mt: 0, mb: 2 }}>
              RUGGEDIZED, REPROVISIONABLE INFRASTRUCTURE
            </Typography>
            <Typography variant="h3" color="white" sx={{ mt: 0, mb: 3 }}>
              Traditional satellites were built for one mission and then became debris. Our orbital data infrastructure is designed for swap-outs, upgrades, and reprovisioning — just like terrestrial data centers, but engineered for vacuum, radiation, and decades in orbit.
            </Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
