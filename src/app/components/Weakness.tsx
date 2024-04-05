import React from 'react';
import Filled from './wrapper/Filled';
import { TypeChips } from './TypeChips';
import { Box, Typography } from '@mui/material';

interface WeaknessProps {
  weaknesses: any[];
}

const Weakness: React.FC<WeaknessProps> = ({ weaknesses }) => {
  return (
    <Filled>
      <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h4'>
        Weakness
      </Typography>
      <Box sx={{ display: 'flex', padding: 0 }}>
        <TypeChips size='small' items={weaknesses} />
      </Box>
    </Filled>
  );
};

export default Weakness;
