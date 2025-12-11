// /app/payload-as-a-service/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Grid, Typography, List, ListItem, Breadcrumbs } from '@mui/material';
import { GradientLine } from '@/components/home/home-sections';

export const metadata: Metadata = {
  title: 'Payload as a Service – Orbital',
  description: 'Orbital\'s Payload as a Service turns orbital capability into a hosted platform experience. Customers bring the payload and mission objective. Orbital provides a standardized, flight-proven environment.',
  keywords: ['payload as a service', 'orbital infrastructure', 'space data center', 'orbital compute'],
  openGraph: {
    title: 'Payload as a Service',
    description: 'Orbital\'s Payload as a Service turns orbital capability into a hosted platform experience.',
    url: 'https://www.orbitalaifactory.com/payload-as-a-service',
    siteName: 'Orbital AI Factory',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.orbitalaifactory.com/payload-as-a-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PayloadAsAServicePage() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000000',
          minHeight: '100vh',
          pt: { xs: 4, md: 15 },
          pb: 15,
        }}
      >
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ mb: 4, color: '#cccccc' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#cccccc' }}>
              Orbital AI Factory
            </Link>
            <Typography color="#ffffff">Payload as a Service</Typography>
          </Breadcrumbs>

          {/* Intro Section - Like "INTRODUCING THE Orbital AI Factory" */}
          <Container
            maxWidth="md"
            sx={{
              px: { xs: 2, md: 0 },
              pt: { xs: 2, md: 12 },
              pb: { xs: 4, md: 12 },
            }}
          >
            <Typography
              color="#ffffff"
              variant="h6"
              sx={{
                mb: 4,
                textAlign: { xs: 'left', md: 'center' },
              }}
            >
              WHAT WE PROVIDE
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
              Payload as a Service
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 3, textAlign: { xs: 'left', md: 'center' } }}
            >
              Orbital's Payload as a Service turns orbital capability into a hosted platform experience. Customers bring the payload and mission objective. Orbital provides a standardized, flight-proven environment with defined power, thermal, data, and mission-support budgets — without requiring customers to build a bespoke spacecraft program.
            </Typography>
          </Container>

          {/* 1. Physical Infrastructure - Like "What is the Orbital Data Stack?" but with black background */}
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
              <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={0}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                    pb: { xs: 2, md: 6 },
                  }}
                >
                  <Typography
                    color="#ffffff"
                    variant="h6"
                    sx={{
                      mb: 4,
                      textAlign: { xs: 'left', md: 'left' },
                    }}
                  >
                    ORBITAL RACK
                  </Typography>
                  <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2, maxWidth: '66%' }}>
                  Physical Infrastructure
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5, maxWidth: { xs: '100%', md: '66%' } }}>
                    Orbital provides the hardened physical hardware required to run standard AI workloads in space, replacing the need for the customer to build their own space-rated servers.
                  </Typography>
                  <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Ruggedized Compute Nodes
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          Deployment of Orbital's Large In-Space Servers (LiSS), which are flight-qualified storage and compute units (currently tested with 100TB+ capacity).
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          AI-Specific Chips
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          Integration of high-performance edge computing hardware capable of running AI inference and training (e.g., partnerships with companies like Microchip for the PIC64-HPSC or adapting commercial GPUs/TPUs for radiation environments).
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Enterprise Storage
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          Petabyte-class solid-state drive (SSD) arrays (e.g., Phison Pascari drives) designed to survive radiation, vacuum, and thermal extremes.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Standardized Interfaces
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          Using Orbital's iSSI (intelligent Space Systems Interface) to allow modular swapping of hardware. This means a cloud company could "upgrade" their orbital server blades without de-orbiting the entire satellite.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* 2. Logistics & Deployment - Like "Why the Orbital Data Stack is hard." */}
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
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
              >
                {/* Left: Visual placeholder */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    order: { xs: 1, md: 1 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    mt: { xs: 0, md: 0 },
                    pl: { xs: 0, md: 4 },
                  }}
                >
                  {/* Drop an illustration / diagram here */}
                </Grid>

                {/* Right: Text */}
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    order: { xs: 2, md: 2 },
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                    pr: { xs: 0, md: 12 },
                    pb: { xs: 2, md: 6 },
                  }}
                >
                  <Typography
                    color="#ffffff"
                    variant="h6"
                    sx={{
                      mb: 4,
                      textAlign: { xs: 'left', md: 'left' },
                    }}
                  >
                    DELIVERY TRUCK
                  </Typography>
                  <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
                    Logistics & Deployment
                  </Typography>

                  <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
                    This is the core "Service" aspect—Orbital handles the transportation and assembly so the AI company or enterprise focuses only on the software.
                  </Typography>

                  <List sx={{ 
                    color: '#ffffff',
                    '& .MuiListItemText-primary': {
                      fontSize: '1.25rem'
                    },
                    '& .MuiListItemText-secondary': {
                      fontSize: '1.1rem'
                    }
                  }}>
                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        Multi-Orbit Logistics
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Utilizing Orbital's Multi-Orbit Logistics Vehicle (m-OLV) to transport the data center payload to the specific orbit required (LEO, GEO, or Cislunar).
                      </Typography>
                    </ListItem>

                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        In-Space Assembly
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Unlike traditional satellites that launch fully built, Orbital launches data center components in dense "flat-packs" and assembles them robotically on-orbit. This allows for much larger data centers than can fit in a rocket fairing.
                      </Typography>
                    </ListItem>

                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        Launch Brokerage
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Handling all launch integration, vibration testing, and ride-share coordination with launch providers (like SpaceX or Blue Origin) and NASA/DoD.
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* 3. Connectivity & Networking - Like "What is the Orbital Data Stack?" style */}
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
              <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={0}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                    pb: { xs: 2, md: 6 },
                  }}
                >
                  <Typography
                    color="#ffffff"
                    variant="h6"
                    sx={{
                      mb: 4,
                      textAlign: { xs: 'left', md: 'left' },
                    }}
                  >
                    ORBITAL BACKBONE
                  </Typography>
                  <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2, maxWidth: '66%' }}>
                    Connectivity & Networking
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5, maxWidth: { xs: '100%', md: '66%' } }}>
                    For a cloud AI company or enterprise, latency and bandwidth are critical. The service would include the "fiber optic cables" of space.
                  </Typography>
                  <Grid container spacing={4} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Optical Intersatellite Links (OISLs)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          Integration of laser communication terminals (e.g., Skyloom or Kepler) to create high-speed optical backbones. This allows the orbital data center to "talk" to other satellites (like Starlink or Earth observation constellations) at gigabit speeds without sending data down to Earth first.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{mb: 6}}>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: { xs: '100%', md: '50%' },
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Edge Networking
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                          }}
                        >
                          A local mesh network that allows the data center to process data from nearby satellites (processing images effectively "at the edge") before transmitting only the results to Earth.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* 4. Operations & Environment - Like "Why the Orbital Data Stack is hard." style */}
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
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
              >
                {/* Left: Visual placeholder */}
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    order: { xs: 1, md: 1 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    mt: { xs: 0, md: 0 },
                    pl: { xs: 0, md: 4 },
                  }}
                >
                  {/* Drop an illustration / diagram here */}
                </Grid>

                {/* Right: Text */}
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    order: { xs: 2, md: 2 },
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                    pr: { xs: 0, md: 12 },
                    pb: { xs: 2, md: 6 },
                  }}
                >
                  <Typography
                    color="#ffffff"
                    variant="h6"
                    sx={{
                      mb: 4,
                      textAlign: { xs: 'left', md: 'left' },
                    }}
                  >
                    FACILITY MANAGEMENT
                  </Typography>
                  <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
                    Operations & Environment
                  </Typography>

                  <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
                    Orbital would act as the facility manager, ensuring the "data center" stays online despite the harsh environment.
                  </Typography>

                  <List sx={{ 
                    color: '#ffffff',
                    '& .MuiListItemText-primary': {
                      fontSize: '1.25rem'
                    },
                    '& .MuiListItemText-secondary': {
                      fontSize: '1.1rem'
                    }
                  }}>
                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        Power & Thermal Management
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Provisioning of solar power arrays and active cooling radiators to dissipate the massive heat generated by AI chips in a vacuum.
                      </Typography>
                    </ListItem>

                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        Radiation Shielding & Monitoring
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Active monitoring of radiation levels (using sensors like ARMAS) and physical shielding to prevent data corruption (bit flips) in the AI models.
                      </Typography>
                    </ListItem>

                    <ListItem disableGutters sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <GradientLine />
                      <Typography
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          mb: 1,
                          width: "100%",
                        }}
                      >
                        Lifecycle Management
                      </Typography>
                      <Typography
                        sx={{
                          color: "#cccccc",
                          fontSize: "1.1rem",
                          mb: 6
                        }}
                      >
                        Serviceability missions to repair or replace broken server nodes using robotic arms, extending the life of the asset indefinitely rather than letting it burn up in the atmosphere after 5 years.
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* 5. Configurable by Design - Like "Who the Orbital AI Factory is for" style */}
          <Box
            sx={{
              backgroundColor: "#000000",
              pt: { xs: 10, md: 14 },
              pb: { xs: 14, md: 18 },
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
              >
                <Grid
                  item
                  xs={12}
                  md={10}
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                  }}
                >
                  <Typography variant="h2" color="#ffffff" sx={{ mb: 3 }}>
                    Configurable by Design
                  </Typography>

                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ mb: { xs: 8, md: 4 }, maxWidth: 900 }}
                  >
                    This isn't a one-size-fits-all node. Customers pick and choose modular building blocks to match their application:
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 4, width: "100%" }}>
                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <Box
                        component="div"
                        sx={{
                          backgroundColor: "#000000",
                          p: { xs: 0, md: 3 },
                          width: "100%",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Power packages
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Solar wing pairs sized to mission kW
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <Box
                        component="div"
                        sx={{
                          backgroundColor: "#000000",
                          p: { xs: 0, md: 3 },
                          width: "100%",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Thermal packages
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Deployable radiator blocks scaled to heat load
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <Box
                        component="div"
                        sx={{
                          backgroundColor: "#000000",
                          p: { xs: 0, md: 3 },
                          width: "100%",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Payload & compute bays
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Sensor, storage, AI or custom payload modules
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <Box
                        component="div"
                        sx={{
                          backgroundColor: "#000000",
                          p: { xs: 0, md: 3 },
                          width: "100%",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Network packages
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Laser link options based on latency/throughput
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <Box
                        component="div"
                        sx={{
                          backgroundColor: "#000000",
                          p: { xs: 0, md: 3 },
                          width: "100%",
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <GradientLine />
                        <Typography
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          Mobility modules
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Station-keeping or cislunar-capable configurations
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ mt: 0, mb: 1, maxWidth: 900, fontWeight: 600 }}
                  >
                    This creates mission-specific nodes — and a clean path to scale from one node to a multi-node factory.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* 6. Assembled in Space - Like "Who the Orbital AI Factory is for" style */}
          <Box
            sx={{
              backgroundColor: "#000000",
              pt: { xs: 10, md: 14 },
              pb: { xs: 14, md: 18 },
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
              >
                <Grid
                  item
                  xs={12}
                  md={10}
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    pl: { xs: 0, md: 4 },
                  }}
                >
                  <Typography variant="h2" color="#ffffff" sx={{ mb: 3 }}>
                    Assembled in Space
                  </Typography>

                  <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{ mb: { xs: 8, md: 4 }, maxWidth: 900 }}
                  >
                    Once configured, the node is built in orbit. Compact modules are delivered to space and robotically assembled using standardized snap-together mechanical, power, data, and thermal interfaces. Robotic arms and automated assembly routines handle capture, alignment, latching, and verification, enabling rapid expansion and future upgrades without redesigning the platform.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
