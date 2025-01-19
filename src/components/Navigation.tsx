import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Home } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [['Home', 'home'], ['Expertise', 'expertise'], ['History', 'history'], ['Projects', 'projects'], ['Contact', 'contact']];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(13, 17, 22, 0.9)'
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(12px)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 1px 8px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1)'
    : '0 1px 8px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '0.95rem',
  fontWeight: 500,
  textTransform: 'none',
  padding: theme.spacing(1.5, 2.5),
  margin: theme.spacing(0, 0.5),
  borderRadius: theme.shape.borderRadius * 1.5,
  transition: theme.transitions.create(['background-color', 'color', 'transform'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'translateY(0)',
  }
}));

interface NavigationProps {
  parentToChild: {
    mode: string;
  };
  modeChange: () => void;
}

function Navigation(props: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          minHeight: '64px',
          px: { xs: 2, sm: 4 },
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { sm: 'none' },
              color: (theme) => theme.palette.text.primary
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: 1
          }}>
            {navItems.map((item) => (
              item[0] === 'Home' ? (
              <StyledButton 
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
              > 
                <Home />
              </StyledButton>
              ) : (
                <StyledButton 
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                >
                  {item[0]}
                </StyledButton>
              )
            ))}
          </Box>
          <IconButton 
            onClick={props.modeChange}
            color={props.parentToChild.mode === 'dark' ? 'default' : 'primary'}
            sx={{
              borderRadius: theme => theme.shape.borderRadius * 1.5,
              transition: theme => theme.transitions.create(['background-color', 'transform'], {
                duration: theme.transitions.duration.shorter,
              }),
              '&:hover': {
                transform: 'translateY(-1px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              }
            }}
          >
            {props.parentToChild.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: (theme) => 
                theme.palette.mode === 'dark' ? '#0d1116' : '#ffffff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar /> {/* This creates space below the fixed AppBar */}
    </>
  );
}

export default Navigation;