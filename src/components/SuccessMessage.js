import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

function SuccessMessage() {
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setName(searchParams.get('name'));
    setEmail(searchParams.get('email'));
  }, [location.search]);

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
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
        Thank you for your order, <span style={{ color: '#ff4081' }}>{name}</span>!
      </Typography>
      <Typography variant="body1" align="center" sx={{ color: 'black' }}>
        We have received your order and will send a confirmation email to <span style={{ color: '#ff4081' }}>{email}</span> shortly.
      </Typography>
    </Box>
  );
}

export default SuccessMessage;
