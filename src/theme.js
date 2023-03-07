import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fce6f2', // pink color for buttons and bars
    },
    background: {
      default: '#fbfaf8', // white background color for the main page
    },
    text: {
      primary: '#000', // black text color
    },
  },
  typography: {
    fontFamily: 'Cuasten',
    fontWeight: 400,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#000',
        },
      },
    },
  },
});

export default theme;
