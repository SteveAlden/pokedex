import { Chip } from '@mui/material';
import React from 'react';

interface ChipsProps {
  size: 'small' | 'medium';
  label: keyof typeof chipColor;
}

const Chips: React.FC<ChipsProps> = ({ size, label }) => {
  return (
    <Chip
      size={size}
      label={label}
      color='primary'
      sx={{ backgroundColor: getChipStyle(label) }}
    />
  );
};

const chipColor = {
  Bug: '#C3D21F',
  Dark: '#8E6956',
  Dragon: '#8774FF',
  Electric: '#FDE53D',
  Fairy: '#F9ADFF',
  Fighting: '#A85643',
  Fire: '#FA5643',
  Flying: '#79A4FF',
  Ghost: '#7873D4',
  Grass: '#8DD851',
  Ground: '#EDCC56',
  Ice: '#96F1FF',
  Normal: '#BDBDAE',
  Poison: '#AB5DA2',
  Psychic: '#F662B1',
  Rock: '#CDBD72',
  Stell: '#C4C2DB',
  Water: '#56AEFF',
};

const getChipStyle = (pokeType: keyof typeof chipColor) => {
  return chipColor[pokeType] || null;
};
