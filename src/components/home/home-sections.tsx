// /components/home/home-sections.tsx
import React from "react";
import Link from 'next/link';
import { Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, List, ListItem, ListItemText, Divider } from "@mui/material";
import { PowerIcon } from "@/components/icons/power";
import { StructureIcon } from "@/components/icons/structure";
import { NetworkIcon } from "@/components/icons/network";
import { RadiationIcon } from "@/components/icons/radiation";
import { LaserIcon } from "@/components/icons/laser";
import { OrbitIcon } from "@/components/icons/orbit";

// Reusable gradient line constant
const gradientLineStyle = {
  height: '1px',
  width: '100%',
  display: 'block',
  background: 'linear-gradient(90deg, #e4f6f0, #9dcfca 31%, #6b95ac 68%, #45657d)',
  mb: 2,
};

// Reusable gradient line component
const GradientLine: React.FC<{ sx?: any }> = ({ sx }) => (
  <Box component="div" sx={{ ...gradientLineStyle, ...sx }} />
);

// Gradient icon wrapper component - applies gradient fill to SVG icons
const GradientIcon: React.FC<{ children: React.ReactNode; sx?: any }> = ({ children, sx }) => {
  const gradientId = React.useMemo(() => `gradient-${Math.random().toString(36).substr(2, 9)}`, []);
  
  // Extract height from child icon props, default to 48px
  const childElement = children as React.ReactElement;
  const iconHeight = childElement?.props?.height || '48px';
  const heightValue = typeof iconHeight === 'number' ? `${iconHeight}px` : iconHeight;
  
  return (
    <Box
      sx={{
        width: heightValue,
        height: heightValue,
        mb: 2,
        position: 'relative',
        display: 'block',
        ...sx,
      }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e4f6f0" />
            <stop offset="31%" stopColor="#9dcfca" />
            <stop offset="68%" stopColor="#6b95ac" />
            <stop offset="100%" stopColor="#45657d" />
          </linearGradient>
        </defs>
      </svg>
      {React.cloneElement(childElement, {
        fill: `url(#${gradientId})`,
      })}
    </Box>
  );
};


// ***** What is the Orbital Data Stack *****
export const What: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b1b1d",
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
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2, maxWidth: '66%' }}>
              What is the Orbital Data Stack?
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
              Three-layer breakdown:
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
                    1. Orbital Compute & Storage
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Ruggedized servers and SSD arrays designed for radiation, vacuum, and thermal extremes — from 100+ TB LiSS units to petabyte-class AxODC nodes on the ISS.
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
                    2. Data Center Integration
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Power, cooling, networking, and optical links that turn individual servers into a true orbital data center — including AxODC Node ISS with high-speed optical backhaul.
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
                    3. Orbital Logistics & Lifecycle
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Design, qualification, launch integration, on-orbit operations, upgrades, and repurposing — so capacity can be added, moved, and modernized without de-orbiting hardware.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h5" color="#ffffff" sx={{ mt: 3, mb: 3, maxWidth: '66.67%' }}>
              SpaceBilt is the only company with flight-proven hardware and partnerships across every layer of the Orbital Data Stack. Multiple Orbital Data Stack nodes on a station come together to form an Orbital AI Factory.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


