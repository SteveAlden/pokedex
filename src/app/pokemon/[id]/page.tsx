/* eslint-disable @next/next/no-img-element */
import Evolutions from '@/components/Evolutions';
import {
  fetchImageAndTrim,
  fetchPokeApiData,
  fetchPokemonGitData,
} from '@/data.utils';
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

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon: any = await fetchPokeApiData(id);
  const { name, height, weight, description, baseStats, genus } = pokemon;
  const pokemonEv = await fetchPokemonGitData(id);
  const { type, weaknesses } = pokemonEv;
  const imageSrc = await fetchImageAndTrim(id);

  return (
    <Box>
      <PokemonImage id={id} src={imageSrc} />
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

export default Page;
