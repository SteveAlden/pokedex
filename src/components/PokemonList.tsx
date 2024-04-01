/* eslint-disable @next/next/no-img-element */
import { Masonry } from '@mui/lab';
import { ImageListItem, ImageListItemBar } from '@mui/material';
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
    <div>
      <h1>Pokemon List</h1>
      <Masonry spacing={2} columns={5}>
        {pokemon.map((poke, index) => (
          <PokemonListItem poke={poke} index={index} key={poke.name} />
        ))}
      </Masonry>
    </div>
  );
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({ poke, index }) => (
  <Link href={`/pokemon/${poke.name}`} key={index}>
    <ImageListItem
      key={index}
      sx={{
        borderRadius: '10px',
        paddingTop: '20px',
        transition: '0.1s',
        backdropFilter: 'blur(16px) saturate(180%)',
        '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
        backgroundColor: '#161616',
        '&:hover': {
          boxShadow: '0 0 10px #5356FF',
        },
      }}
    >
      <img
        srcSet={`/images/pokemon/poke-${index + 1}.png?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`/images/pokemon/poke-${index + 1}.png?w=248&fit=crop&auto=format`}
        alt={poke.name}
        loading='lazy'
      />
      <ImageListItemBar position='below' title={poke.name} />
    </ImageListItem>
  </Link>
);

export default PokemonListItem;