// ***** Why the Orbital Data Stack is hard *****
export const WhyOrbitalDataStack: React.FC = () => {
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
            {/* Drop an illustration / diagram of the Orbital AI Factory here */}
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
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              Why the Orbital Data Stack is hard.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
              Four things most companies can't do — and SpaceBilt already has:
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
                  1. Petabyte-class hardware in brutal environments
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  We've flown 100+ TB Large in-Space Servers on the ISS exterior and delivered the first commercial data server to the Moon, proving enterprise-class compute and storage can survive radiation, vacuum, and extreme thermal swings.
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
                  2. Real data center nodes, not one-off payloads
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  We're leading the engineering and payload implementation of Axiom's Orbital Data Center Node ISS — a petabyte-scale, optically connected infrastructure node that satellites, spacecraft, and stations can use as shared compute and storage, not just a single experiment.
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
                  3. Making COTS AI chips work in high-radiation environments
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  We're not building custom rad-hard chips — we're running H100-class commercial GPUs in orbit using system-level mitigation: shielded compute pods, ECC everywhere, watchdog logic, checkpoint/rollback, and workload-level redundancy. This lets us deploy cutting-edge AI hardware at scale while tolerating single-event upsets and long-term dose effects.
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
                  4. The lifecycle nobody sees
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  As an ISS National Lab implementation partner, we handle flight qualification, launch integration, on-orbit operations, and remote control through platforms like SMART-1 — and we're designing orbital logistics to upgrade, move, and repurpose capacity without de-orbiting hardware.
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h5" color="#ffffff" sx={{ mt: 2, mb: 3 }}>
              Very few companies on Earth can deliver the full Orbital Data Stack. SpaceBilt is one of them — and we've already flown most of it. That's why we're in a position to build the first true Orbital AI Factories.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// ***** We enable the outer edge of AI *****
export const OuterEdge: React.FC = () => {
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
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={0}
        >
          {/* Left: Text */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 1, md: 1 },
              textAlign: { xs: "left", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pl: { xs: 0, md: 4 },
              pb: { xs: 2, md: 6 },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <GradientIcon>
                <OrbitIcon height="64px" />
              </GradientIcon>
            </Box>
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              We enable the outer edge of AI.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 4, mb: 3 }}
            >
              SpaceBilt accelerates the velocity of data on the outer edge by moving compute and storage off the ground and into orbit and onto the Moon. Multiple <Box component="span" sx={{ color: "#ffffff" }}>Orbital Data Stack</Box> nodes on a station come together as an <Box component="span" sx={{ color: "#ffffff" }}>Orbital AI Factory</Box> – a cluster where raw feeds from telescopes, sensor constellations, factories, and spacecraft are turned into decisions on the spot, not after a round trip to Earth. Instead of hauling data home, models run in space, filtering, fusing, and acting in real time. That means faster decisions, lighter downlinks, and AI systems that keep working even when Earth is far away, congested, or completely offline.
            </Typography>
          </Grid>

          {/* Right: Visual placeholder */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 2, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              mt: { xs: 0, md: 0 },
              pl: { xs: 0, md: 4 },
            }}
          >
            {/* Drop an illustration / diagram here */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// *****  How you actually build an orbital data center *****
export const HowYouBuild: React.FC = () => {
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
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              How you actually build an orbital data center.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
              Everyone's deck says the same four words: modular, resilient, scalable, maintainable. On the ground, that's a slide. In orbit, it's a set of brutal engineering constraints you either solve in hardware or you don't fly.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
              At SpaceBilt, the Orbital Data Stack is built around three realities:
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
                  You design for orchestration, not boxes.
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  {`A "module" in orbit isn't just a metal can with compute inside. It's a self-contained power, thermal, network, and storage envelope that can be scheduled, throttled, and replaced without touching the rest of the stack. We standardize those envelopes so that a LiSS server, a sensor processor, or a manufacturing controller all plug into the same backbone and can be reconfigured like cloud instances, not one-off satellites.`}
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
                  Serviceability is an interface problem, not a slogan.
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  {`Saying you can swap containers is easy; doing it in microgravity, on a station with safety constraints, is not. We collapse power, data, and cooling into a small set of repeatable interfaces and keep moving parts out of the critical path, so an astronaut, robot, or ISAM vehicle can remove and replace a node without taking the rest of the data center down. That's how you get to 10+ years of useful life without a "rip and replace" event.`}
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
                  Resiliency is graceful failure, not wishful redundancy.
                </Typography>
                <Typography
                  sx={{
                    color: "#cccccc",
                    fontSize: "1.1rem",
                    mb: 6
                  }}
                >
                  Single points of failure in orbit aren't just outages, they're lost missions. We assume radiation hits, thermal excursions, and partial brownouts are normal operating conditions, and architect the Orbital AI Factory to degrade in slices: lose one node, one link, or one rail and the system keeps running at reduced capacity instead of going dark. That's what lets you accelerate the velocity of data on the outer edge without betting the mission on perfect conditions.
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
              Whitepapers describe how orbital data centers should work. SpaceBilt's Orbital Data Stack is how they actually do — with the interfaces, envelopes, and failure modes already proven in space. It's the foundation every Orbital AI Factory we build runs on.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};


// ***** Orbital AI Factory Specs & Details *****
export const OrbitalAIFactorySpecs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1b1b1d",
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
                mb: 0,
                textAlign: { xs: 'left', md: 'left' },
              }}
            >
              ORBITAL AI FACTORY
            </Typography>
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              1 MW Class Node
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, fontStyle: "italic" }}>
              Concept reference design for free-flying SpaceBilt nodes
            </Typography>

            <Typography variant="h5" color="white" sx={{ mt: 4, mb: 4, fontWeight: 600 }}>
              Mission Profile
            </Typography>
            <Box
              sx={{
                mb: 6,
                maxWidth: { xs: '100%', md: '50%' },
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  Role
                </Typography>
                <Typography variant="h6" color="white" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  High-density AI compute + storage node in low Earth orbit
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  Use cases
                </Typography>
                <Box component="ul" sx={{ color: "#cccccc", pl: 3, m: 0, listStyle: 'none' }}>
                  <Box component="li" sx={{ mb: 1.5, fontSize: '1.1rem', lineHeight: 1.6, position: 'relative', pl: 2.5 }}>
                    <Box
                      component="span"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6em',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    On-orbit AI inference and training near telescopes, sensor constellations, stations, in-space factories
                  </Box>
                  <Box component="li" sx={{ mb: 1.5, fontSize: '1.1rem', lineHeight: 1.6, position: 'relative', pl: 2.5 }}>
                    <Box
                      component="span"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6em',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    Data reduction + compression at the edge
                  </Box>
                  <Box component="li" sx={{ mb: 0, fontSize: '1.1rem', lineHeight: 1.6, position: 'relative', pl: 2.5 }}>
                    <Box
                      component="span"
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6em',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    Secure orbital data center for commercial, defense, and science payloads
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 3, sm: 6 } }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    Orbit
                  </Typography>
                  <Typography variant="h6" color="white" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Sun-synchronous LEO, ~600–700 km, ~97–98° inclination
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    Design life
                  </Typography>
                  <Typography variant="h6" color="white" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                    5–10 years, robotically serviceable
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="h5" color="white" sx={{ mt: 8, mb: 4, fontWeight: 600 }}>
              Node at a Glance
            </Typography>
            <Grid container spacing={6} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pr: { md: 3 },
                  }}
                >
                  <GradientIcon>
                    <PowerIcon height="56px" />
                  </GradientIcon>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Power & Scale
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem", mb: 1.5 }}>
                    • Peak electrical power (Sunlit): ~1 MW (scalable)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem", mb: 1.5 }}>
                    • AI compute pods per node: 4–8 modular pods on a central spine
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem", mb: 1.5 }}>
                    • Thermal rejection: ~1 MW thermal via deployable radiator assemblies
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pl: { md: 3 },
                  }}
                >
                  <GradientIcon>
                    <StructureIcon height="56px" />
                  </GradientIcon>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Structure & Servicing
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem", mb: 1.5 }}>
                    • Main structure: 25–40 m lattice spine with ROSA-class solar wings on each end
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem", mb: 1.5 }}>
                    • Designed for robotic swap-out of pods, radiators, and arrays
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={6} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Link href="/orbital-ai-factory/network-interconnect" style={{ textDecoration: "none" }}>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      pr: { md: 3 },
                    }}
                  >
                    <GradientIcon>
                      <LaserIcon height="56px" />
                    </GradientIcon>
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Network & Interconnect
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem" }}>
                      Instead of isolated "AI satellites," the Orbital AI Factory operates as a distributed, laser-linked supercomputer in low Earth orbit, designed for high-bandwidth, synchronised AI workloads.
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pl: { md: 3 },
                  }}
                >
                  <GradientIcon>
                    <RadiationIcon height="56px" />
                  </GradientIcon>
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Radiation & Reliability
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem" }}>
                    <strong>Radiation-aware AI pods:</strong> H100-class AI stacks run inside shielded compute pods with ECC, scrubbing, watchdogs and workload-level redundancy, so the system tolerates single-event upsets and long-term dose while still using mostly commercial hardware.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography variant="h5" color="white" sx={{ mt: 8, mb: 4, fontWeight: 600 }}>
              Explore the Details
            </Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/nodes" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000",
                      p: 3,
                      height: "100%",
                      borderRadius: 1,
                      border: "1px solid #333333",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor: "#555555",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Node Architecture
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1rem", mb: 2 }}>
                      Structure, spine design, modularity, and robotic servicing interfaces
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#297BC4", fontSize: "1rem", fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/compute-pods" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000",
                      p: 3,
                      height: "100%",
                      borderRadius: 1,
                      border: "1px solid #333333",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor: "#555555",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Compute Pods
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1rem", mb: 2 }}>
                      Physical specs, AI compute configurations, storage, networking, and pod-level power/thermal
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#297BC4", fontSize: "1rem", fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/solar-power" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000",
                      p: 3,
                      height: "100%",
                      borderRadius: 1,
                      border: "1px solid #333333",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor: "#555555",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Solar Power
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1rem", mb: 2 }}>
                      ROSA-class solar arrays and power conversion systems
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#297BC4", fontSize: "1rem", fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/heat-management" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000",
                      p: 3,
                      height: "100%",
                      borderRadius: 1,
                      border: "1px solid #333333",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor: "#555555",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Heat Management
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1rem", mb: 2 }}>
                      Direct liquid cooling and deployable radiator systems
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#297BC4", fontSize: "1rem", fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link href="/orbital-ai-factory/network-interconnect" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#000000",
                      p: 3,
                      height: "100%",
                      borderRadius: 1,
                      border: "1px solid #333333",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor: "#555555",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Network & Interconnect
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1rem", mb: 2 }}>
                      Optical compute fabric and free-space optical links
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#297BC4", fontSize: "1rem", fontWeight: 500 }}>
                      Learn more &gt;
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// ***** ROADMAP *****
export const FourPhaseScalingPath: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 10, md: 20 },
        pb: { xs: 14, md: 18 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #222222",
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
              pb: { xs: 4, md: 6 },
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
              THE ORBITAL AI FACTORY ROADMAP
            </Typography>
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 6, mr: { xs: 4, md: 40 } }}>
              From Edge Nodes to Factory-Class Infrastructure
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 12, maxWidth: "900px" }}>
              An Orbital AI Factory scales in three clear steps. We start with manufacturable 100 kW-class nodes to validate economics and operations in LEO, then scale to megawatt-class factory nodes, and finally unlock the next cost curve with off-Earth manufacturing.
            </Typography>

            <Grid container spacing={12} sx={{ mb: 4 }}>
              <Grid item xs={12} md={4}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <GradientLine />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ffffff",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    Phase 1
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      backgroundImage: 'linear-gradient(90deg, #e4f6f0, #9dcfca 31%, #6b95ac 68%, #45657d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: -1,
                    }}
                  >
                    100 kW
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      mb: 4,
                    }}
                  >
                    edge nodes
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem" }}>
                    Localized AI near sensors. The first truly scalable class of orbital AI infrastructure.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <GradientLine />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ffffff",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    Phase 2
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      backgroundImage: 'linear-gradient(90deg, #e4f6f0, #9dcfca 31%, #6b95ac 68%, #45657d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: -1,
                    }}
                  >
                    1 mW
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      mb: 4,
                    }}
                  >
                    factory nodes
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem" }}>
                    Serviceable, upgradeable orbital data center nodes. Our reference design.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <GradientLine />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ffffff",
                      mt: 2,
                      mb: 1,
                    }}
                  >
                    Phase 3
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      backgroundImage: 'linear-gradient(90deg, #e4f6f0, #9dcfca 31%, #6b95ac 68%, #45657d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: -1,
                    }}
                  >
                    1 eW
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      mb: 4,
                    }}
                  >
                    off-earth manufacturing
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#cccccc", fontSize: "1.1rem" }}>
                    The multi-TW scaling horizon. Lunar/cislunar manufacturing unlocks civilization-scale infrastructure.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Link href="/orbital-ai-factory/roadmap" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" sx={{ color: '#297BC4', fontSize: '1rem', fontWeight: 500 }}>
                View Roadmap &gt;
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// ***** Who the Orbital AI Factory is for *****
export const WhoNeedsOrbitalDataStack: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 10, md: 14 },
        pb: { xs: 14, md: 18 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #222222",
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
              Who the Orbital AI Factory is for.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 900 }}
            >
              As launch gets cheaper and terrestrial data centers hit power and
              cooling walls, the next wave of infrastructure isn’t another
              hyperscale region on Earth — it’s data centers in orbit. The
              Orbital AI Factory is the orbital "region" those customers will build on, powered by our Orbital Data Stack.
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4, width: "100%" }}>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    AI model operators and inference platforms
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Foundation models, real-time copilots, and edge inference engines need cheap solar, free radiative cooling, and proximity to sensors. Off-planet regions let them spin up orbital capacity the way they spin up cloud regions today — without waiting years for a new substation on the ground.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    Earth observation and sensor constellations
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Imaging, weather, RF, and SAR constellations are drowning in raw data. Processing and filtering in orbit — next to the sensors — lets operators downlink products instead of noise, unlock new analytics, and sell 'insights-as-a-service' instead of bandwidth-hungry pixels.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    National security and space-domain awareness
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Defense, intel, and allied space operators need resilient compute close to their assets — to fuse signals, run AI on live feeds, and keep operating when links to the ground are contested or delayed. An orbital data center is the tactical edge node for space.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    Commercial stations and in-space infrastructure
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Stations, depots, and logistics hubs need a way to monetize their real estate beyond hosting experiments. Plugging into our Orbital Data Stack turns them into orbital cloud regions — leasing compute, storage & data services to every spacecraft that flies through their neighborhood.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    In-space manufacturing
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Physical factories in orbit — from semiconductor foundries & fiber lines to biopharma & 3D-printed structures — generate huge volumes of process & sensor data that can't wait to come back to Earth. Our Orbital Data Stack lets manufacturers run AI-driven process control, quality inspection & digital twins next to the line.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                <Box
                  component="div"
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
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
                    ISAM operators
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    ISAM missions use the same infrastructure to coordinate robotic assembly, servicing, and refueling. It's the data backbone for everything we build and repair in space.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 0, mb: 1, maxWidth: 900, fontWeight: 600 }}
            >
              SpaceBilt is building the default Orbital AI Factory those
              customers plug into — the off-planet layer every high-value
              workload will eventually land on.
            </Typography>

            {/* <Typography
              variant="h6"
              color="#cccccc"
              sx={{ mt: 1, maxWidth: 900 }}
            >
              If you believe AI, sensing, and security are moving into space,
              the upside isn’t one more satellite. It’s owning the data centers
              they all depend on. That’s the bet SpaceBilt is giving you.
            </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const Big: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        pt: { xs: 10, md: 18 },
        pb: { xs: 14, md: 18 },
        width: "100%",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #222222",
      }}
    >
      <Container maxWidth="lg">
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
            <Typography variant="h1" color="#ffffff" sx={{ mb: 7 }}>
              Why this is big.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 9, maxWidth: 900 }}
            >
              Over the next decade, three things are going to <span style={{ color: '#ffffff' }}>space</span> at the same time:
            </Typography>
            <Grid container spacing={6} sx={{ mb: 9, maxWidth: 900 }}>
              <Grid item xs={12} md={4}>
                <GradientLine />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                  }}
                >
                  AI factories
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <GradientLine />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                  }}
                >
                  Sensor constellations
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <GradientLine />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                  }}
                >
                  Physical factories
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 900 }}
            >
              ISAM architectures turn orbit into a construction site; 
              in-space manufacturing turns it into an industrial park; 
              AI makes all of it autonomous.
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 900 }}
            >
              None of that works without an Orbital AI Factory to run the robots, close the control loops, and store the data.
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ mb: 4, maxWidth: 900 }}
            >
              That's the layer SpaceBilt is building.
            </Typography>


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
