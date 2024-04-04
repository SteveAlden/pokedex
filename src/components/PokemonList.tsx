/* eslint-disable @next/next/no-img-element */
import { Masonry } from '@mui/lab';
import { ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import Link from 'next/link';
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemon: Pokemon[];
}

interface PokemonListItemProps {
  poke: { name: string };
  index: number;
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <Masonry spacing={1.2} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
      {pokemon.map((poke, index) => (
        <PokemonListItem poke={poke} index={index + 1} key={poke.name} />
      ))}
    </Masonry>
  );
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({ poke, index }) => (
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
      <img
        srcSet={`/images/pokemon-trim-top/poke-${index}.png?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`/images/pokemon-trim-top/poke-${index}.png?w=248&fit=crop&auto=format`}
        alt={poke.name}
        loading='eager'
        style={{
          WebkitBoxReflect:
            'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))',
        }}
      />
      <ImageListItemBar
        position='below'
        title={
          <Typography sx={{ color: 'rgb(137, 137, 137)', textAlign: 'center' }}>
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

export default PokemonListItem;
