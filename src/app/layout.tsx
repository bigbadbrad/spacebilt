// /app/layout.tsx
import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';
import { Box } from '@mui/material';
import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { MainNavbar } from '@/components/main-navbar';
import { Footer } from '@/components/footer';
import { GoogleAnalytics } from '@/utils/GoogleAnalytics';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>
              <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', backgroundColor: '#000000', minHeight: '100vh' }}>
                <MainNavbar colorScheme="dark" />
                <Box
                  component="main"
                  sx={{
                    paddingTop: '40',
                    backgroundColor: '#000000',
                    '@media (max-width:600px)': {
                      paddingTop: '150px',
                    },
                  }}
                >
                  {children}
                </Box>
                <Footer colorScheme="dark" />
              </Box>
            </ThemeProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
