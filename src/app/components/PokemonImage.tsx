/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
const PokemonImage = ({
  id,
  src,
  showReflection,
  fullWidth,
}: {
  id: string;
  showReflection?: boolean;
  src?: string;
  fullWidth?: boolean;
}) => {
  const imageStyles = {
    margin: 'auto',
    marginBottom: '10px',
    ...(fullWidth ? {} : { width: '65%' }),
    display: 'block',
    ...(showReflection
      ? {
          WebkitBoxReflect:
            'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)))',
        }
      : {}),
  };

  return (
    <img
      style={imageStyles}
      src={`/images/sprites/poke-${id}.png`}
      // src={
      //   src ||
      //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
      // }
      alt={`pokemon ${id}`}
    />
  );
};

export default PokemonImage;
