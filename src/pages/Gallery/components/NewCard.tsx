import { Card, Badge, CardContent, CardCover, CardOverflow, Chip, Divider, Stack, Typography } from '@mui/joy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { timeSince } from '../../../utils/time.utils';
import New from '../../../types/New';
import { nToLuFormat } from '../../../utils/number.utils';

function NewCore({ n }: React.PropsWithRef<{ n: New }>) {
  return (
    <CardContent>
      <Typography level="title-md">{n.title}</Typography>
      {n.subtitle && <Typography level="body-sm">{n.subtitle}</Typography>}
      {n.tags && n.tags?.length !== 0 && (
        <Stack flexDirection="row" flexWrap="wrap" gap=".25em .375em" marginTop={1}>
          {n.tags.map((t) => (
            <Chip key={t.id} size="sm" variant="outlined">
              {t.name}
            </Chip>
          ))}
        </Stack>
      )}
    </CardContent>
  );
}

function NewReleaseBadge({ children }: React.PropsWithChildren) {
  return <Badge badgeContent={'Nuevo'}>{children}</Badge>;
}

export default function NewCard({ n, latest }: React.PropsWithRef<{ n: New; latest?: boolean }>) {
  return (
    <Card variant="outlined" sx={{ cursor: 'pointer' }} onClick={() => location.replace(`/noticias/${n.id}`)}>
      {n.cover && (
        <CardCover>
          <img src={n.cover} loading="lazy" alt={n.title} style={{ opacity: 0.25, filter: 'blur(4px)' }} />
        </CardCover>
      )}

      {!latest ? (
        <NewCore n={n} />
      ) : (
        <NewReleaseBadge>
          <NewCore n={n} />
        </NewReleaseBadge>
      )}

      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography startDecorator={<AccessTimeIcon />} level="body-xs" fontWeight="md" textColor="text.secondary">
            {`Hace ${timeSince(new Date(n.created || Date.now()))}`}
          </Typography>
          <Divider orientation="vertical" />
          <Typography startDecorator={<VisibilityIcon />} level="body-xs" fontWeight="md" textColor="text.secondary">
            {nToLuFormat(n.views)} vistas
          </Typography>
          <Divider orientation="vertical" />
          <Typography startDecorator={<ThumbUpIcon />} level="body-xs" fontWeight="md" textColor="text.secondary">
            {nToLuFormat(n.likes)} likes
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
