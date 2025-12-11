// /app/payload-as-a-service/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container, Grid, Typography, List, ListItem, Breadcrumbs } from '@mui/material';
import { GradientLine } from '@/components/home/home-sections';
// Lego block wrapper component - puts content inside the lego block shape
const LegoBlockWrapper: React.FC<{ children: React.ReactNode; sx?: any }> = ({ children, sx }) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      minHeight: '200px',
      ...sx,
    }}
  >
    {/* SVG background/border */}
    <Box
      component="svg"
      viewBox="0 0 800 800"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        fill: '#000000',
        stroke: '#297BC4',
        strokeWidth: '3',
        zIndex: 0,
      }}
    >
      <path d="M733.3,132V0H466.7v132H333.3V0H66.7v132H0v668h800V132H733.3z M533.3,66.7h133.3V132H533.3V66.7z M133.3,66.7h133.3V132H133.3V66.7z M733.3,678.5H66.7V253.5h666.7V678.5z" />
    </Box>
    {/* Content positioned inside the white rectangle area */}
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        p: { xs: 2, md: 3 },
        pt: { xs: 4, md: 5 }, // Extra top padding to account for studs
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
);

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
                          Integration of high-performance edge computing hardware capable of running AI inference and training (e.g., partnerships with companies like Microchip for the PIC64-HPSC, or adapting commercial NVIDIA Blackwell (B200/GB200) GPUs/TPUs for radiation environments).
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

                  {/* The Compute Bricks (The "Brains") */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    1. Compute
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    Customers choose the balance between raw speed (AI performance) and radiation hardening (reliability).
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 6, width: "100%" }}>
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
                          Module A: The "Tank" (Rad-Hard FPGA Node)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Hardware: Xilinx Versal or Microchip PolarFire FPGAs.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Pro: Almost immune to radiation; never crashes.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Con: Lower AI performance per watt.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: Mission-critical flight software, initial data filtering, and control logic.
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
                          Module B: The "Hot Rod" (Shielded AI Accelerator)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Hardware: NVIDIA Jetson Orin or Google Coral Edge TPU (encased in a heavy Aluminum/Tantalum radiation vault).
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Pro: Massive FLOPS (Floating Point Operations per Second).
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Con: High thermal output; susceptible to "bit flips" (needs frequent reboots).
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: High-speed image recognition, pattern detection, video processing.
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
                          Module C: The "Voting" Node (Redundant Array)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Hardware: Three commercial CPUs wired in parallel.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: "Triple Modular Redundancy" (TMR). The system compares results from all three; if one is corrupted by radiation, it is outvoted by the other two.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* The Storage Blocks (The "Locker") */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    2. Storage
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    Data usage in space is different than on Earth. You need distinct tiers for "ingest," "processing," and "archive."
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 6, width: "100%" }}>
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
                          Module D: NVMe "Scratchpad" (Hot Storage)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Tech: SLC (Single-Level Cell) Industrial SSDs. Extremely fast read/write.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: Immediate buffering of high-res satellite imagery for real-time AI processing.
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
                          Module E: The "Vault" (Cold Storage)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Tech: High-density 3D NAND Flash (100TB+ bricks).
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: Storing raw data to be physically downlinked later, or keeping multiple versions of Large Language Models (LLMs) ready to load.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* The Connectivity Cards (The "Mouth") */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    3. Connectivity
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    Just like choosing a Network Interface Card (NIC), customers pick how their node talks to the universe.
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 6, width: "100%" }}>
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
                          Module F: The "Sniper" (Optical/Laser Terminal)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Specs: 100 Gbps+ Laser Link. This creates the "Space Cloud."
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Function: Point-to-point connection to other satellites (e.g., Starlink, SDA Transport Layer, or observation satellites).
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
                          Module G: The "Broadcaster" (High-Gain RF Antenna)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Specs: Ka-Band steerable dish.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Function: High-bandwidth downlink to Earth ground stations.
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
                          Module H: The "Listener" (IoT Receiver)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Specs: Software Defined Radio (SDR) array.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Function: Picking up signals from shipping containers, ocean buoys, or phones on Earth to process locally.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Utility Backpacks (The "Life Support") */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    4. Utility
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    These modules are added based on the power/heat needs of the Compute Bricks selected above.
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
                          Module I: The "Radiator" (Thermal Management)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Function: A deployable fluid loop panel.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Why it's needed: If a customer picks the "Hot Rod" AI chip, they must attach this module to dump the 500W+ of heat into deep space, or the chip will melt.
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
                          Module J: The "Battery" (Power Extension)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Function: Modular Lithium-ion packs.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Why it's needed: If the AI model needs to run while the satellite is in Earth's shadow (eclipse) for 45 minutes, extra battery bricks are snapped on to keep the GPUs running without sunlight.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* The Power Generators (The "Power Plant") */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    5. Power
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    Standard satellites have fixed solar wings. For an AI factory, you need to order power by the kilowatt based on how many "Hot Rod" chips you are installing.
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 6, width: "100%" }}>
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
                          Module K: The "Scroll" (ROSA-Style Deployable Array)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Tech: Roll-Out Solar Array (flexible blankets that unroll like a party horn or scroll).
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Capacity: 20kW – 50kW per wing.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Why it's needed: These are surprisingly light and compact during launch. If your AI cluster needs 100kW, you don't build a new satellite; you just snap on two extra "Scroll" modules to the truss.
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
                          Module L: The "Panel" (Body-Mounted Array)
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Tech: Rigid Gallium Arsenide cells bolted directly to the structure.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: 1
                          }}
                        >
                          Capacity: 1kW – 3kW.
                        </Typography>
                        <Typography
                          sx={{
                            color: "#cccccc",
                            fontSize: "1.1rem",
                            mb: { xs: 6, md: 0 }
                          }}
                        >
                          Use Case: Ideal for the "Tank" or "Listener" nodes that don't need much power but need to be highly agile (no flimsy wings flapping around during maneuvers).
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Example Configuration */}
                  <Typography
                    variant="h4"
                    color="#ffffff"
                    sx={{ mt: 6, mb: 3, fontSize: "1.5rem", fontWeight: 600 }}
                  >
                    Example Configuration: "The Ocean Watcher"
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: 900 }}
                  >
                    A maritime logistics company wants to track ships and predict port congestion.  They would build their Payload-as-a-Service node using these components:
                  </Typography>

                  <Box sx={{ mb: 4, maxWidth: 900 }}>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      1x Module H (Listener): To pick up AIS beacons from ships.
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      1x Module F (Sniper): To receive optical images from a partner's spy satellite.
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      2x Module B (Hot Rod): To run computer vision algorithms that match the ship beacon to the ship image (verifying identity).
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      1x Module I (Radiator): To cool the two Hot Rod chips.
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      1x Module G (Broadcaster): To beam only the final report ("Ship X is at Port Y") down to Earth.
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      1x Module K (Scroll - Mini Variant): A full-scale AI training cluster might need huge arrays, but for this specific inference mission (2 chips), a smaller, single-wing deployable ROSA (approx 2kW - 5kW) is required. This ensures the AI chips can run at 100% utilization rather than being throttled down to save power.
                    </Typography>
                    <Typography color="#ffffff" sx={{ mb: 2, fontSize: "1.1rem" }}>
                      2x Module J (Battery): "Ocean watching" is a 24/7 job. Ships don't stop moving at night. Without these heavy-duty battery packs, the AI nodes would have to shut down every time the satellite enters the Earth's shadow (approx. 40 minutes of every 90-minute orbit). You cannot have 40% downtime in a security product.
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    color="#ffffff"
                    sx={{ mt: 4, mb: 2, fontSize: "1.25rem", fontWeight: 600 }}
                  >
                    The "Clean Path to Scale":
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 4, maxWidth: 900 }}
                  >
                    If the customer realizes their AI is too slow, Orbital doesn't de-orbit the satellite. On the next servicing mission, they simply fly up two more Module B (Hot Rods) and a Module J (Battery), and a robot snaps them onto the existing structure, instantly doubling the processing power of the orbital factory.
                  </Typography>

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
          {/* <Box
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
          </Box> */}
        </Container>
      </Box>
    </>
  );
}
