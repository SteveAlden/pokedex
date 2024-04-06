import React from 'react';
import Evolution from './Evolution';
import { Box, Typography } from '@mui/material';
import Filled from './wrapper/Filled';

interface EvolutionProps {
  evolutions?: Array<{ id: string; name: string }>;
}

const Evolutions: React.FC<EvolutionProps> = ({ evolutions }) => {
  return (
    <Filled>
      <Typography
        variant='h4'
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          color: 'rgb(137, 137, 137)',
        }}
      >
        Evolutions
      </Typography>
      <Box
        sx={{
          display: 'flex',
          padding: 0,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {evolutions?.map((evolution) => (
          <Evolution key={evolution.name} id={evolution.id} />
        ))}
      </Box>
    </Filled>
  );
};

export default Evolutions;
