import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import OuterLayout from '../../layouts/OuterLayout';
import GoogleIcon from '../../assets/icons/GoogleIcons';
import { Checkbox } from '@mui/joy';
import useUser from '../../hooks/useUser';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Login() {
  const { login } = useUser();

  return (
    <OuterLayout>
      <Box
        component="main"
        sx={{
          my: 'auto',
          py: 2,
          pb: 5,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 400,
          maxWidth: '100%',
          mx: 'auto',
          borderRadius: 'sm',
          '& form': {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          },
          [`& .${formLabelClasses.asterisk}`]: {
            visibility: 'hidden',
          },
        }}
      >
        <div>
          <Typography component="h1" fontSize="xl2" fontWeight="lg">
            Ingresá en tu cuenta
          </Typography>
          <Typography fontStyle="italic" level="body-sm" sx={{ my: 1, mb: 3 }}>
            ¿No estás{' '}
            <Link fontSize="sm" href="/registrarse" fontWeight="lg" mr="auto">
              registrado
            </Link>
            ?
          </Typography>
        </div>
        <form
          onSubmit={(event: React.FormEvent<SignInFormElement>) => {
            event.preventDefault();
            const formElements = event.currentTarget.elements;
            const data = {
              email: formElements.email.value,
              password: formElements.password.value,
            };
            alert(JSON.stringify(data, null, 2));
          }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" name="password" slotProps={{ input: { minLength: 8 } }} />
          </FormControl>
          <Checkbox size="sm" label="Recordáme" defaultChecked name="persistent" sx={{ paddingBlock: '6px 24px' }} />
          <Link href="/">
            <Button onClick={() => login()} type="button" fullWidth color="primary">
              Ingresar
            </Button>
          </Link>
        </form>
        <Link onClick={() => login()} href="/">
          <Button variant="outlined" color="neutral" fullWidth startDecorator={<GoogleIcon />}>
            Ingresá con Google
          </Button>
        </Link>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link fontSize="sm" href="/" fontWeight="lg" mr="auto">
            Ir al home
          </Link>
          <Link fontSize="sm" href="/olvide-contraseña" fontWeight="lg" ml="auto">
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </Box>
      <Box component="footer" sx={{ py: 3 }}>
        <Typography level="body-xs" textAlign="center">
          © Grupo 5 SIPI - MIE MA 2° cuatrimestre 2023
        </Typography>
      </Box>
    </OuterLayout>
  );
}
