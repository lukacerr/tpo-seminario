import Box from '@mui/joy/Box';
import InnerLayout from '../../layouts/InnerLayout';
import NewCard from './components/NewCard';
import New from '../../types/New';
import { useClientContext } from 'pocketbase-react';
import { AspectRatio, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';
import { parseExpand } from '../../utils/pb.utils';
import { Skeleton } from '@mui/joy';
import { useParams } from 'react-router-dom';

function NewsGallery() {
  const [records, setRecords] = useState<New[] | null>(null);
  const [loading, setLoading] = useState(true);
  const client = useClientContext();

  useEffect(() => {
    client
      ?.collection<New>('news')
      .getList(1, 50, { expand: 'tags', sort: '-created' })
      .then((res) => setRecords(parseExpand(res.items)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [client]);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: 2,
      }}
    >
      {!loading && records ? (
        records.length ? (
          records.map((n, i) => <NewCard key={n.id} n={n} latest={!i} />)
        ) : (
          <></>
        )
      ) : (
        <>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
          <AspectRatio variant="plain" sx={{ width: 392 }}>
            <Skeleton />
          </AspectRatio>
        </>
      )}
    </Box>
  );
}

function IndividualNew({ id }: React.PropsWithRef<{ id: string }>) {
  const [record, setRecord] = useState<New | null>(null);
  const [loading, setLoading] = useState(true);
  const client = useClientContext();

  useEffect(() => {
    client
      ?.collection<New>('news')
      .getOne(id, { expand: 'tags', sort: '-created' })
      .then((res) => setRecord(parseExpand(res)[0]))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [client, id]);

  return (
    <Box sx={{ padding: '1em clamp(0.1em, 18.5%, 24rem)' }}>
      {!loading && record ? (
        <>
          <Typography level="h1">{record.title}</Typography>
          <Typography level="h4" fontStyle="italic" sx={{ opacity: 0.625 }}>
            {record.subtitle}
          </Typography>
          <div
            style={{ paddingTop: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            dangerouslySetInnerHTML={{ __html: record.content || '' }}
          />
        </>
      ) : (
        <AspectRatio ratio="2/1" variant="plain" sx={{ width: '100%' }}>
          <Skeleton />
        </AspectRatio>
      )}
    </Box>
  );
}

export default function Gallery() {
  const { id } = useParams();

  return (
    <InnerLayout>
      {id ? <IndividualNew id={id} /> : <NewsGallery />}
      <br />
    </InnerLayout>
  );
}
