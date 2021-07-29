import { Alert, Box, VStack } from '@chakra-ui/react';
import { times } from 'lodash-es';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Filters } from '../containers/Filters';
import { useSongs } from '../lib/useSongs';
import { GridOfSongs } from './GridOfSongs';
import SongCard from './SongCard';

interface AllSongsPageProps {
  songGridColumns?: number[];
  showSimpleSongCard?: boolean;
  hideSimpleSongCardTitle?: boolean;
}

export function AllSongsPage({
  songGridColumns,
  showSimpleSongCard,
  hideSimpleSongCardTitle,
}: AllSongsPageProps) {
  const { filters } = Filters.useContainer();
  const { songs, loading, error, hasMore, loadMore, isHydrating } = useSongs(filters);
  const includeSkeletons = isHydrating || loading;

  const [sentinel, inView] = useInView({
    rootMargin: '0px -200px',
    skip: !hasMore,
    initialInView: false,
  });

  useEffect(() => {
    if (!inView) return;
    if (loading) return;
    if (!hasMore) return;
    loadMore();
  }, [hasMore, inView, loadMore, loading]);

  return (
    <>
      <Box py="8" px={{ base: '2', xl: '8' }}>
        <VStack align="stretch" spacing={8}>
          {error && <Alert status="error">{error.message}</Alert>}
          <GridOfSongs
            songs={songs}
            columns={songGridColumns}
            showSimpleSongCard={showSimpleSongCard}
            hideSimpleSongCardTitle={hideSimpleSongCardTitle}
          >
            {includeSkeletons && times(12, (i) => <SongCard key={i} song={undefined} card />)}
            <div ref={sentinel} />
          </GridOfSongs>
        </VStack>
      </Box>
    </>
  );
}
