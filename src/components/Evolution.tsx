/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import Link from 'next/link';
import React, { useState, CSSProperties } from 'react';

interface EvolutionProps {
  id: string;
}

const Evolution: React.FC<EvolutionProps> = ({ id }) => {
  return (
    <Link href={`/pokemon/${id}`}>
      <Box
        sx={{
          transition: 'transform 0.1s',
          padding: '5px',
          borderRadius: '50%',
          margin: '5px',
          width: '100px',
          height: '100px',
          backgroundColor: 'rgb(35, 35, 35)',
          border: '5px solid rgb(20, 20, 20)',
          ':hover': {
            transform: 'scale(1.07)',
            boxShadow:
              '0px 5px 15px 5px rgba(255,0,0,0.5), 0px 5px 15px 5px rgba(0,0,255,0.5)',
          },
        }}
      >
        <img src={`/images/pokemon/poke-${id}.png`} alt={`pokemon ${id}`} />
      </Box>
    </Link>
  );
};

export default Evolution;
