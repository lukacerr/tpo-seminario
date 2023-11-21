import { Stack } from '@mui/joy';
import ToggleGroup from './ToggleGroup';

export default function Toggles() {
  return (
    <Stack spacing={1.5} direction="row" justifyContent="space-between" pt={2}>
      <ToggleGroup
        options={[
          { label: '🔥 Hot', value: 'hot' },
          { label: '🆕 Nuevo', value: 'new' },
          { label: '💯 Top', value: 'top' },
        ]}
      />
      <ToggleGroup
        sx={{ display: { xs: 'none', md: 'flex' } }}
        options={[
          { label: <i data-feather="list" />, value: 'list' },
          { label: <i data-feather="grid" />, value: 'map' },
        ]}
      />
    </Stack>
  );
}
