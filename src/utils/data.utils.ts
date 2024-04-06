import sharp from 'sharp';
import {
  POKEMON_GITDATA_URL,
  POKE_API_BASE_URL,
  SPRITES_BASE_URL,
} from '../constants';

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

    const { id, name, height, weight, stats, sprites, types } = pokemonData;
    const typeNames = types.map((type: any) => type.type.name);
    let weaknesses: string[] = [];
    for (const type of types) {
      const response = await fetch(type.type.url);
      const typeData = await response.json();
      const typeWeaknesses = typeData.damage_relations.double_damage_from.map(
        (weakness: any) => weakness.name
      );
      weaknesses = [...weaknesses, ...typeWeaknesses];
    }

    // Remove duplicates
    weaknesses = weaknesses.filter(
      (value, index, self) => self.indexOf(value) === index
    );

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
      height: height / 10,
      weight: weight / 10,
      base_happiness,
      capture_rate,
      habitat,
      genus,
      description,
      baseStats,
      sprite: sprites.other.home.front_default,
      type: typeNames,
      weaknesses,
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

export const fetchEvolutions = async (id: string) => {
  const res = await fetch(`${POKE_API_BASE_URL}/${id}`);
  const pokemonData = await res.json();
  const speciesData = await fetch(pokemonData?.species?.url).then((res) =>
    res.json()
  );
  const evolutionChain = await fetch(speciesData.evolution_chain.url).then(
    (res) => res.json()
  );

  const evolutions = extractEvolutions(evolutionChain.chain);
  return evolutions;
};

function extractEvolutions(chain: any): { id: string; name: string }[] {
  const evolutions = [
    { id: chain.species.url.split('/').slice(-2)[0], name: chain.species.name },
  ];

  chain.evolves_to.forEach((evolution: any) => {
    evolutions.push(...extractEvolutions(evolution));
  });

  return evolutions;
}
