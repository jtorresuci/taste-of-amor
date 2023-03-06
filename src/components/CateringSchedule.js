import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { loadStripe } from "@stripe/stripe-js";


function CateringSchedule() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await loadStripe("your_stripe_public_key");
    const { name, email, phone, dateTime, message } = formState;
    const amount = 2000; // 20.00 USD in cents
    console.log(formState)
    try {
      const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          dateTime,
          message,
          amount,
        }),
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { name, email, phone, dateTime, message } = formState;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box sx={{ fontSize: '24px', fontWeight: 'bold', mb: 3 }}>
        Schedule a Catering Event
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          sx={{ mb: 2, width: '100%' }}
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          sx={{ mb: 2, width: '100%' }}
          required
        />
        <TextField
          label="Phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          sx={{ mb: 2, width: '100%' }}
          required
        />
        <TextField
          label="Date and Time"
          type="datetime-local"
          name="dateTime"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
          value={dateTime}
          onChange={handleChange}
          sx={{ mb: 2, width: '100%' }}
          required
        />
        <TextField
          label="Message"
          name="message"
          value={message}
          onChange={handleChange}
          multiline
          rows={5}
          sx={{ mb: 2, width: '100%' }}
          required
        />
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          Schedule Event
        </Button>
      </Box>
    </Box>
  );
}

export default CateringSchedule
