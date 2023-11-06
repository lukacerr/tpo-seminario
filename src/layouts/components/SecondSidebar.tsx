import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

import MessageIcon from '@mui/icons-material/Message';
import UploadIcon from '@mui/icons-material/Upload';

import { closeSidebar } from '../../utils';
import { Link } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Avatar, Stack } from '@mui/joy';
import useUser from '../../hooks/useUser';

export default function SecondSidebar() {
  const { session } = useUser();
  const pathname = window.location.pathname.split('/')[1];

  return (
    <>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        color="neutral"
        sx={{
          position: {
            xs: 'fixed',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
          },
          transition: 'transform 0.4s',
          zIndex: 999,
          height: '100dvh',
          top: 0,
          p: 2,
          ml: { lg: 8 },
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
        }}
      >
        <List
          size="sm"
          sx={{
            '--ListItem-radius': '6px',
            '--List-gap': '6px',
          }}
        >
          <Stack alignItems="center" gap={0.5} maxWidth={'8em'}>
            <Avatar size="lg" sx={{ '--Avatar-size': '64px' }} src={session?.avatar} />
            <ListSubheader
              role="presentation"
              sx={{
                fontWeight: 'lg',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                display: 'inline-block',
                padding: '2em 1em 1em 1em',
                textAlign: 'center',
              }}
            >
              {session?.name ?? session?.email?.split('@')[0] ?? 'Anónimo'}
            </ListSubheader>
          </Stack>
          <ListItem>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItemButton
                onClick={() => closeSidebar()}
                {...(pathname == '' ? { variant: 'solid', color: 'primary' } : {})}
              >
                <ListItemDecorator>
                  <QueryStatsIcon />
                </ListItemDecorator>
                <ListItemContent>Explorar</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cursos" style={{ textDecoration: 'none' }}>
              <ListItemButton
                onClick={() => closeSidebar()}
                {...(pathname == 'cursos' ? { variant: 'solid', color: 'primary' } : {})}
              >
                <ListItemDecorator>
                  <MenuBookIcon />
                </ListItemDecorator>
                <ListItemContent>Cursos</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/noticias" style={{ textDecoration: 'none' }}>
              <ListItemButton
                onClick={() => closeSidebar()}
                {...(pathname == 'noticias' ? { variant: 'solid', color: 'primary' } : {})}
              >
                <ListItemDecorator>
                  <NewspaperIcon />
                </ListItemDecorator>
                <ListItemContent>Noticias</ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>

          {session && (
            <>
              <ListItem>
                <Link to="/publicar" style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    onClick={() => closeSidebar()}
                    {...(pathname == 'publicar' ? { variant: 'solid', color: 'primary' } : {})}
                  >
                    <ListItemDecorator>
                      <UploadIcon />
                    </ListItemDecorator>
                    <ListItemContent>Publicar</ListItemContent>
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/mensajes" style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    onClick={() => closeSidebar()}
                    {...(pathname == 'mensajes' ? { variant: 'solid', color: 'primary' } : {})}
                  >
                    <ListItemDecorator>
                      <MessageIcon />
                    </ListItemDecorator>
                    <ListItemContent>Mensajes</ListItemContent>
                  </ListItemButton>
                </Link>
              </ListItem>
            </>
          )}
        </List>
      </Sheet>
    </>
  );
}
