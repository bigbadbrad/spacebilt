'use client';

// /components/home/home-investment-index.tsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Marquee from "react-fast-marquee";

interface TickerData {
  symbol: string;
  name: string;
  price: number | null;
  change: number | null;
  isPrivate?: boolean;
}

export const InvestmentIndex: React.FC = () => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStockPrices() {
      try {
        const response = await fetch('/api/stock-prices');
        if (!response.ok) {
          throw new Error('Failed to fetch stock prices');
        }
        const data: TickerData[] = await response.json();
        setTickers(data);
      } catch (error) {
        console.error('Error fetching stock prices:', error);
        // Fallback to placeholder data
        setTickers([
          { symbol: 'VOYG', name: 'Voyager Space', price: null, change: null },
          { symbol: 'RKLB', name: 'Rocket Lab USA', price: null, change: null },
          { symbol: 'ASTS', name: 'AST SpaceMobile', price: null, change: null },
          { symbol: 'LMT', name: 'Lockheed Martin', price: null, change: null },
          { symbol: 'NOC', name: 'Northrop Grumman', price: null, change: null },
          { symbol: 'LHX', name: 'L3Harris Technologies', price: null, change: null },
          { symbol: 'NVDA', name: 'NVIDIA', price: null, change: null },
          { symbol: 'SPCX', name: 'SpaceX', price: null, change: null, isPrivate: true },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchStockPrices();
    
    // Refresh prices every 60 seconds
    const interval = setInterval(fetchStockPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number | null, isPrivate?: boolean): string => {
    if (isPrivate) return 'Private';
    if (price === null) return '—';
    return `$${price.toFixed(2)}`;
  };

  const formatChange = (change: number | null): string => {
    if (change === null) return '';
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}`;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        borderTop: "1px solid #222222",
        borderBottom: "1px solid #222222",
        py: { xs: 2, md: 3 },
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            fontWeight: 600,
            mb: { xs: 1.5, md: 2 },
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
          Orbital AI Factory Investment Index
        </Typography>
      </Container>
      {loading && tickers.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="body2" sx={{ color: '#888888' }}>
            Loading stock prices...
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            minHeight: { xs: '60px', md: 'auto' },
          }}
        >
          {/* Gradient fade on left edge */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: { xs: '50px', md: '150px' },
              background: 'linear-gradient(to right, #000000, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          {/* Gradient fade on right edge */}
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: { xs: '50px', md: '150px' },
              background: 'linear-gradient(to left, #000000, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={false}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {tickers.map((ticker, index) => (
              <Box
                key={`${ticker.symbol}-${index}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  flexShrink: 0,
                  px: { xs: 2, md: 4 },
                  py: { xs: 0.5, md: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    mr: { xs: 2, md: 3 },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ffffff",
                      fontSize: { xs: "0.9rem", md: "1.1rem" },
                      fontWeight: 700,
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {ticker.symbol}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#888888",
                      fontSize: { xs: "0.65rem", md: "0.75rem" },
                      mt: 0.25,
                    }}
                  >
                    {ticker.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    mr: { xs: 2, md: 3 },
                    minWidth: { xs: "70px", md: "90px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: ticker.isPrivate ? "#888888" : "#ffffff",
                      fontSize: ticker.isPrivate 
                        ? { xs: "0.75rem", md: "0.875rem" }
                        : { xs: "0.9rem", md: "1.1rem" },
                      fontWeight: 600,
                      fontFamily: ticker.isPrivate ? "inherit" : "monospace",
                      textTransform: ticker.isPrivate ? "uppercase" : "none",
                      letterSpacing: ticker.isPrivate ? "0.05em" : "normal",
                    }}
                  >
                    {formatPrice(ticker.price, ticker.isPrivate)}
                  </Typography>
                  {ticker.change !== null && !ticker.isPrivate && (
                    <Box
                      sx={{
                        backgroundColor: ticker.change >= 0 ? "#4CAF50" : "#f44336",
                        px: { xs: 1, md: 1.5 },
                        py: 0.25,
                        borderRadius: 0.5,
                        mt: 0.5,
                        display: "inline-block",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ffffff",
                          fontSize: { xs: "0.65rem", md: "0.75rem" },
                          fontWeight: 600,
                          fontFamily: "monospace",
                        }}
                      >
                        {formatChange(ticker.change)}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <Box
                  sx={{
                    width: { xs: "4px", md: "6px" },
                    height: { xs: "4px", md: "6px" },
                    borderRadius: "50%",
                    backgroundColor: "#6b95ac",
                    mx: { xs: 2, md: 3 },
                    opacity: 0.6,
                  }}
                />
              </Box>
            ))}
          </Marquee>
        </Box>
      )}
    </Box>
  );
};
