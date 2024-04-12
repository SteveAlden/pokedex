import { Masonry } from '@mui/lab';
import {
  Grow,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import PokemonImage from './PokemonImage';

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface PokemonListProps {
  pokemon: Pokemon[];
  generation: string;
}

interface PokemonListItemProps {
  poke: { name: string };
  id: number;
  generation: string;
}

const listItemStyles = {
  borderRadius: '20px',
  padding: '20px 10px 10px 10px',
  transition: '0.15s',
  backgroundColor: 'rgb(30, 30, 30)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow:
      '0px 5px 10px 5px rgba(232,35,111,255), 0px 5px 10px 5px rgba(108, 28, 107,0.5)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
};

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  generation,
}) => {
  return (
    <Grow in style={{ transitionDelay: '1ms' }} timeout={800}>
      <Masonry spacing={1.6} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {pokemon.map((poke) => (
          <PokemonListItem
            poke={poke}
            id={poke.id}
            key={poke.name}
            generation={generation}
          />
        ))}
      </Masonry>
    </Grow>
  );
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({
  poke,
  id,
  generation,
}) => {
  return (
    <Link href={`/pokemon/${id}?generation=${generation}`}>
      <ImageListItem key={id} sx={listItemStyles}>
        <PokemonImage id={`${id}`} showReflection fullWidth trimmedImage />
        <ImageListItemBar
          position='below'
          title={
            <Typography
              sx={{ color: 'rgb(137, 137, 137)', textAlign: 'center' }}
            >
              {poke.name?.toUpperCase()}
            </Typography>
          }
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </ImageListItem>
    </Link>
  );
};

export default PokemonListItem;
