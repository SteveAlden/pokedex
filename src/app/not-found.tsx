import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Image
        alt='404_notfound'
        width={1600}
        height={444}
        src={`/images/404_notfound.png`}
        objectFit='contain'
      />
      <Typography variant='h2' color='#fff'>
        Uh-oh!
      </Typography>
      <Typography variant='h5' color='#fff'>
        You look lost on your journey!
      </Typography>
      <Link href='/'>
        <Typography variant='h6' color='#fff'>
          {'\u2190'} Go back home
        </Typography>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
