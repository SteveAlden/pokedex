import { Chip } from '@mui/material';
import React from 'react';

interface ChipsProps {
  size: 'small' | 'medium';

  items: any[];
}

export const TypeChips: React.FC<ChipsProps> = ({ size, items }) => {
  return (
    <>
      {items?.map((item) => (
        <Chip
          key={item}
          size={size}
          label={item}
          color='primary'
          sx={{ backgroundColor: getChipcolor(item), margin: '5px' }}
        />
      ))}
    </>
  );
};

const chipColor = {
  bug: '#C3D21F',
  dark: '#8E6956',
  dragon: '#8774FF',
  electric: '#FDE53D',
  fairy: '#F9ADFF',
  fighting: '#A85643',
  fire: '#FA5643',
  flying: '#79A4FF',
  ghost: '#7873D4',
  grass: '#8DD851',
  ground: '#EDCC56',
  ice: '#96F1FF',
  normal: '#BDBDAE',
  poison: '#AB5DA2',
  psychic: '#F662B1',
  rock: '#CDBD72',
  stell: '#C4C2DB',
  water: '#56AEFF',
};

const getChipcolor = (pokeType: keyof typeof chipColor) => {
  return chipColor[pokeType] || null;
};
