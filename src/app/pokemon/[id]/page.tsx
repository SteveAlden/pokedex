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
import { Box, Zoom } from '@mui/material';
import { notFound } from 'next/navigation';

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
  const currentId = parseInt(id);
  let nextId, previousId;
  if (currentId < 1 || currentId > 1025 || isNaN(currentId)) {
    notFound();
  }
  if (currentId !== 1025) {
    nextId = currentId + 1;
  }
  if (currentId !== 1) {
    previousId = currentId - 1;
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
      <Zoom in style={{ transitionDelay: '0.1ms' }}>
        <PokemonImage id={id} showReflection fullWidth />
      </Zoom>
      <Name
        name={name}
        genus={genus}
        nextId={nextId}
        previousId={previousId}
        generation={generation}
      />
      <PokemonType pokemonType={type} />
      <Info height={height} id={id} weight={weight} />
      <Description description={description} />
      <Weakness weaknesses={weaknesses} />
      <Stats stats={baseStats} />
      <Evolutions evolutions={evolutions} generation={generation} />
    </Box>
  );
};

export default Page;
