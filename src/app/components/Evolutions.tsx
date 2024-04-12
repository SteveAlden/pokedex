import Evolution from './Evolution';
import { Box, Typography } from '@mui/material';
import Filled from './wrapper/Filled';

interface EvolutionProps {
  evolutions?: Array<{ id: string; name: string }>;
}

const Evolutions: React.FC<EvolutionProps> = ({ evolutions }) => {
  return (
    <Filled>
      <Typography variant='h4'>Evolutions</Typography>
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {evolutions?.map((evolution) => (
          <Evolution key={evolution.name} id={evolution.id} />
        ))}
      </Box>
    </Filled>
  );
};

export default Evolutions;
