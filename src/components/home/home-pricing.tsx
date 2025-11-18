// components/home/home-pricing.tsx
import type { FC } from 'react';
import { Card, CardContent, CardActions, Box, Container, Typography, Grid, Button } from '@mui/material';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink?: string;
}

interface HomePricingProps {
  colorScheme?: 'light' | 'dark';
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: '$250/mo',
    description: 'For early stage teams looking to validate Audience Flow on real campaigns.',
    features: [
      'Up to 50K page views/mo',
      '1 landing domain',
      'Unlimited variants',
      'Basic traffic source targeting',
      'Basic behavioral targeting',
      'Email support',
      "You're gonna love it"
    ],
    ctaText: 'Start Free Trial',
    ctaLink: '#'
  },
  {
    title: 'Growth',
    price: '$1,000/mo',
    description: 'Real-time, advanced personalization to drive growth at scale.',
    features: [
      'Up to 500K page views/mo',
      '3 landing domains',
      'Advanced traffic source targeting',
      'Advanced behavioral & CRM targeting',
      'Conversion optimization AI',
      'Audience segment insights',
      'Premium support'
    ],
    ctaText: 'Start Free Trial',
    ctaLink: '#'
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    description: 'Full power Audience Flow for enterprises & large marketing teams.',
    features: [
      'Unlimited page views',
      'Unlimited landing domains',
      'Custom integrations',
      'Dedicated CSM',
      'Conversion experiments consulting',
      'SLA & priority support',
      'White labeling options'
    ],
    ctaText: 'Contact Sales',
    ctaLink: '/contact'
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  highlighted?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({ plan, highlighted = false }) => {
  return (
    <Card
      elevation={highlighted ? 8 : 3}
      sx={{
        borderRadius: 2,
        overflow: 'visible',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        minWidth: 280,
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: highlighted
            ? '0 8px 16px rgba(0, 0, 0, 0.3)'
            : '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {highlighted && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'primary.main',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
          }}
        >
          Most Popular
        </Box>
      )}
      <CardContent sx={{ pt: highlighted ? 4 : 3 }}>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {plan.title}
        </Typography>
        <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
          {plan.price}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {plan.description}
        </Typography>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          {plan.features.map((feature, index) => (
            <Typography key={index} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              • {feature}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          href={plan.ctaLink}
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          {plan.ctaText}
        </Button>
      </CardActions>
    </Card>
  );
};

export const HomePricing: FC<HomePricingProps> = ({ colorScheme = 'dark', ...props }) => (
  <Box
    sx={{
      backgroundColor: '#000000',
      pb: 20,
      pt: 0,
    }}
    {...props}
  >
    <Container
      maxWidth="lg"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        align="center"
        color={colorScheme === 'dark' ? 'primary.contrastText' : 'text.disabled'}
        variant="h1"
        sx={{ mb: 8 }}
      >
        Pricing that scales with your growth
      </Typography>
      
      <Grid container spacing={{ xs: 8, md: 4 }} sx={{ mt: 4, justifyContent: 'center' }}>
        {pricingPlans.map((plan, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ mt: index !== 1 ? '8.5px' : 0 }}>
              <PricingCard plan={plan} highlighted={index === 1} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
