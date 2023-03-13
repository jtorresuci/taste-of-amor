import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer({ logo }) {
  return (
    <Box sx={{ color: "black", paddingTop: 10 }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "column",
            alignItems: "center",
            marginBottom: { xs: 5, sm: 5 },
          }}
        >
          <Typography variant="body1">Taste of Amor</Typography>
          <Typography variant="body1">714-777-7777</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
        <Link to="/">
        <img src={logo} alt="logo" style={{ height: 40 }} />

        </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.yelp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <i className="fab fa-yelp fa-lg" style={{ color: "black" }}></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <i
              className="fab fa-instagram fa-lg"
              style={{ color: "black" }}
            ></i>
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
