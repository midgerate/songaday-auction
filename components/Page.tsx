import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import { times } from 'lodash-es';
import NextLink from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SongDetail } from '../components/SongDetail';
import { Filters } from '../containers/Filters';
import { SongsProgress } from '../lib/types';
import { useSongs } from '../lib/useSongs';
import { HumanKeys, HumanMaps } from '../lib/utils/constants';
import { FilterTag } from './FilterTag';
import { GridOfSongs } from './GridOfSongs';
import SongCard from './SongCard';
import SongListDescription from './SongListDescription';

interface PageProps {
  isHomepage?: boolean;
  progressBarData?: SongsProgress;
}

export function Page({ isHomepage }: PageProps) {
  // filter state
  const {
    filters: { id, ...filters },
    resetFilters,
    makeHref,
  } = Filters.useContainer();

  const hasFiltered = useMemo(() => Object.values(filters).filter(Boolean).length > 0, [filters]);

  const {
    songs,
    availableFilters,
    loading,
    error,
    hasMore,
    loadMore,
    isEmpty,
    isHydrating,
    totalCount,
  } = useSongs(filters);

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

  // ui filter header state
  const [_focusedTab, setFocusedTab] = useState<string>();
  const focusedTab = _focusedTab ?? 'instrument';

  const discardChanges = useCallback(() => {
    resetFilters();
    setFocusedTab(undefined);
  }, [resetFilters]);

  const [randomSongNumber, setRandomSongNumber] = useState(1);

  useEffect(() => {
    setRandomSongNumber(Math.floor(Math.random() * 730) + 1);
  }, []);

  const tabButton = (key: string) => {
    const focused = focusedTab === key;
    const selected = !!filters[key];

    return (
      <Button
        width="100%"
        onClick={() => setFocusedTab(focused ? undefined : key)}
        isActive={focused || selected}
        textDecoration={focused && 'underline'}
        _active={{
          bg: selected ? 'blue.100' : 'gray.300',
        }}
      >
        {filters[key] ? HumanMaps[key][filters[key]] : HumanKeys[key]}
      </Button>
    );
  };

  return (
    <>
      {id && <SongDetail id={id} />}

      {isHomepage && !hasFiltered && (
        <>
          <Box
            bgImage="url('assets/location_misquomicutri.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Center h={64}>
              <Heading as="h1" maxW="container.md" fontSize="5xl">
                Explore Songs
              </Heading>
            </Center>
          </Box>
          <Box mx={{ base: 8, lg: 40 }} pb={10}>
            <Center>
              <Stack
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                w="full"
                justifyContent="space-around"
                my={8}
                spacing={4}
              >
                <NextLink href={`/song/${randomSongNumber}`}>
                  <Button as="a" w="xs" colorScheme="blue" variant="outline">
                    Hear Random Song
                  </Button>
                </NextLink>
                <NextLink href="/song-suggestion">
                  <Button as="a" w="xs" colorScheme="blue" variant="outline">
                    Suggest Song
                  </Button>
                </NextLink>
                <NextLink href="/all-songs">
                  <Button as="a" w="xs" colorScheme="blue" variant="outline">
                    View All Songs
                  </Button>
                </NextLink>
              </Stack>
            </Center>
          </Box>
        </>
      )}

      <Box py="8" px={{ base: '2', xl: '8' }}>
        <Heading id="filterSongs" as="h2" fontSize="3xl" mb="4">
          Filter All Songs
        </Heading>

        <Text mb="10" lineHeight="tall">
          Click on the images to filter and find the perfect Song a Day song for you. Every song is
          unique and has its very own set of traits and characteristics.
        </Text>

        <VStack align="stretch" spacing={8}>
          {error && <Alert status="error">{error.message}</Alert>}

          <Stack direction={['column', 'column', 'row']} spacing={6} align="stretch">
            <Flex
              display={['grid', 'grid', 'flex']}
              gridTemplateColumns="repeat(3, minmax(0, 1fr))"
              gridGap={3}
              flexDirection="column"
            >
              {tabButton('instrument')}
              {tabButton('topic')}
              {tabButton('mood')}
              {tabButton('location')}
              {tabButton('beard')}
              {tabButton('year')}
              <Button
                width="100%"
                variant="outline"
                onClick={discardChanges}
                disabled={!hasFiltered}
              >
                Clear all
              </Button>
            </Flex>

            <SimpleGrid width="100%" gap={3} columns={[3, 4, 8]}>
              {loading
                ? times(12, (i) => <Skeleton key={i} h="9rem" w="full" borderRadius="md" />)
                : availableFilters?.[focusedTab]?.map((key) => {
                    const href = makeHref({
                      ...filters,
                      // If the filters already includes the key, clicking again will
                      // set it to null to remove it from the filters
                      [focusedTab]: filters[focusedTab] === key ? null : key,
                    });
                    return (
                      <NextLink
                        key={key}
                        href={href === '/' ? '/#filterSongs' : href}
                        passHref
                        shallow
                      >
                        <a
                          onClick={() => {
                            window.scroll(0, 0);
                          }}
                        >
                          <FilterTag
                            prefix={focusedTab}
                            thumbKey={key}
                            selected={filters[focusedTab] === key}
                          >
                            {HumanMaps[focusedTab][key]}
                          </FilterTag>
                        </a>
                      </NextLink>
                    );
                  })}
            </SimpleGrid>
          </Stack>

          <Divider />

          <Text fontSize={['md', 'md', 'xl']}>
            {hasFiltered ? (
              <>
                Found {totalCount} songs <SongListDescription filters={filters} />.
              </>
            ) : (
              <>Showing {totalCount} songs from the catalog.</>
            )}
          </Text>

          {isEmpty && (
            <HStack>
              <Button variant="outline" onClick={discardChanges}>
                Clear all filters
              </Button>
            </HStack>
          )}

          <GridOfSongs songs={songs}>
            {includeSkeletons && times(12, (i) => <SongCard key={i} song={undefined} card />)}

            <div ref={sentinel} />
          </GridOfSongs>
        </VStack>
      </Box>
    </>
  );
}
