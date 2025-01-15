import React, {useState, useEffect} from "react";
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles as MuiGlobalStyles } from '@mui/material';
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

function App() {
    const [mode, setMode] = useState<string>('dark');

    const theme = getTheme(mode as 'light' | 'dark');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
            <Footer />
      </ThemeProvider>
    );
}

export default App;