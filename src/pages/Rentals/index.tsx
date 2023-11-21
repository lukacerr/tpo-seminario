/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import useScript from '../../hooks/useScript';
import RentalCard from './components/RentalCard';
import Main from './components/Main';
import HeaderSection from './components/HeaderSection';
import Search from './components/Search';
import Filters from './components/Filters';
import Toggles from './components/Toggles';
import Pagination from './components/Pagination';
import InnerLayout from '../../layouts/InnerLayout';
import { useClientContext } from 'pocketbase-react';
import Post from '../../types/post';
import { parseExpand } from '../../utils/pb.utils';
import { useParams } from 'react-router-dom';
import PostModal from './components/PostModal';

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function RentalDashboard() {
  const status = useScript(`https://unpkg.com/feather-icons`);
  const [records, setRecords] = React.useState<Post[] | null>(null);
  const client = useClientContext();
  const { id } = useParams();

  React.useEffect(() => {
    client
      ?.collection<Post>('posts')
      .getList(1, 50, { expand: 'user,tags', sort: '-created' })
      .then((res) => setRecords(parseExpand(res.items)))
      .catch(console.error);
  }, [client]);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <InnerLayout>
      <Main>
        {id && <PostModal id={id} />}
        <Grid
          container
          sx={{
            width: '100%',
            margin: 0,
          }}
        >
          <Grid
            xs={12}
            lg={16}
            justifyContent="center"
            sx={{
              overflowY: 'auto',
              height: '100%',
              px: { xs: 2, md: 4 },
              pt: { xs: 8, md: 4 },
              pb: 5,
            }}
          >
            <Stack spacing={2}>
              <HeaderSection />
              <Divider />
              <Filters />
              <Search />
              <Toggles />
              {records && records.length && records.map((r, i) => <RentalCard liked={i == 1} key={r.id} post={r} />)}
              <Divider />
              <Pagination />
            </Stack>
          </Grid>
        </Grid>
      </Main>
    </InnerLayout>
  );
}
