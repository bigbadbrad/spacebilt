// /components/home/home-signals.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export const Signals: React.FC<{ companyName?: string }> = ({ companyName = "SpaceBilt" }) => {
  const signals = [
    { quote: 'In-orbit data centers market projected to $39B by 2035 (67% CAGR).', source: 'GlobeNewswire' },
    { quote: 'In-space manufacturing forecast to $62.8B by 2040.', source: 'Dawnbreaker' },
    { quote: 'Alphabet (Project Suncatcher), SpaceX, Starcloud, Bezos publicly backing orbital data center concepts.', source: '' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes signals-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}} />
      <Box
        sx={{
          backgroundColor: "#000000",
          borderTop: "1px solid #222222",
          borderBottom: "1px solid #222222",
          py: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "signals-scroll 30s linear infinite",
          }}
        >
        {/* Duplicate content for seamless loop */}
        {[...signals, ...signals].map((signal, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              px: 4,
              minWidth: "fit-content",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                fontSize: "0.875rem",
                mr: 2,
              }}
            >
              {signal.quote}
            </Typography>
            {signal.source && (
              <Typography
                variant="body2"
                sx={{
                  color: "#cccccc",
                  fontSize: "0.75rem",
                  fontStyle: "italic",
                }}
              >
                {signal.source}
              </Typography>
            )}
            <Box
              sx={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                mx: 3,
              }}
            />
          </Box>
        ))}
        </Box>
      </Box>
    </>
  );
};

