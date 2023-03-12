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
          p: "2rem",
          borderRadius: "2rem",
          // backgroundColor: "#fce6f2",
          mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
          my: { xs: ".5rem", md: "1rem" }, // adjust the horizontal margin for different screen sizes
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // p: "2rem",
            borderRadius: "2rem",
            // backgroundColor: "#fce6f2",
            // mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
            my: { xs: ".5rem", md: "2rem" }, // adjust the horizontal margin for different screen sizes
          }}
        >
          {" "}
          <Hero />
        </Box>
        <Carousel />
        <BookNow />
        {/* <Carousel/>
      <Carousel/> */}
      </Box>
      {/* <div className="loader-container">
          <Loader />
        </div>{" "} */}
    </div>
  );
}

export default HomeScreen;
