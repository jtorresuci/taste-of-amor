import React from "react";
import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

function PaymentError() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:"4rem",
        borderRadius: "2rem",
        backgroundColor: "#f8d7da", // light red background color
        mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
          my: { xs: "3rem", md: "8rem" }, // adjust the horizontal margin for different screen sizes

      }}
    >
      <ErrorOutline sx={{ fontSize: 50, color: "#721c24" }} />
      <Typography variant="h6" align="center" gutterBottom>
        Unable to process payment
      </Typography>
      <Typography variant="body1" align="center">
        We're sorry, but we were unable to process your payment. Please check
        your payment information and try again later.
      </Typography>
    </Box>
  );
}

export default PaymentError;
