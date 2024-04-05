/* eslint-disable @next/next/no-img-element */
import Evolutions from '@/components/Evolutions';
import Description from '@components/Description';
import Info from '@components/Info';
import Name from '@components/Name';
import PokemonImage from '@components/PokemonImage';
import PokemonType from '@components/PokemonType';
import Stats from '@components/Stats';
import Weakness from '@components/Weakness';
import { Box } from '@mui/material';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon: any = await fetchPokeApiData(id);
  const { name, height, weight, description, baseStats, genus } = pokemon;
  const pokemonEv = await fetchPokemonGitData(id);
  const { type, weaknesses } = pokemonEv;

  return (
    <Box>
      <PokemonImage id={id} />
      <Name name={name} genus={genus} />
      <PokemonType pokemonType={type} />
      <Info height={height} id={id} weight={weight} />
      <Description description={description} />
      <Weakness weaknesses={weaknesses} />
      <Stats stats={baseStats} />
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

    const { id, name, height, weight, stats } = pokemonData;
    const { base_happiness, capture_rate, habitat } = speciesData;
    let baseStats = stats?.map((stat: any) => ({
      statName: stat?.stat?.name,
      baseStat: stat?.base_stat,
    }));

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
      baseStats,
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
