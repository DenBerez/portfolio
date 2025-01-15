import React from "react";
import { Box, Container, Typography, IconButton, Stack, styled, Link, useTheme, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';
import headshot from '../assets/images/headshot.jpg';
import { SocialIcons } from './SocialIcons';



const AboutSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '50vh',
  position: 'relative',
  padding: 0,
  margin: 0,
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    padding: '100px 5% 5%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
}));

const Content = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  zIndex: 2,
  padding: 0,
  width: '100%',
  maxWidth: '600px',
  textShadow: theme.palette.mode === 'dark' 
    ? '0 0 20px rgba(0, 0, 0, 0.8)' 
    : '0 0 20px rgba(255, 255, 255, 0.8)',


  '& .social_icons': {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2.5),

    '& .MuiIconButton-root': {
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        color: theme.palette.primary.main,
        transform: 'translateY(-2px)',
      }
    },

    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },

  '& h1.MuiTypography-root': {
    ...theme.typography.h1,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(0.5),
  },

  '& p.MuiTypography-root': {
    fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 5%',
  }
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  '& img': {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginLeft: 0,
    objectFit: 'cover',
    objectPosition: 'right',
    filter: 'grayscale(100%)',
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '5%',
    width: '100%',
  }
}));

function Main() {
  const theme = useTheme();


  return (
    <Box sx={{ padding: 0, width: '100%', margin: 0, position: 'relative', zIndex: 1 }}>
      <AboutSection>

        <Container 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '50px',
            maxWidth: '900px'
          }}
        >
          <ImageWrapper>
            <img src={headshot} alt="Avatar" />
          </ImageWrapper>
          <Content>
            <Typography variant="h1" component="h1">Dennis Berezin</Typography>
            <Typography variant="h4" component="p">Full Stack Engineer</Typography>
            <SocialIcons className="mobile_social_icons" />
          </Content>
        </Container>
      </AboutSection>
    </Box>
  );
}

export default Main;