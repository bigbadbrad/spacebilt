// /components/layout-wrapper.tsx
'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import { MainNavbarOrbital } from '@/components/main-navbar-orbital';
import { MainNavbarSpacebilt } from '@/components/main-navbar-spacebilt';
import { Footer } from '@/components/footer';
import { Footer as FooterSpaceBilt } from '@/components/footer-spacebilt';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isSpaceBiltRoute = pathname?.startsWith('/spacebilt');

  const Navbar = isSpaceBiltRoute ? MainNavbarSpacebilt : MainNavbarOrbital;
  const FooterComponent = isSpaceBiltRoute ? FooterSpaceBilt : Footer;

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', backgroundColor: '#000000', minHeight: '100vh' }}>
      <Navbar colorScheme="dark" />
      <Box
        component="main"
        sx={{
          paddingTop: '40',
          backgroundColor: '#000000',
          '@media (max-width:600px)': {
            paddingTop: '80px',
          },
        }}
      >
        {children}
      </Box>
      <FooterComponent colorScheme="dark" />
    </Box>
  );
}
