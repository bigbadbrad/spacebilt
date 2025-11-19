// /components/home/home-sections.tsx
import React from "react";
import Link from 'next/link';
import { Box, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

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
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              What is the Orbital Data Stack?
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 5 }}>
              Three-layer breakdown:
            </Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h6"
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
                    variant="body2"
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Ruggedized servers and SSD arrays designed for radiation, vacuum, and thermal extremes — from 100+ TB LiSS units to petabyte-class AxODC nodes on the ISS.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h6"
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
                    variant="body2"
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Power, cooling, networking, and optical links that turn individual servers into a true orbital data center — including AxODC Node ISS with high-speed optical backhaul.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundColor: "#000000",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="h6"
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
                    variant="body2"
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
            <Typography variant="h5" color="#ffffff" sx={{ mt: 3, mb: 3 }}>
              SpaceBilt is the only company with flight-proven hardware and partnerships across every layer of the Orbital Data Stack.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

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
            {/* Drop an illustration / diagram of the Orbital Data Stack here */}
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
              pb: { xs: 2, md: 6 },
            }}
          >
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              Why the Orbital Data Stack is hard.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
              Three things most companies can't do — and SpaceBilt already has:
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
              <ListItem disableGutters>
                <ListItemText
                  primary="1. Petabyte-class hardware in brutal environments"
                  secondary="We've flown 100+ TB Large in-Space Servers on the ISS exterior and delivered the first commercial data server to the Moon, proving enterprise-class compute and storage can survive radiation, vacuum, and extreme thermal swings."
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemText
                  primary="2. Real data center nodes, not one-off payloads"
                  secondary="We're leading the engineering and payload implementation of Axiom's Orbital Data Center Node ISS — a petabyte-scale, optically connected infrastructure node that satellites, spacecraft, and stations can use as shared compute and storage, not just a single experiment."
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemText
                  primary="3. The lifecycle nobody sees"
                  secondary="As an ISS National Lab implementation partner, we handle flight qualification, launch integration, on-orbit operations, and remote control through platforms like SMART-1 — and we're designing orbital logistics to upgrade, move, and repurpose capacity without de-orbiting hardware."
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>
            </List>

            <Typography variant="h5" color="#ffffff" sx={{ mt: 2, mb: 3 }}>
              Very few companies on Earth can deliver the full Orbital Data
              Stack. SpaceBilt is one of them — and we've already flown most of
              it.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

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
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              We enable the outer edge of AI.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 4, mb: 3 }}
            >
              SpaceBilt accelerates the velocity of data on the outer edge by moving compute and storage off the ground and into orbit and onto the Moon. Instead of hauling raw feeds back to Earth, models run next to telescopes, sensors, factories, and spacecraft—filtering, fusing, and acting on data in real time. That means faster decisions, lighter downlinks, and AI systems that keep working even when Earth is far away, congested, or completely offline.
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
              pb: { xs: 2, md: 6 },
            }}
          >
            <Typography variant="h2" color="white" sx={{ mt: 0, mb: 2 }}>
              How you actually build an orbital data center.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
              Everyone's deck says the same four words: modular, resilient, scalable, maintainable. On the ground, that's a slide. In orbit, it's a set of brutal engineering constraints you either solve in hardware or you don't fly.
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
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
              <ListItem disableGutters>
                <ListItemText
                  primary="You design for orchestration, not boxes."
                  secondary={`A "module" in orbit isn't just a metal can with compute inside. It's a self-contained power, thermal, network, and storage envelope that can be scheduled, throttled, and replaced without touching the rest of the stack. We standardize those envelopes so that a LiSS server, a sensor processor, or a manufacturing controller all plug into the same backbone and can be reconfigured like cloud instances, not one-off satellites.`}
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemText
                  primary="Serviceability is an interface problem, not a slogan."
                  secondary={`Saying you can swap containers is easy; doing it in microgravity, on a station with safety constraints, is not. We collapse power, data, and cooling into a small set of repeatable interfaces and keep moving parts out of the critical path, so an astronaut, robot, or ISAM vehicle can remove and replace a node without taking the rest of the data center down. That's how you get to 10+ years of useful life without a "rip and replace" event.`}
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>

              <ListItem disableGutters>
                <ListItemText
                  primary="Resiliency is graceful failure, not wishful redundancy."
                  secondary="Single points of failure in orbit aren't just outages, they're lost missions. We assume radiation hits, thermal excursions, and partial brownouts are normal operating conditions, and architect the Orbital Data Stack to degrade in slices: lose one node, one link, or one rail and the system keeps running at reduced capacity instead of going dark. That's what lets you accelerate the velocity of data on the outer edge without betting the mission on perfect conditions."
                  primaryTypographyProps={{
                    color: "#ffffff",
                    sx: { fontWeight: 600, mb: 0.5 },
                  }}
                  secondaryTypographyProps={{ color: "#cccccc" }}
                />
              </ListItem>
            </List>

            <Typography variant="h5" color="text.secondary" sx={{ mt: 4, mb: 3 }}>
              Whitepapers describe how orbital data centers should work. SpaceBilt's Orbital Data Stack is how they actually do — with the interfaces, envelopes, and failure modes already proven in space.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

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
              Who the Orbital Data Stack is for.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 900 }}
            >
              As launch gets cheaper and terrestrial data centers hit power and
              cooling walls, the next wave of infrastructure isn’t another
              hyperscale region on Earth — it’s data centers in orbit. The
              Orbital Data Stack is the layer those customers will build on.
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Stations, depots, and logistics hubs need a way to monetize their real estate beyond hosting experiments. Plugging into our stack turns them into orbital cloud regions — leasing compute, storage & data services to every spacecraft that flies through their neighborhood.
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
                  <Typography
                    sx={{
                      color: "#cccccc",
                      fontSize: "1.1rem",
                    }}
                  >
                    Factories in orbit — from semiconductor foundries and fiber lines to biopharma and 3D-printed structures — generate huge volumes of process and sensor data that can't wait to come back to Earth. Our stack lets manufacturers run AI-driven process control, quality inspection, and digital twins next to the line.
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
                  <Divider sx={{ borderColor: "#333333", mb: 2, mt: 0.5 }} />
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
              SpaceBilt is building the default Orbital Data Stack those
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
        pt: { xs: 10, md: 14 },
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
            <Typography variant="h2" color="#ffffff" sx={{ mb: 3 }}>
              Why this is big.
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 5, maxWidth: 900 }}
            >
              Over the next decade, three things are going to space at the same time:
            </Typography>
            <Grid container spacing={3} sx={{ mb: 5, maxWidth: 900 }}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundColor: "#2d2d2f",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.2rem",
                    }}
                  >
                    AI models
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundColor: "#2d2d2f",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.2rem",
                    }}
                  >
                    Sensor constellations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundColor: "#2d2d2f",
                    p: 3,
                    height: "100%",
                    borderRadius: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "1.2rem",
                    }}
                  >
                    Factories
                  </Typography>
                </Box>
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
              None of that works without an Orbital Data Stack to run the robots, close the control loops, and store the data.
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
