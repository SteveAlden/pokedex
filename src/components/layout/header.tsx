/* eslint-disable @next/next/no-img-element */
// generate a header component
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: 'blur(10px) saturate(150%)',
        backgroundColor: 'rgba(20,20,20,0.2)',
        boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
      }}
    >
      <Toolbar>
        <Link href='/'>
          <Box sx={{ display: 'flex' }}>
            <Image
              alt=''
              src='/images/ball-master.png'
              width={35}
              height={35}
            />
            <Typography variant='h5'>Pokédex</Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
