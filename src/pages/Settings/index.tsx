import InnerLayout from '../../layouts/InnerLayout';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { chipClasses } from '@mui/joy/Chip';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { Link } from '@mui/joy';

export default function Settings() {
  return (
    <InnerLayout>
      <Box
        sx={{
          flex: 1,
          width: '100%',
          mx: 'auto',
        }}
      >
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <Box
            sx={{
              '--_shadow-height': '16px',
              height: 0,
              position: 'sticky',
              top: 'calc(48px - var(--main-paddingTop, 0px) + var(--Header-height, 0px) - (var(--_shadow-height) / 2))',
              zIndex: 1,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                height: 'var(--_shadow-height)',
                background: 'radial-gradient(closest-side, rgba(0 0 0 / 0.12), transparent 100%)',
              },
            }}
          />
          <TabList
            sticky="top"
            variant="plain"
            sx={(theme) => ({
              '--Chip-minHeight': '20px',
              '--ListItem-minHeight': '48px',
              top: 'calc(-1 * (var(--main-paddingTop, 0px) - var(--Header-height, 0px)))',
              zIndex: 10,
              width: '100%',
              overflow: 'auto hidden',
              alignSelf: 'flex-start',
              scrollSnapType: 'inline',
              '&::after': {
                pointerEvents: 'none',
                display: { xs: 'block', sm: 'none' },
                content: '""',
                position: 'sticky',
                top: 0,
                width: 40,
                flex: 'none',
                zIndex: 1,
                right: 0,
                borderBottom: '1px solid transparent',
                background: `linear-gradient(to left, ${theme.vars.palette.background.body}, rgb(0 0 0 / 0))`,
                backgroundClip: 'content-box',
              },
              '&::-webkit-scrollbar': {
                width: 0,
                display: 'none',
              },
              [`& .${tabClasses.root}`]: {
                '--focus-outline-offset': '-2px',
                '&:first-of-type': {
                  ml: 'calc(-1 * var(--ListItem-paddingX))',
                },
                scrollSnapAlign: 'start',
                bgcolor: 'transparent',
                flex: 'none',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                [`&.${tabClasses.selected}`]: {
                  color: 'primary.plainColor',
                  bgcolor: 'transparent',
                  [`& .${chipClasses.root}`]: theme.variants.solid.primary,
                },
              },
            })}
          >
            <Tab indicatorInset value={0}>
              Mi cuenta
            </Tab>
          </TabList>
          <Box
            sx={{
              pt: 3,
              pb: 10,
              display: 'grid',
              gridTemplateColumns: {
                xs: '100%',
                sm: 'minmax(120px, 30%) 1fr',
                lg: '280px 1fr minmax(120px, 208px)',
              },
              columnGap: { xs: 2, sm: 3, md: 4 },
              rowGap: { xs: 2, sm: 2.5 },
              '& > hr': {
                gridColumn: '1/-1',
              },
            }}
          >
            <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Actualizar contraseña</FormLabel>
            <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Nueva contraseña</FormLabel>
                <Input placeholder=". . . " type="password" />
              </FormControl>
              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Confirmá tu nueva contraseña</FormLabel>
                <Input placeholder=". . . " type="password" />
              </FormControl>
            </Box>
            <Box
              sx={{
                gridColumn: '1/-1',
                justifySelf: 'flex-start',
                display: 'flex',
                gap: 1,
              }}
            >
              <Link href="/">
                <Button variant="outlined" color="neutral" size="sm">
                  Cancelar
                </Button>
              </Link>

              <Link href="/">
                <Button size="sm">Guardar</Button>
              </Link>
            </Box>
          </Box>
        </Tabs>
      </Box>
    </InnerLayout>
  );
}
