import React from 'react';
import { Paper, Typography } from '@mui/material';

const paperStyles = {
  width: '100%',
  padding: '2vh 5vw 2vh 5vw',
  borderRadius: '12px',
  border: '5px solid rgb(25, 25, 25)',
  backgroundColor: 'rgb(20, 20, 20)',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const Hollow: React.FC<any> = ({ children }) => {
  return <Paper sx={paperStyles}>{children}</Paper>;
};

export default Hollow;
