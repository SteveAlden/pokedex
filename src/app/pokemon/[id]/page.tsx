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

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params: { id } }: PageProps) => {
  let nextId, previousId;
  const currentId = parseInt(id);
  if (!/^\d+$/.test(id) || currentId < 1 || currentId > 1025) {
    notFound();
  } else {
    nextId = currentId !== 1025 ? currentId + 1 : 1;
    previousId = currentId !== 1 ? currentId - 1 : 1025;
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
      <Zoom in style={{ transitionDelay: '1ms' }}>
        <PokemonImage id={id} showReflection fullWidth />
      </Zoom>
      <Name name={name} genus={genus} nextId={nextId} previousId={previousId} />
      <PokemonType pokemonType={type} />
      <Info height={height} id={id} weight={weight} />
      <Description description={description} />
      <Weakness weaknesses={weaknesses} />
      <Stats stats={baseStats} />
      <Evolutions evolutions={evolutions} />
    </Box>
  );
};

export default Page;

export async function generateStaticParams() {
  const numbers = Array.from({ length: 1025 }, (_, index) => index + 1);
  return numbers.map((number) => ({
    slug: number.toString(),
  }));
}
