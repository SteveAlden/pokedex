import sharp from 'sharp';
import {
  POKEMON_GITDATA_URL,
  POKE_API_BASE_URL,
  SPRITES_BASE_URL,
} from './constants';

export const fetctPokemons = async () => {
  const res = await fetch(`${POKE_API_BASE_URL}?limit=151`);
  const pokemonData = await res.json();
  return { pokemon: pokemonData.results };
};

export const fetchAndTrimImages = async (ids: string[]) => {
  const imagePromises = ids.map(fetchImageAndTrim);
  const images = await Promise.all(imagePromises);
  return images;
};

export const fetchImageAndTrim = async (id: string) => {
  const res = await fetch(`${SPRITES_BASE_URL}/${id}.png`);

  const buffer = await res.arrayBuffer();

  const trimmedImage = await sharp(buffer).trim().toBuffer();
  const base64Image = Buffer.from(trimmedImage).toString('base64');
  const src = `data:image/png;base64,${base64Image}`;
  return src;
};

// Fetch data from an API
export const fetchPokeApiData = async (pokemonId: string) => {
  try {
    const pokemonData: any = await fetch(
      `${POKE_API_BASE_URL}/${pokemonId}`
    ).then((res) => res.json());

    const speciesData = await fetch(pokemonData?.species?.url).then((res) =>
      res.json()
    );

    const { id, name, height, weight, stats, sprites } = pokemonData;
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
      sprite: sprites.other.home.front_default,
    };
  } catch (error) {
    console.error('Failed to fetch Pokemon data:', error);
    return null;
  }
};

export const fetchPokemonGitData = async (id: string) => {
  const res = await fetch(POKEMON_GITDATA_URL);
  const data = await res.json();
  const pokemon = data.pokemon.find((p: any) => p.id == id);

  return pokemon;
};
