import React from "react";
import { Box, Divider, Typography } from "@mui/material";

function About() {
  return (

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "2rem",
          borderRadius: "2rem",
          backgroundColor: "#fce6f2",
          mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
          my: { xs: "3rem", md: "8rem" }, // adjust the horizontal margin for different screen sizes

        }}
      >
        
          <Typography variant="h2" align="center">
            About Us
          </Typography>
          <Divider variant="middle" sx={{ width: "80%", my: "0.5rem" }} />

        <Typography variant="h6" align="center" gutterBottom>
          Welcome to our crepe catering business in Orange County, California!
          We are passionate about bringing the authentic taste of French crepes
          to your events, parties, and celebrations.
        </Typography>
        <Divider variant="middle" sx={{ width: "50%", my: "0.5rem" }} />

        <Typography variant="body1" align="left">
        <br />
        <br />
          Our crepes are made fresh to order using high-quality ingredients, and
          we offer a variety of sweet and savory flavors to satisfy everyone's
          taste buds, from classic Nutella and strawberries to gourmet ham and
          cheese or vegetarian options.
          <br />
          <br />
          Whether you're planning a corporate event, a wedding, a birthday
          party, or any other special occasion, our experienced chefs and
          friendly staff will provide a professional and personalized service
          that exceeds your expectations. We can set up our mobile crepe station
          at your venue, or deliver and serve our crepes directly to your
          guests, ensuring a hassle-free and delicious experience.
          <br />
          <br />
          We take pride in our commitment to sustainability and community, and
          strive to minimize our environmental impact and support local farmers
          and businesses. We are fully licensed, insured, and compliant with all
          health and safety regulations, so you can enjoy our crepes with peace
          of mind.
          <br />
          <br />
          Thank you for considering our crepe catering for your next event.
          Contact us today to discuss your needs and receive a free quote. Bon
          appétit!
        </Typography>
      </Box>

  );
}

export default About;
