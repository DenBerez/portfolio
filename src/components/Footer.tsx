import React, { useState } from "react";
import { Box, IconButton, Typography, styled, Dialog } from '@mui/material';
import { SocialIcons } from './SocialIcons';

const StyledFooter = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  zIndex: 100,
  padding: theme.spacing(6, 0),
  '& .MuiIconButton-root': {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
    transition: theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'translateY(-2px)',
    }
  },
  '& .MuiTypography-root': {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
}));

function Footer() {
  return (
    <StyledFooter component="footer">
      <Box //center social icons
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SocialIcons tooltipPlacement="top" />
      </Box>

      <Typography>
        A portfolio designed & built by{' '}
        <a 
          href="https://github.com/DenBerez/react-portfolio-template" 
          target="_blank" 
          rel="noreferrer"
        >
          Dennis Berezin
        </a>
        {' '}with 💜
      </Typography>
    </StyledFooter>
  );
}

export default Footer;