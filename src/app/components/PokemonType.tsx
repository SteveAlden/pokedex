import React from 'react';
import { TypeChips } from './TypeChips';
import { Box } from '@mui/material';

interface PokemonTypeProps {
  pokemonType: any[];
}

const PokemonType: React.FC<PokemonTypeProps> = ({ pokemonType }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: 0,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <TypeChips size='medium' items={pokemonType} />
    </Box>
  );
};

export default PokemonType;
