/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
const PokemonImage = ({ id, src }: { id: string; src: string }) => {
  const imageStyles = {
    margin: 'auto',
    marginBottom: '10px',
    width: '65%',
    display: 'block',
    WebkitBoxReflect:
      'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))',
  };

  return (
    <img
      style={imageStyles}
      // src={image}
      // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
      src={src}
      // src={`/images/pokemon-trim-top/poke-${id}.png`}
      alt={`pokemon ${id}`}
    />
  );
};

export default PokemonImage;
