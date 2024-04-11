import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const paperStyles = {
  width: '100%',
  backgroundColor: 'rgb(25, 25, 25)',
  borderRadius: '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'none',
  padding: '2vh 5vw 2vh 5vw',
  marginTop: '20px',
  marginBottom: '20px',
};

const Filled: React.FC<any> = ({ children }) => {
  return <Paper sx={paperStyles}>{children}</Paper>;
};

export default Filled;
