import React from 'react';
import { Box, Typography } from '@mui/material';

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
      <Typography variant='h2'>{name?.toUpperCase()}</Typography>
      <Typography>{genus}</Typography>
    </Box>
  );
};

export default Name;
