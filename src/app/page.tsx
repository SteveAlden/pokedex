import styles from './page.module.css';
import { PokemonList } from '@/components/PokemonList';

const fetctPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonData = await res.json();
  return { pokemon: pokemonData.results };
};

export default async function Home() {
  const { pokemon } = await fetctPokemons();
  return (
    <main className={styles.main}>
      <PokemonList pokemon={pokemon} />
    </main>
  );
}
