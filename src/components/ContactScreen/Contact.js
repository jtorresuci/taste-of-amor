import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "2rem",
          borderRadius: "2rem",
        //   backgroundColor: "#fce6f2",
          mx: { xs: "2rem", md: "6rem" }, // adjust the horizontal margin for different screen sizes
          my: { xs: "1rem", md: "1rem" }, // adjust the horizontal margin for different screen sizes

        }}
      >
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        We'd love to hear from you!
      </Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Phone" fullWidth margin="normal" />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
    </Box>
  );
}

export default Contact;
