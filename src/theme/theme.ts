'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Oxanium, Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
    text: {
      primary: 'rgb(137, 137, 137)',
      secondary: '#fff',
    },
  },
});

export default theme;
