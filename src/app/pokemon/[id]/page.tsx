/* eslint-disable @next/next/no-img-element */
import Evolutions from '@/components/Evolutions';
import { Box, Typography } from '@mui/material';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon = await fetchPokeApiData(id);
  const pokemonEv = await fetchPokemonGitData(id);

  return (
    <Box
      sx={{
        marginTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          margin: 'auto',
          marginBottom: '10px',
          width: '50%',
          display: 'block',
          WebkitBoxReflect:
            'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))',
        }}
        src={`/images/pokemon-trim-top/poke-${id}.png`}
        alt={`pokemon ${id}`}
      />
      <Typography variant='h2' style={{ color: 'rgb(137, 137, 137)' }}>
        {pokemon?.name?.toUpperCase()}
      </Typography>
      <Typography style={{ color: 'rgb(137, 137, 137)' }}>
        {pokemon?.genus}
      </Typography>
      <Box
        sx={{
          padding: '2vh 5vw 2vh 5vw',
          borderRadius: '12px',
          border: '5px solid rgb(25, 25, 25)',
          backgroundColor: 'rgb(20, 20, 20)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
            {pokemonEv?.height}
          </Typography>
          <Typography style={{ color: 'rgb(137, 137, 137)' }}>
            Height
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
            {pokemon?.id}
          </Typography>
          <Typography style={{ color: 'rgb(137, 137, 137)' }}>
            Number
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
            {pokemonEv?.weight}
          </Typography>
          <Typography style={{ color: 'rgb(137, 137, 137)' }}>
            Weight
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: '2vh 5vw 2vh 5vw',
          borderRadius: '12px',
          border: '5px solid rgb(25, 25, 25)',
          backgroundColor: 'rgb(20, 20, 20)',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '20px',
        }}
      >
        <Typography style={{ color: 'rgb(137, 137, 137)' }} variant='h6'>
          {pokemon?.description}
        </Typography>
      </Box>
      <Evolutions {...pokemonEv} />
    </Box>
  );
};

// Fetch data from an API
const fetchPokeApiData = async (pokemonId: string) => {
  try {
    const pokemonData: any = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    ).then((res) => res.json());

    const speciesData = await fetch(pokemonData?.species?.url).then((res) =>
      res.json()
    );

    const { id, name, height, weight } = pokemonData;
    const { base_happiness, capture_rate, habitat } = speciesData;

    const description = speciesData.flavor_text_entries?.find(
      (text: any) =>
        text?.language?.name === 'en' && text?.version?.name === 'omega-ruby'
    )?.flavor_text;

    const genus = speciesData.genera?.find(
      (g: any) => g?.language?.name === 'en'
    )?.genus;

    return {
      id,
      name,
      height,
      weight,
      base_happiness,
      capture_rate,
      habitat,
      genus,
      description,
    };
  } catch (error) {
    console.error('Failed to fetch Pokemon data:', error);
    return null;
  }
};

const fetchPokemonGitData = async (id: string) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
  );
  const data = await res.json();
  const pokemon = data.pokemon.find((p: any) => p.id == id);

  return pokemon;
};

export default Page;
