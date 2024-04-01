interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

interface PokemonDetailsProps {
  pokemon: Pokemon;
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Pokemon Details</h1>
      <p>Name: {pokemon.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

// Fetch data from an API
const getPokemon = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: Pokemon = await res.json();
  return pokemon;
};

export default Page;
