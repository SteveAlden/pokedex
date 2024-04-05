/* eslint-disable @next/next/no-img-element */
const PokemonImage = ({ id }: { id: string }) => {
  const imageStyles = {
    margin: 'auto',
    marginBottom: '10px',
    width: '50%',
    display: 'block',
    WebkitBoxReflect:
      'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))',
  };

  return (
    <img
      style={imageStyles}
      src={`/images/pokemon-trim-top/poke-${id}.png`}
      alt={`pokemon ${id}`}
    />
  );
};

export default PokemonImage;
