import React from "react";
import { Box, Typography } from "@mui/material";
import "./Hero.css";

function Hero() {
  return (
    <Box className="hero-container">
      <Typography variant="h2" className="hero-title">
        Book Crepe Catering for Your Next Event
      </Typography>
      <Typography variant="h5" className="hero-subtitle">
        Delicious crepes made fresh on-site for weddings, parties, and corporate
        events.
      </Typography>
    </Box>
  );
}

export default Hero;
