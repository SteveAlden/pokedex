import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

interface NameProps {
  name: string;
  genus: string;
  nextId?: number;
  previousId?: number;
}

const Name: React.FC<NameProps> = ({ name, genus, nextId, previousId }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <IconButton>
        <Link href={`/pokemon/${previousId}`}>
          <ArrowBackIosNewIcon
            sx={{ color: 'rgb(137,137,137)' }}
            fontSize='large'
          />
        </Link>
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Typography variant='h4' sx={{ color: 'rgb(137,137,137)' }}>
          {name?.toUpperCase()}
        </Typography>
        <Typography sx={{ color: 'rgb(137,137,137)' }}>{genus}</Typography>
      </Box>
      <IconButton>
        <Link href={`/pokemon/${nextId}`}>
          <ArrowForwardIosIcon
            sx={{ color: 'rgb(137,137,137)' }}
            fontSize='large'
          />
        </Link>
      </IconButton>
    </Box>
  );
};

export default Name;
