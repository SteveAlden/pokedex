'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { IconButton, Menu, MenuProps } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import { POKEMON_GENERATIONS } from '@/constants';

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
    backgroundColor: 'rgb(35, 35, 35)',
    backdropFilter: 'blur(10px) saturate(150%)',
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.secondary,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '&.Mui-selected': {
        backgroundColor: 'rgb(239, 9, 105,0.2)',
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
  const [selectedGeneration, setSelectedGeneration] = React.useState(
    generations[0]
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        {generations.map((generation) => (
          <MenuItem
            onClick={handleClose}
            key={generation}
            selected={generation === selectedGeneration}
          >
            {generation}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}