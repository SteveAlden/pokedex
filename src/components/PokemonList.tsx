import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemon: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => (
  <div>
    <h1>Pokemon List</h1>
    {pokemon.map((poke, index) => (
      <div key={poke.name}>
        <Link href={`/pokemon/${poke.name}`}>{poke.name}</Link>
      </div>
    ))}
  </div>
);
