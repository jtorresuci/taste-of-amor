import { TextField } from "@mui/material";
import React from "react";

function EmailField(props) {
  const [emailError, setEmailError] = React.useState(false);

  const validateEmail = (email) => {
    // regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isValid = validateEmail(emailValue);

    setEmailError(!isValid);
    props.handleChange(event);
  };

  return (
    <TextField
      label="Email"
      type="email"
      name="email"
      value={props.email}
      onChange={handleEmailChange}
      error={emailError}
      helperText={emailError ? "Invalid email address" : ""}
      sx={{ mb: 2, width: "100%" }}
      required
    />
  );
}

export default EmailField;
