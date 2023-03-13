import { TextField } from '@mui/material';
import React, { useState } from 'react';

function PhoneField(props) {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '').substr(0, 10);
    let formattedValue = '';

    if (numericValue.length > 0) {
      formattedValue += numericValue.substr(0, 3);
    }

    if (numericValue.length > 3) {
      formattedValue += '-' + numericValue.substr(3, 3);
    }

    if (numericValue.length > 6) {
      formattedValue += '-' + numericValue.substr(6);
    }

    if (numericValue.length === 10) {
      setError(false);
    } else {
      setError(true);
    }

    props.handleChange({ target: { name: 'phone', value: formattedValue } });
  };
  
  return (
    <TextField
      label="Phone"
      type="tel"
      name="phone"
      value={props.phone}
      onChange={handleChange}
      sx={{ mb: 2, width: "100%" }}
      inputProps={{ maxLength: 12 }}
      error={error}
      required
      helperText={error ? 'Invalid phone number' : ''}
    />
  );
}

export default PhoneField;
