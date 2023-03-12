import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

function ThankYou() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setName(searchParams.get("name"));
    setEmail(searchParams.get("email"));
    setPhone(searchParams.get("phone"));
    setDateTime(searchParams.get("date") + " " + searchParams.get("time"));
    setMessage(searchParams.get("message"));
    setOption(searchParams.get("option"));
  }, []);

  const formattedDateTime = dayjs(dateTime).format("MM/DD/YYYY h:mm A");

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
  >      <Typography variant="h4">Thank you for submitting the form!</Typography>
      <Typography variant="body1">
        We will contact you shortly at {email} or {phone}.
      </Typography>
      <Typography variant="body1">
        Your selected date and time is {formattedDateTime}.
      </Typography>
      <Typography variant="body1">Your message: {message}</Typography>
      <Typography variant="body1">Your option: {option}</Typography>
</Box>  );
}

export default ThankYou;
