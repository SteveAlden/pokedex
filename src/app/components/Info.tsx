import React from 'react';

import { Box, Typography } from '@mui/material';
import Hollow from './wrapper/Hollow';

interface InfoProps {
  height: string;
  id: string;
  weight: string;
}

const Info: React.FC<InfoProps> = ({ height, id, weight }) => {
  return (
    <Hollow>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
          {height}
        </Typography>
        <Typography style={{ color: 'rgb(137, 137, 137)' }}>Height</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
          {id}
        </Typography>
        <Typography style={{ color: 'rgb(137, 137, 137)' }}>Number</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
          {weight}
        </Typography>
        <Typography style={{ color: 'rgb(137, 137, 137)' }}>Weight</Typography>
      </Box>
    </Hollow>
  );
};

export default Info;
