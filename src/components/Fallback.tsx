import { Box, CssBaseline, CssVarsProvider, CircularProgress, Stack, Typography } from '@mui/joy';
import framesxTheme from '../theme/home';

export default function Fallback() {
  return (
    <CssVarsProvider disableTransitionOnChange defaultMode="system" theme={framesxTheme}>
      <CssBaseline />
      <Stack gap={8} overflow={'hidden'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Box display={'flex'} justifyContent={'center'} maxHeight={'2em'} width={'20%'} minWidth={'16em'}>
          <CircularProgress value={37.5} size="lg" variant="plain" />
        </Box>
        <Typography letterSpacing={0.25} fontStyle={'italic'} sx={{ opacity: 0.625 }}>
          Cargando...
        </Typography>
      </Stack>
    </CssVarsProvider>
  );
}
