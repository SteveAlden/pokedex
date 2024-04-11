/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import Link from 'next/link';
import PokemonImage from './PokemonImage';

interface EvolutionProps {
  id: string;
  generation: any;
}
const styles = {
  transition: 'transform 0.15s',
  padding: '5px',
  borderRadius: '50%',
  margin: '5px',
  width: '120px',
  height: '120px',
  backgroundColor: 'rgb(35, 35, 35)',
  border: '5px solid rgb(20, 20, 20)',
  ':hover': {
    zIndex: 2,
    transform: 'scale(1.1)',
    boxShadow: '0px 5px 15px 5px rgb(239, 9, 105)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
};
const Evolution: React.FC<EvolutionProps> = ({ id, generation }) => {
  return (
    <Link href={`/pokemon/${id}?generation=${generation}`}>
      <Box sx={styles}>
        <PokemonImage id={id} fullWidth />
      </Box>
    </Link>
  );
};

export default Evolution;
