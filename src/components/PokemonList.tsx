'use client';
/* eslint-disable @next/next/no-img-element */
import { Masonry } from '@mui/lab';
import { ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import Link from 'next/link';
import DelayedChild from './DelayedChild';
import PokemonImage from './PokemonImage';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemon: Pokemon[];
  images: string[];
}

interface PokemonListItemProps {
  poke: { name: string };
  index: number;
  imageSrc: string;
}

export const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  images,
}) => {
  return (
    <DelayedChild>
      <Masonry spacing={1.2} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {pokemon.map((poke, index) => (
          <PokemonListItem
            poke={poke}
            index={index + 1}
            key={poke.name}
            imageSrc={images[index]}
          />
        ))}
      </Masonry>
    </DelayedChild>
  );
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({
  poke,
  index,
  imageSrc,
}) => {
  return (
    <Link href={`/pokemon/${index}`} key={index}>
      <ImageListItem
        key={index}
        sx={{
          borderRadius: '10px',
          paddingTop: '20px',
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
        }}
      >
        <PokemonImage id={`${index}`} src={imageSrc} />
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
        >
          {poke.name}
        </ImageListItemBar>
      </ImageListItem>
    </Link>
  );
};

export default PokemonListItem;
