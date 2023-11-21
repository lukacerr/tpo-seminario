import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/joy';
import useUser from '../../../hooks/useUser';

export default function HeaderSection() {
  const { session } = useUser();

  return (
    <Stack
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
    >
      <div>
        <Typography
          level="h1"
          fontSize={{
            xs: 'xl2',
            md: 'xl4',
          }}
        >
          Posts
        </Typography>
        <Typography level="body-md" color="neutral">
          Conocé de lo que se está hablando.
        </Typography>
      </div>

      {session && (
        <Stack direction="row" spacing={1.5}>
          <Link href="/perfil">
            <Button variant="outlined" color="neutral" href="/">
              Tu actividad
            </Button>
          </Link>

          <Link href="/publicar">
            <Button variant="solid" color="primary" startDecorator={<AddIcon />}>
              Crear post
            </Button>
          </Link>
        </Stack>
      )}
    </Stack>
  );
}
