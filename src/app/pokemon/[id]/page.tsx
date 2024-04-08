/* eslint-disable @next/next/no-img-element */
import Evolutions from '@/app/components/Evolutions';
import { fetchEvolutions, fetchPokeApiData } from '@/utils/data.utils';
import Description from '@/app/components/Description';
import Info from '@/app/components/Info';
import Name from '@/app/components/Name';
import PokemonImage from '@/app/components/PokemonImage';
import PokemonType from '@/app/components/PokemonType';
import Stats from '@/app/components/Stats';
import Weakness from '@/app/components/Weakness';
import { Box } from '@mui/material';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

const Page = async ({
  params: { id },
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  const { generation } = searchParams;

  if (parseInt(id) < 1 || parseInt(id) > 1025) {
    notFound();
  }
  const pokemon: any = await fetchPokeApiData(id);
  const {
    name,
    height,
    weight,
    description,
    baseStats,
    genus,
    type,
    weaknesses,
  } = pokemon;
  const evolutions = await fetchEvolutions(id);

  return (
    <Box>
      <Suspense>
        <PokemonImage id={id} showReflection fullWidth />
        <Name name={name} genus={genus} />
        <PokemonType pokemonType={type} />
        <Info height={height} id={id} weight={weight} />
        <Description description={description} />
        <Weakness weaknesses={weaknesses} />
        <Stats stats={baseStats} />
        <Evolutions evolutions={evolutions} generation={generation} />
      </Suspense>
    </Box>
  );
};

export default Page;
