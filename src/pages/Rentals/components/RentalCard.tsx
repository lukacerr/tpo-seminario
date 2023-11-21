import * as React from 'react';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { nToLuFormat } from '../../../utils/number.utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import { timeSince } from '../../../utils/time.utils';
import Post from '../../../types/post';
import { parseExpand } from '../../../utils/pb.utils';

type RentalCardProps = {
  liked?: boolean;
  post: Post;
};

export default function RentalCard({ liked = false, post }: RentalCardProps) {
  const [isLiked, setIsLiked] = React.useState(liked);
  const [p] = React.useState<Post>(parseExpand(post)[0]);

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        transition: '250ms all',
        padding: {
          xs: 0,
          sm: 2,
        },
        boxShadow: 'none',
        borderRadius: 'sm',
        '&:hover': {
          boxShadow: 'md',
          borderColor: 'neutral.outlinedHoverBorder',
        },
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        width="100%"
        spacing={2.5}
      >
        <Stack
          sx={{
            padding: {
              xs: 2,
              sm: 0,
            },
          }}
          spacing={1}
          flex={1}
        >
          <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="flex-start">
            <div>
              <Typography color="primary" fontSize="sm" fontWeight="lg">
                {p.tags?.map((t) => t.name).join(', ')}
              </Typography>
              <Typography fontWeight="md" fontSize="lg">
                <Link overlay underline="none" href={`/posts/${p.id}`} sx={{ color: 'text.primary' }}>
                  {p.title}
                </Link>
              </Typography>
            </div>
            <IconButton
              variant={isLiked ? 'solid' : 'soft'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <i data-feather="thumbs-up" />
            </IconButton>
          </Stack>
          <Stack spacing={3} direction="row">
            <Typography startDecorator={<PersonIcon />}>Luka Cerrutti</Typography>
            <Typography
              startDecorator={<AccessTimeIcon />}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              Hace {timeSince(new Date(p.created || Date.now()))}
            </Typography>
            <Typography
              startDecorator={<VisibilityIcon />}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              {nToLuFormat(p.views)} vistas
            </Typography>
            <Typography
              startDecorator={<ThumbUpIcon />}
              display={{
                xs: 'none',
                md: 'flex',
              }}
            >
              {nToLuFormat(p.likes)} likes
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
