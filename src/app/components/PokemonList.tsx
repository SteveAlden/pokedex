/* eslint-disable @next/next/no-img-element */
import { Masonry } from '@mui/lab';
import {
  Grow,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import DelayedChild from './wrapper/DelayedChild';
import PokemonImage from './PokemonImage';
import { Suspense } from 'react';

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
  index: number;
  generation: string;
}

const listItemStyles = {
  borderRadius: '10px',
  padding: '20px 10px 10px 10px',
  transition: '0.15s',
  backdropFilter: 'blur(16px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
  backgroundColor: 'rgb(35, 35, 35)',
  '&:hover': {
    zIndex: 1,
    transform: 'scale(1.05)',
    boxShadow:
      '0px 5px 10px 5px rgba(232,35,111,255), 0px 5px 10px 5px rgba(108, 28, 107,0.5)',
  },
};

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  generation,
}) => {
  return (
    <Grow in style={{ transitionDelay: '0.01ms' }} timeout={800}>
      <Masonry spacing={1.6} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {pokemon.map((poke, index) => (
          <PokemonListItem
            poke={poke}
            index={poke.id}
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
  index,
  generation,
}) => {
  return (
    <Link href={`/pokemon/${index}?generation=${generation}`}>
      <Suspense>
        <ImageListItem key={index} sx={listItemStyles}>
          <PokemonImage id={`${index}`} showReflection fullWidth trimmedImage />
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
      </Suspense>
    </Link>
  );
};

export default PokemonListItem;
