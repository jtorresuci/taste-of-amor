import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';

function LoginForm({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password });
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token', token); // store the token in local storage
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // set the token in the header
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

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
  >
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log in</button>
    </form>
    </Box>
  );
}

export default LoginForm;
