// /components/footer.tsx
"use client";

import type { FC } from 'react';
import { Box, Container, Typography, Button, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { Logo } from './logo';
import { Icon } from './icon';
import { IconWide } from './icon-wide';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FooterProps {
  colorScheme?: 'light' | 'dark';
}

export const Footer: FC<FooterProps> = ({ colorScheme = 'dark' }) => {
  const iconColor = colorScheme === 'dark' ? '#d1d1d2' : '#444444';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
  <Box
    sx={{
      backgroundColor: colorScheme === 'dark' ? '#000000' : '#f3f3f6',
      textAlign: 'center',
      pt: 8,
      pb: 10,
      color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
    }}
  >
    <Container maxWidth="md">
    <Box
        sx={{
          flexDirection: 'column', // Stack children vertically
          display: 'flex', // Enable flexbox
          alignItems: 'center', // Center items horizontally in the box
          marginBottom: 4, // Space before copyright
        }}
      >
        
        <Link href="/" style={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ mt: 1, mb: 0, width: { xs: '40%', sm: '40%' } }}>
            <Icon fill={iconColor} />
          </Box>
        </Link>
        <Typography variant="h6" sx={{ pt: 1, pb: 3, }}>
        We build the data centers that live in space.
        </Typography>

        <Box
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: {
              xs: 'row', // Vertical on mobile devices
              md: 'row',    // Horizontal on desktop devices
            },
            alignItems: 'center',
            justifyContent: 'center', // Center items when in row mode
            width: '100%',
          }}
        >
          <Link href="/">
              <Button sx={{ color: iconColor, textTransform: 'none' }}>About</Button>
            </Link>
            <Link href="/">
              <Button sx={{ color: iconColor, textTransform: 'none' }}>Privacy</Button>
            </Link>
            <Link href="/">
              <Button sx={{ color: iconColor, textTransform: 'none' }}>Press</Button>
            </Link>
            <Tooltip title="hello@audienceflow.co">
              <Button sx={{ color: iconColor, textTransform: 'none' }}>Contact</Button>
            </Tooltip>
        </Box>

        <Box
  sx={{
    pt: 0,
    display: 'flex',
    flexDirection: {
      xs: 'row',
      md: 'row',
    },
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }}
>
  <a
    href="https://x.com/spacebilt"
    target="_blank"
    rel="noopener noreferrer"
  >
    <XIcon
      sx={{
        color: colorScheme === 'dark' ? '#d1d1d2' : '#444444',
        fontSize: '2.6rem',
        mx: '0.4rem',
      }}
    />
  </a>
</Box>


      <Typography
              variant="subtitle1"
              sx={{
                pt: 3,
                pb: 5,
              }}
            >
              © 2026 SpaceBilt<br />
              All Rights Reserved.
            </Typography>
      </Box>
    </Container>
  </Box>
  );
};
