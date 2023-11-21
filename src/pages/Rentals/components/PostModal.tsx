import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Modal from '@mui/joy/Modal';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';
import Post from '../../../types/post';
import { parseExpand } from '../../../utils/pb.utils';
import { useClientContext } from 'pocketbase-react';
import { Box, Button, DialogActions, Divider, Typography } from '@mui/joy';
import { nToLuFormat } from '../../../utils/number.utils';
import { timeSince } from '../../../utils/time.utils';
import Comment from '../../../types/comment';
import MessageInput from './MessageInput';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useUser from '../../../hooks/useUser';

export default function PostModal({ id }: React.PropsWithRef<{ id: string }>) {
  const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>('center');
  const [p, setP] = React.useState<Post | null>(null);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const client = useClientContext();
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const { session } = useUser();

  const postComment = () => {
    setComments([
      ...comments,
      {
        id: 'randomtest',
        content: `<p>${textAreaValue}</p>`,
        created: new Date().toISOString(),
      },
    ]);
  };

  console.log(comments);
  React.useEffect(() => {
    if (!p)
      client
        ?.collection<Post>('posts')
        .getOne(id, { expand: 'user,tags' })
        .then((res) => setP(parseExpand(res)[0]))
        .catch(console.error);
    else
      client
        ?.collection<Comment>('comments')
        .getList(1, 50, { filter: `post.id="${p?.id}"` })
        .then((res) => setComments(parseExpand(res.items)))
        .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, id, p]);

  return (
    <Modal
      open={!!layout}
      onClose={() => {
        setLayout(undefined);
      }}
    >
      <ModalDialog sx={{ width: '80vw' }} layout={layout}>
        <ModalClose />
        {p && (
          <>
            <DialogTitle>
              [{`Hace ${timeSince(new Date(p.created || Date.now()))}, por ${'Luka Cerrutti'}`}] {p.title}
            </DialogTitle>
            <DialogActions>
              <Button size="sm">
                <ThumbUpIcon />
              </Button>
              <Divider orientation="vertical" />
              <Typography
                startDecorator={<VisibilityIcon />}
                level="body-xs"
                fontWeight="md"
                textColor="text.secondary"
              >
                {nToLuFormat(p.views)} vistas
              </Typography>
              <Divider orientation="vertical" />
              <Typography startDecorator={<ThumbUpIcon />} level="body-xs" fontWeight="md" textColor="text.secondary">
                {nToLuFormat(p.likes)} likes
              </Typography>
            </DialogActions>

            <Box
              style={{
                paddingTop: '1em',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                height: '375vh',
              }}
              dangerouslySetInnerHTML={{
                __html: p.content || '',
              }}
            />
            <Divider />
            <Box
              style={{
                paddingTop: '1em',
                display: 'flex',
                flexDirection: 'column',
                height: '250vh',
                overflow: 'auto',
              }}
            >
              <Typography level="h3" marginBottom={2}>
                Comentarios
              </Typography>
              {comments &&
                comments.length !== 0 &&
                comments.map((c) => (
                  <>
                    <Box display="flex" flexDirection="row" gap={2} marginBlock={1} marginTop={2}>
                      <Typography level="title-md">
                        Por <b>Luka Cerrutti</b>
                      </Typography>
                      <Typography startDecorator={<AccessTimeIcon />} level="title-sm">
                        <i>Hace {timeSince(new Date(p.created || Date.now()))}</i>
                      </Typography>
                    </Box>

                    <Box
                      borderRadius={4}
                      border={'1px solid #e5e5e5'}
                      paddingInline={2}
                      marginInline={1}
                      dangerouslySetInnerHTML={{ __html: c.content || '' }}
                    />
                  </>
                ))}
              {session && (
                <>
                  <Divider sx={{ marginBlock: 2 }} />
                  <MessageInput
                    textAreaValue={textAreaValue}
                    setTextAreaValue={setTextAreaValue}
                    onSubmit={postComment}
                  />
                </>
              )}
            </Box>
          </>
        )}
      </ModalDialog>
    </Modal>
  );
}
