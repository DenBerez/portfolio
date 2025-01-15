import React from "react";
import { Box, IconButton, Typography, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled(Box)(({ theme }) => ({
  textAlign: 'center',
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
      <Box>
        <IconButton 
          href="https://github.com/DenBerez" 
          target="_blank" 
          rel="noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          href="https://www.linkedin.com/in/dennis-berezin/" 
          target="_blank" 
          rel="noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
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