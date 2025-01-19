import React, {useState, useEffect} from "react";
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles as MuiGlobalStyles, Box, styled } from '@mui/material';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { Theme } from '@mui/material/styles';
import { getTheme } from './theme';
import bgDark from './assets/images/bg-dark.png';
import bgLight from './assets/images/bg-light.png';

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.5,
  overflow: 'hidden',
  zIndex: -200,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '120%',
    height: '140%',
    backgroundImage: theme.palette.mode === 'dark' ? 
      `url(${bgDark})` : `url(${bgLight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform',
    zIndex: -1,
    transition: 'transform 0.1s ease-out',
  }
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 0), // Reduced padding
  '&:first-of-type': {
    paddingTop: theme.spacing(12), // Reduced top padding
  },
  '&:last-of-type': {
    paddingBottom: theme.spacing(8),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0), // Reduced padding for mobile
    '&:first-of-type': {
      paddingTop: theme.spacing(10), // Adjusted for mobile
    },
    '&:last-of-type': {
      paddingBottom: theme.spacing(6),
    },
  }
}));

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [scrollPosition, setScrollPosition] = useState(0);

    const theme = getTheme(mode as 'light' | 'dark');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        const handleScroll = () => {
          requestAnimationFrame(() => {
            setScrollPosition(window.pageYOffset);
          });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiGlobalStyles
          styles={(theme) => ({
            'body': {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            },
            'a': {
              color: theme.palette.primary.main,
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: theme.palette.primary.dark,
              },
            },
            '*': {
              boxSizing: 'border-box',
            }
          })}
        />
        <BackgroundWrapper
          sx={{
            '&::before': {
              transform: `translate3d(0, ${scrollPosition * 0.1}px, 0)`,
            }
          }}
        />
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
          <Section>
            <Main/>
          </Section>
          <Section>
            <Expertise/>
          </Section>
          <Section>
            <Timeline/>
          </Section>
          <Section>
            <Project/>
          </Section>
          <Section>
            <Contact/>
          </Section>
        </FadeIn>
        <Footer />
      </ThemeProvider>
    );
}

export default App;