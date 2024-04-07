import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const paperStyles = {
  width: '100%',
  backgroundColor: 'rgb(25, 25, 25)',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
  padding: '2vh 5vw 2vh 5vw',
  marginTop: '20px',
};

const Filled: React.FC<any> = ({ children }) => {
  return <Paper sx={paperStyles}>{children}</Paper>;
};

export default Filled;
