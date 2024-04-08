'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Menu, MenuProps } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { POKEMON_GENERATIONS } from '@/constants';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgb(35, 35, 35,0.8)',
    backdropFilter: 'blur(10px) saturate(150%)',
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.secondary,
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.4)',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '&.Mui-selected': {
        backgroundColor: 'rgb(25,25,25,0.8)',
        // backgroundColor: 'rgb(239, 9, 105,0.2)',
      },
      '&:hover': {
        backgroundColor: 'rgb(25, 25, 25)',
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const generations = Object.keys(POKEMON_GENERATIONS);

export default function CustomizedSelects() {
  const params = useSearchParams();
  const generation = params.get('generation');
  const generationIndex = parseInt(generation || '1') - 1;
  const [selectedGeneration, setSelectedGeneration] = React.useState(
    generationIndex.toString()
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Suspense>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <MoreIcon />
      </IconButton>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {generations.map((gen, index) => {
          return (
            <Link href={`/?generation=${index + 1}`} key={gen}>
              <MenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedGeneration(gen);
                  handleClose();
                }}
                key={gen}
                selected={index.toString() === selectedGeneration}
              >
                {gen}
              </MenuItem>
            </Link>
          );
        })}
      </StyledMenu>
    </Suspense>
  );
}
