import React from "react";
import { Box, Container, Typography, IconButton, Stack, styled, Link, useTheme, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';
import headshot from '../assets/images/headshot.jpg';
import { SocialIcons } from './SocialIcons';
import { Pin, PinDrop } from "@mui/icons-material";



const AboutSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  margin: '-15vh 0 0 0',
  overflow: 'hidden',
  background: 'transparent',
  minHeight: '95vh',
}));

const Content = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  zIndex: 2,
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
  textShadow: theme.palette.mode === 'dark' 
    ? '0 0 20px rgba(0, 0, 0, 0.8)' 
    : '0 0 20px rgba(255, 255, 255, 0.8)',

  '& h1.MuiTypography-root': {
    ...theme.typography.h1,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  },

  '& h4.MuiTypography-root': {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    fontWeight: 500,
  },

  '& h5.MuiTypography-root': {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
  },

  '& .mobile_social_icons': {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
    textAlign: 'center',
    '& .mobile_social_icons': {
      justifyContent: 'center',
    }
  }
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  transition: 'transform 0.3s ease-in-out',
  '& img': {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'grayscale(80%)',
    border: `4px solid ${theme.palette.primary.main}`,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      filter: 'grayscale(0%)',
      transform: 'scale(1.05)',
      boxShadow: `0 0 20px ${theme.palette.primary.main}`,
    }
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  }
}));

function Main() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      padding: 0, 
      width: '100%', 
      margin: 0, 
      position: 'relative', 
      zIndex: 1,
      background: 'transparent',
    }}>
      <AboutSection>
        <Container 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: { xs: '20px', md: '50px' },
            maxWidth: '1000px',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <ImageWrapper>
            <img src={headshot} alt="Dennis Berezin" />
          </ImageWrapper>
          <Content>
            <Typography variant="h1" component="h1">Dennis Berezin</Typography>
            <Typography variant="h4" component="h4">Full Stack Engineer</Typography>
            <Typography 
              variant="h5" 
              component="h5" 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <PinDrop color="primary" sx={{ fontSize: 'inherit' }} />
              Centereach, NY
            </Typography>
            <SocialIcons className="mobile_social_icons" />
          </Content>
        </Container>
      </AboutSection>
    </Box>
  );
}

export default Main;