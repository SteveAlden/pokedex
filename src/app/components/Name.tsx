import React from 'react';

import { Box, Typography } from '@mui/material';
import Hollow from './wrapper/Hollow';

interface NameProps {
  name: string;
  genus: string;
}

const Name: React.FC<NameProps> = ({ name, genus }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h2' style={{ color: 'rgb(137, 137, 137)' }}>
        {name?.toUpperCase()}
      </Typography>
      <Typography style={{ color: 'rgb(137, 137, 137)' }}>{genus}</Typography>
    </Box>
  );
};

export default Name;
