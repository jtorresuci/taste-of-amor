import React from "react";
import ComingSoon from "../components/ComingSoon";
import Loader from "../components/Loader";
import Carousel from "../components/Carousel";
import { Box } from "@mui/system";
import BookNow from "../components/BookNow";
import Hero from "../components/Hero";

function HomeScreen() {
  return (
    <div>
      {/* <ComingSoon /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // p: "2rem",
          borderRadius: "2rem",
          paddingBottom: "3rem",
          // backgroundColor: "#fce6f2",
          mx: { xs: "0rem", md: "10rem" }, // adjust the horizontal margin for different screen sizes
          my: { xs: "2rem", md: "2rem" }, // adjust the horizontal margin for different screen sizes
        }}
      >
        {" "}
        <Hero />
      </Box>
      <Carousel />
      <BookNow />
    </div>
  );
}

export default HomeScreen;
