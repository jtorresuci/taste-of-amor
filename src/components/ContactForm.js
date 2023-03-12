import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{ p: 5}} >

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Book Now
          </Button>
        </Grid>
      </Grid>
      </Box>

    </form>
  );
}

export default ContactForm;
