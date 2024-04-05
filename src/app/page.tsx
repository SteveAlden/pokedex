import styles from './page.module.css';
import { PokemonList } from '@/app/components/PokemonList';
import { fetchAndTrimImages, fetctPokemons } from '@/utils/data.utils';

export default async function Home() {
  const { pokemon } = await fetctPokemons();
  const ids = Array.from({ length: 151 }, (_, i) => (i + 1).toString());
  const images = await fetchAndTrimImages(ids);

  return (
    <main className={styles.main}>
      <PokemonList pokemon={pokemon} images={images} />
    </main>
  );
}
