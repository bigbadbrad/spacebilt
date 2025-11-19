// /components/main-navbar.tsx
'use client';

import React from 'react';
import type { FC } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import WebAssetIcon from '@mui/icons-material/WebAsset';

import { Logo } from './logo';
import { LogoThin } from './logo-thin';
import { LogoMoney } from './logo-money';
import { LogoBigA } from './logo-big-a';
import { LogoCool } from './logo-cool';

import { usePopover } from '@/hooks/use-popover';
import { UserPopover } from './auth/user-popover';

interface MainNavbarProps {
  colorScheme?: 'light' | 'dark';
}

export const MainNavbar: FC<MainNavbarProps> = ({ colorScheme = 'dark' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const userPopover = usePopover<HTMLButtonElement>();
  const pathname = usePathname();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const mobileMenuOpen = Boolean(anchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    userPopover.handleClose();
    handleMobileMenuClose();
  }, [pathname]);

  const logoFillColor = colorScheme === 'dark' ? '#ffffff' : '#1e1e1f';
  const textColor = colorScheme === 'dark' ? '#d1d1d2' : '#444444';

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: colorScheme === 'dark' ? '#1d1d1f' : '#fafafc',
          color: colorScheme === 'dark' ? 'text.secondary' : 'text.primary',
          borderTop: colorScheme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.24)'
            : '1px solid rgba(0, 0, 0, 0.12)',
          borderBottom: colorScheme === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.24)'
            : '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            px: 2,
            display: 'grid',
            gridTemplateColumns: { xs: 'auto 1fr auto', sm: '1fr auto 1fr' },
            alignItems: 'center',
          }}
        >

          {/* CENTER — Logo */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gridColumn: { xs: '2 / 3', sm: '2 / 3' },
            }}
          >
            <Link href="/" passHref>
              <Box
                sx={{
                  width: { xs: '210px', sm: '70%' },
                  maxWidth: '350px',
                  height: 'auto',
                  mx: 'auto',
                }}
              >
                <LogoThin height={isMobile ? 18 : 26} fill={logoFillColor} />
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
