/* eslint-disable @next/next/no-async-client-component */
import styles from './page.module.css';
import { PokemonList } from '@/app/components/PokemonList';
import { fetctPokemons } from '@/utils/data.utils';
import { redirect } from 'next/navigation';

export default async function Home({ params, searchParams }: any) {
  const { generation } = searchParams;
  if (!generation || parseInt(generation) < 1 || parseInt(generation) > 9) {
    redirect('/?generation=1');
  }
  const { pokemon } = await fetctPokemons(generation);

  return (
    <main className={styles.main}>
      <PokemonList pokemon={pokemon} generation={generation} />
    </main>
  );
}
