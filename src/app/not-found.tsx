/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

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
      <img width='80%' alt='404_notfound' src={`/images/404_notfound.png`} />
      <Typography variant='h2'>Uh-oh!</Typography>
      <Typography variant='h4'>You look lost on your journey!</Typography>
      <Link href='/'>
        <Typography variant='h6'>{'\u2190'} Go back home</Typography>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
