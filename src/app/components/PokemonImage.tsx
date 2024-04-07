/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface PokemonImageProps {
  id: string;
  showReflection?: boolean;
  fullWidth?: boolean;
  trimmedImage?: boolean;
}

const getImageStyles = (fullWidth?: boolean, showReflection?: boolean) => ({
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
});

const PokemonImage: React.FC<PokemonImageProps> = ({
  id,
  showReflection,
  fullWidth,
  trimmedImage,
}) => {
  const imageStyles = getImageStyles(fullWidth, showReflection);

  return (
    <img
      style={imageStyles}
      src={`/images/${trimmedImage ? 'sprites-trimmed' : 'sprites'}/poke-${id}.png`}
      alt={`pokemon ${id}`}
    />
  );
};

export default PokemonImage;
