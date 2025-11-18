// /components/home/home-compare.tsx
import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent, Divider } from '@mui/material';
import type { FC } from 'react';

interface HomeCompareProps {
  backgroundColor?: string;
  colorScheme?: 'light' | 'dark';
}

export const HomeCompare: FC<HomeCompareProps> = ({ colorScheme = 'light', ...props }) => {
  return (
    <>
    <Box
      sx={{
        backgroundColor: '#000000',
        pt: { xs: 12, md: 15 },
        pb: 10,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Typography
            align="center"
            color={colorScheme === 'dark' ? 'primary.contrastText' : 'text.disabled'}
            variant="h1"
            sx={{ mb: 8 }}
        >
            How Audience Flow is different — and better
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <img src="/assets/compare.png" alt="Audience Flow Comparison" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
        </Box>

        </Container>

    </Box>
    </>
  );
};
