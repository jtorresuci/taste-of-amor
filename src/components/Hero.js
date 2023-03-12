import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./Hero.css";
import Carousel from "./Carousel";

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
      {/* <Button variant="contained" color="primary" size="large" >
        Book Now
      </Button> */}
    </Box>
  );
}

export default Hero;
