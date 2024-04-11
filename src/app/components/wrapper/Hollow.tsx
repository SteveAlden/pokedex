import React from 'react';
import { Paper } from '@mui/material';

const paperStyles = {
  width: '100%',
  padding: '2vh 5vw 2vh 5vw',
  borderRadius: '32px',
  border: '5px solid rgb(25, 25, 25)',
  backgroundColor: 'rgb(20, 20, 20)',
  boxShadow: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  marginBottom: '20px',
};

const Hollow: React.FC<any> = ({ children }) => {
  return <Paper sx={paperStyles}>{children}</Paper>;
};

export default Hollow;
