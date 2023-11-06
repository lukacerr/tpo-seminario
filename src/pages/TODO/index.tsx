import { Sheet, Stack, Typography } from '@mui/joy';
import InnerLayout from '../../layouts/InnerLayout';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function Todo() {
  return (
    <InnerLayout>
      <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Sheet
          invertedColors
          variant="soft"
          sx={{
            p: 2,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography letterSpacing={0.25} fontStyle="italic" level="h3" sx={{ opacity: 0.75 }}>
            En progreso...
          </Typography>
          <ConstructionIcon sx={{ fontSize: '2em', opacity: 0.625 }}></ConstructionIcon>
        </Sheet>
      </Stack>
    </InnerLayout>
  );
}
