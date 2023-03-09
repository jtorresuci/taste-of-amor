import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

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
    setDateTime(searchParams.get("dateTime"));
    setMessage(searchParams.get("message"));
    setOption(searchParams.get("option"));
  }, []);

  return (
    <div>
      <Typography variant="h4">Thank you for submitting the form!</Typography>
      <Typography variant="body1">
        We will contact you shortly at {email} or {phone}.
      </Typography>
      <Typography variant="body1">
        Your selected date and time is {dateTime}.
      </Typography>
      <Typography variant="body1">Your message: {message}</Typography>
      <Typography variant="body1">Your option: {option}</Typography>
    </div>
  );
}

export default ThankYou;
