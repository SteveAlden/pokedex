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

const getChipcolor = (pokeType: keyof typeof chipColor) => {
  return chipColor[pokeType] || null;
};
