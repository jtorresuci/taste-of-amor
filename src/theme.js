import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081', // pink color for buttons and bars
    },
    background: {
      default: '#fff', // white background color for the main page
    },
    text: {
      primary: '#000', // black text color
    },
  },
});

export default theme;
