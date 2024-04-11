import React from 'react';
import Filled from './wrapper/Filled';
import { TypeChips } from './TypeChips';
import { Box, Typography } from '@mui/material';

interface WeaknessProps {
  weaknesses: string[];
}

const Weakness: React.FC<WeaknessProps> = ({ weaknesses }) => {
  return (
    <Filled>
      <Typography variant='h4'>Weakness</Typography>
      <Box
        sx={{
          display: 'flex',
          padding: 0,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TypeChips size='medium' items={weaknesses} />
      </Box>
    </Filled>
  );
};

export default Weakness;
