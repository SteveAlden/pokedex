'use client';
/* eslint-disable @next/next/no-img-element */
// generate a header component
import React, { Suspense, useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import CustomizedSelects from '../SelectGeneration';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const generation = useSearchParams().get('generation') || '1';
  const [showGenerationSelector, setShowGenerationSelector] = useState(
    pathname === '/'
  );

  useEffect(() => {
    setShowGenerationSelector(pathname === '/');
  }, [pathname]);

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
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Suspense fallback={<>Loading</>}>
            <Link href={`/?generation=${generation}`}>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Image
                  alt=''
                  src='/images/ball-master.png'
                  width={35}
                  height={35}
                />
                <Typography variant='h5' sx={{}}>
                  Pokédex
                </Typography>
              </Box>
            </Link>
          </Suspense>
        </Box>
        {showGenerationSelector && <CustomizedSelects />}
      </Toolbar>
    </AppBar>
  );
}
