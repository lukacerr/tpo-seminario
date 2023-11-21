import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';

export default function Search() {
  const [v, setV] = useState('');

  return (
    <Stack spacing={1.5} direction="row">
      <FormControl sx={{ flex: 1 }}>
        <Input
          value={v}
          onChange={(e) => setV(e.target.value)}
          placeholder="Búsqueda por contenido y comentarios..."
          startDecorator={<i data-feather="search" />}
          aria-label="Buscar"
        />
      </FormControl>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Button variant="outlined" color="neutral" onClick={() => setV('')}>
          Limpiar
        </Button>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Button variant="solid" color="primary">
          Buscar
        </Button>
      </Box>
    </Stack>
  );
}
