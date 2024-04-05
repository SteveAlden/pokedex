import React from 'react';
import Filled from './wrapper/Filled';
import { TypeChips } from './TypeChips';
import { Box, Typography } from '@mui/material';

interface PokemonTypeProps {
  pokemonType: any[];
}

const PokemonType: React.FC<PokemonTypeProps> = ({ pokemonType }) => {
  return (
    <Box sx={{ display: 'flex', padding: 0, justifyContent: 'center' }}>
      <TypeChips size='medium' items={pokemonType} />
    </Box>
  );
};

export default PokemonType;
