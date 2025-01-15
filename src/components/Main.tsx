import React from "react";
import { Box, Container, Typography, IconButton, Stack, styled, Link, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';
import headshot from '../assets/images/headshot.jpg';

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20%',  // Start higher to prevent white edges
    left: '-10%',
    width: '120%', // Extend beyond viewport
    height: '140%', // Extend beyond viewport
    backgroundImage: theme.palette.mode === 'dark' ? 
      `url(${bgDark})` : `url(${bgLight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'translate3d(0, 0, 0)', // Initial transform
    willChange: 'transform',
    zIndex: -1,
  }
}));

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
      padding: theme.spacing(1.5),
      backgroundColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)',
      transition: theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.2)' 
          : 'rgba(0, 0, 0, 0.1)',
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

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#0d1116',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)',
  }
}));

function Main() {
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ padding: 0, width: '100%', margin: 0, position: 'relative', zIndex: -2 }}>
      <AboutSection>
        <BackgroundWrapper
          sx={{
            '&::before': {
              transform: `translate3d(0, ${scrollPosition * 0.1}px, 0)`,
            }
          }}
        />
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

            <Stack direction="row" spacing={1} className="mobile_social_icons">
              <Link href="https://github.com/DenBerez" target="_blank" rel="noreferrer">
                <SocialIconButton>
                  <GitHubIcon />
                </SocialIconButton>
              </Link>
              <Link href="https://www.linkedin.com/in/dennis-berezin/" target="_blank" rel="noreferrer">
                <SocialIconButton>
                  <LinkedInIcon />
                </SocialIconButton>
              </Link>
            </Stack>
          </Content>
        </Container>
      </AboutSection>
    </Box>
  );
}

export default Main;