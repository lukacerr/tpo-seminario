import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import DropZone from './DropZone';
import { Link, Option, Select } from '@mui/joy';
import MessageInput from './MessageInput';
import { useState } from 'react';

export default function UploadFile() {
  const [textAreaValue, setTextAreaValue] = useState('');

  return (
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
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Título *</FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Título</FormLabel>
          <Input placeholder="Título" />
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}></FormLabel>
        </FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel sx={{ display: { xs: 'none', sm: 'block' } }}>Etiqueta *</FormLabel>
      <Box sx={{ display: { xs: 'contents', sm: 'flex' }, gap: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}>Etiqueta</FormLabel>
          <Select placeholder="Etiqueta">
            <Option value={1}>Fintech</Option>
            <Option value={2}>Política</Option>
            <Option value={3}>Acciones</Option>
            <Option value={4}>Plazo fijo</Option>
            <Option value={5}>Dólar</Option>
            <Option value={6}>Criptomonedas</Option>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: 1 }}>
          <FormLabel sx={{ display: { sm: 'none' } }}></FormLabel>
        </FormControl>
      </Box>
      <Divider role="presentation" />
      <FormLabel>Contenido</FormLabel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2.5,
          width: '100%',
        }}
      >
        <MessageInput textAreaValue={textAreaValue} setTextAreaValue={setTextAreaValue} onSubmit={() => {}} />
      </Box>
      <Divider role="presentation" />
      <FormLabel>Adjuntar archivos</FormLabel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2.5,
        }}
      >
        <DropZone />
      </Box>
      <Divider role="presentation" />
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
          <Button size="sm">Publicar</Button>
        </Link>
      </Box>
    </Box>
  );
}
