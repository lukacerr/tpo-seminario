import GlobalStyles from '@mui/joy/GlobalStyles';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoIcon from '@mui/icons-material/Info';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import MuiLogo from '../../assets/icons/MuiLogo';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/joy';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useUser from '../../hooks/useUser';

export default function FirstSidebar() {
  const { session, logout } = useUser();
  const pathname = window.location.pathname.split('/')[1];

  return (
    <Sheet
      className="FirstSidebar"
      sx={{
        position: {
          xs: 'fixed',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          lg: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 1499,
        height: '100dvh',
        maxWidth: 'var(--FirstSidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <MuiLogo />
      <List size="sm" sx={{ '--ListItem-radius': '6px', '--List-gap': '8px' }}>
        {session && (
          <>
            <ListItem>
              <Link to="/perfil">
                <IconButton size="lg" {...(pathname == 'perfil' ? { variant: 'solid', color: 'primary' } : {})}>
                  <Tooltip arrow placement="right" size="lg" color="primary" title="Perfil">
                    <PeopleRoundedIcon />
                  </Tooltip>
                </IconButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/ajustes">
                <IconButton size="lg" {...(pathname == 'ajustes' ? { variant: 'solid', color: 'primary' } : {})}>
                  <Tooltip arrow placement="right" size="lg" color="primary" title="Ajustes">
                    <SettingsRoundedIcon />
                  </Tooltip>
                </IconButton>
              </Link>
            </ListItem>
          </>
        )}

        {!session && (
          <>
            <ListItem>
              <Link to="/registrarse">
                <IconButton size="lg" {...(pathname == 'registrarse' ? { variant: 'solid', color: 'primary' } : {})}>
                  <Tooltip arrow placement="right" size="lg" color="primary" title="Registrate">
                    <PersonAddIcon />
                  </Tooltip>
                </IconButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/ingresar">
                <IconButton size="lg" {...(pathname == 'ingresar' ? { variant: 'solid', color: 'primary' } : {})}>
                  <Tooltip arrow placement="right" size="lg" color="primary" title="Ingresar">
                    <LoginIcon />
                  </Tooltip>
                </IconButton>
              </Link>
            </ListItem>
          </>
        )}
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '4px',
        }}
      >
        <ListItem>
          <Link to="/" {...(pathname == '' ? { variant: 'solid', color: 'primary' } : {})}>
            <IconButton size="lg">
              <Tooltip arrow placement="right" size="lg" color="primary" title="Home">
                <HomeRoundedIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/acerca-de">
            <IconButton size="lg" {...(pathname == 'acerca-de' ? { variant: 'solid', color: 'primary' } : {})}>
              <Tooltip arrow placement="right" size="lg" color="primary" title="Sobre InverRed">
                <InfoIcon />
              </Tooltip>
            </IconButton>
          </Link>
        </ListItem>
        {session && (
          <ListItem>
            <Link to="/ingresar" {...(pathname == 'ingresar' ? { variant: 'solid', color: 'primary' } : {})}>
              <IconButton onClick={() => logout()} size="lg">
                <Tooltip arrow placement="right" size="lg" color="primary" title="Cerrar sesión">
                  <LogoutIcon />
                </Tooltip>
              </IconButton>
            </Link>
          </ListItem>
        )}
      </List>
      <Divider />
    </Sheet>
  );
}
