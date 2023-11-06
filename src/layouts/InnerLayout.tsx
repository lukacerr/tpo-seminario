import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import FirstSidebar from './components/FirstSidebar';
import SecondSidebar from './components/SecondSidebar';
import Header from './components/Header';
import ColorSchemeToggle from '../components/ColorSchemeToggle';
import { Children } from '../types';
import framesxTheme from '../theme/home';

export default function InnerLayout({ children }: Children) {
  const pathname = window.location.pathname.split('/')[1];
  const idbase = window.location.pathname.split('/')[2];

  return (
    <CssVarsProvider defaultMode="system" disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <FirstSidebar />
        <SecondSidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
            ml: {
              md: 24,
            },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs size="sm" aria-label="breadcrumbs" separator={<ChevronRightRoundedIcon />}>
              <Link underline="none" color="neutral" href="/" aria-label="Home">
                <HomeRoundedIcon />
              </Link>
              {idbase && (
                <Link
                  underline="hover"
                  color="neutral"
                  href={`/${pathname || ''}`}
                  fontSize={12}
                  fontWeight={500}
                  sx={{ textTransform: 'capitalize' }}
                >
                  {pathname || 'explorar'}
                </Link>
              )}
              <Typography color="primary" fontWeight={500} fontSize={12} sx={{ textTransform: 'capitalize' }}>
                {idbase ? `Identificador #${idbase}` : pathname || 'explorar'}
              </Typography>
            </Breadcrumbs>
            <ColorSchemeToggle sx={{ ml: 'auto', display: { xs: 'none', lg: 'inline-flex' } }} />
          </Box>

          <Typography level="h2" sx={{ textTransform: 'capitalize', pl: 1 }}>
            {pathname ? pathname : 'Explorar'}
          </Typography>

          {children}
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
