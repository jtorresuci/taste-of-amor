import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './BookNow.css';

function BookNow() {
  return (
    <div className="book-now-container" style={{ width: '100vw' }}>
      <Button
        component={Link}
        to="/book"
        variant="contained"
        size="large"
        color="primary"
        sx={{ width: '300px' }}
      >
        Book Now
      </Button>
    </div>
  );
}

export default BookNow;
