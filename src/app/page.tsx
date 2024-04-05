import sharp from 'sharp';
import styles from './page.module.css';
import { PokemonList } from '@/components/PokemonList';

const fetctPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemonData = await res.json();
  return { pokemon: pokemonData.results };
};

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

const fetchAndTrimImages = async (ids: string[]) => {
  const imagePromises = ids.map(fetchImageAndTrim);
  const images = await Promise.all(imagePromises);
  return images;
};

const fetchImageAndTrim = async (id: string) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
  );

  const buffer = await res.arrayBuffer();

  const trimmedImage = await sharp(buffer).trim().toBuffer();
  const base64Image = Buffer.from(trimmedImage).toString('base64');
  const src = `data:image/png;base64,${base64Image}`;
  return src;
};
