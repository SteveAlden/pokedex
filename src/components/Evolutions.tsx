import React from 'react';
import Evolution from './Evolution';
import { Box, Paper, Typography } from '@mui/material';
import Filled from './wrapper/Filled';

interface EvolutionProps {
  prev_evolution?: Array<{ num: string; name: string }>;
  next_evolution?: Array<{ num: string; name: string }>;
  id: string;
}

const Evolutions: React.FC<EvolutionProps> = ({
  prev_evolution,
  next_evolution,
  id,
}) => {
  if (!prev_evolution && !next_evolution) return null;

  const renderEvolutions = (
    evolutions: Array<{ num: string; name: string }> | undefined
  ) =>
    evolutions?.map((t) => (
      <Evolution key={t.name} id={t.num.replace(/^0+/, '')} />
    ));

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
      <Box sx={{ display: 'flex', padding: 0 }}>
        {renderEvolutions(prev_evolution)}
        <Evolution id={id} />
        {renderEvolutions(next_evolution)}
      </Box>
    </Filled>
  );
};

export default Evolutions;
