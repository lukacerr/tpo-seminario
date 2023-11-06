import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';
import { Box } from '@mui/joy';
import ForumIcon from '@mui/icons-material/Forum';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        No al modelo empobrecedor
      </Typography>
      <Typography level="h1" fontWeight="xl" fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)">
        La comunidad de inversión para el bolsillo Argentino
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        A la hora de invertir, los ciudadanos argentinos se encuentran con desafíos. Asesorémonos juntos.
      </Typography>
      <Box width={'100%'} display={'flex'} gap={4}>
        <Link width={'100%'} href="/registrarse" fontWeight="lg">
          <Button size="lg" endDecorator={<ArrowForward />} sx={{ width: '100%' }}>
            Empezá hoy
          </Button>
        </Link>
        <Link width={'100%'} href="/" fontWeight="lg">
          <Button variant="outlined" size="lg" endDecorator={<ForumIcon />} sx={{ width: '100%' }}>
            Ver foro
          </Button>
        </Link>
      </Box>

      <Typography>
        ¿Ya sos un miembro?{' '}
        <Link href="/ingresar" fontWeight="lg">
          Ingresar
        </Link>
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        © Grupo 5 SIPI - MIE MA 2° cuatrimestre 2023
      </Typography>
    </TwoSidedLayout>
  );
}
