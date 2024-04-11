import { Chip, Typography } from '@mui/material';

interface ChipsProps {
  size: 'small' | 'medium';
  items: string[];
}

export const TypeChips: React.FC<ChipsProps> = ({ size, items }) => {
  return (
    <>
      {items?.map((item) => (
        <Chip
          key={item}
          size={size}
          label={
            <Typography>
              {item?.charAt(0)?.toUpperCase() + item?.slice(1)}
            </Typography>
          }
          color='primary'
          sx={{
            backgroundColor: getChipcolor(item as keyof typeof TYPE_COLORS),
            margin: '5px',
          }}
        />
      ))}
    </>
  );
};

const TYPE_COLORS = {
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

const getChipcolor = (pokeType: keyof typeof TYPE_COLORS) => {
  return TYPE_COLORS[pokeType] || null;
};
