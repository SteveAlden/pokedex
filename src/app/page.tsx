import styles from './page.module.css';
import { PokemonList } from '@/app/components/PokemonList';
import {
  fetchAndSaveImages,
  fetchAndTrimImages,
  fetctPokemons,
} from '@/utils/data.utils';

export default async function Home() {
  const { pokemon } = await fetctPokemons();
  const ids = Array.from({ length: 1025 }, (_, i) => (i + 1).toString());

  return (
    <main className={styles.main}>
      <PokemonList pokemon={pokemon} />
    </main>
  );
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) =>
    (start + i).toString()
  );
}
