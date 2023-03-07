import React from "react";
import { Box, Typography } from "@mui/material";

function ComingSoon() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <Typography variant="h4" align="center">
        <h1>COMING SOON</h1>
        <h4>THIS WEBSITE IS UNDER CONSTRUCTION</h4>
      </Typography>
    </Box>
  );
}

export default ComingSoon;
