import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Grid from '@mui/joy/Grid';
import CountrySelector from './CountrySelector';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Filters() {
  return (
    <div>
      <Grid spacing={1.5} container justifyContent="space-between" sx={{ flexGrow: 1 }}>
        <Grid xs={12} sm={6} md={3}>
          <CountrySelector
            values={[
              { id: '1', label: 'Fintech', postsAmount: 5 },
              { id: '2', label: 'Política', postsAmount: 7 },
              { id: '3', label: 'Acciones', postsAmount: 4 },
              { id: '4', label: 'Plazo fijo', postsAmount: 11 },
              { id: '5', label: 'Dólar', postsAmount: 13 },
              { id: '6', label: 'Criptomonedas', postsAmount: 2 },
            ]}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <FormControl>
            <Input type="date" placeholder="Fecha mínima" aria-label="Date" />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <FormControl>
            <Input startDecorator={<ThumbUpIcon />} type="number" placeholder="Mínimo de likes" aria-label="Price" />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} md={3} display="flex" justifyContent="flex-end">
          <Button variant="outlined" color="neutral" startDecorator={<i data-feather="filter" />}>
            Más filtros
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
