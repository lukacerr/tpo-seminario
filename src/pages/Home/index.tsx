import { useEffect, useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import framesxTheme from '../../theme/home';
import HeroLeft01 from './components/HeroLeft01';

function HomeSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="lg"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        position: 'fixed',
        zIndex: 99,
        top: '1rem',
        right: '2rem',
        borderRadius: '50%',
        boxShadow: 'sm',
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export default function Home() {
  return (
    <CssVarsProvider defaultMode="system" disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <HomeSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <HeroLeft01 />
      </Box>
    </CssVarsProvider>
  );
}
