import { Box, BoxProps, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { Filters } from '../containers/Filters';
import { Song } from '../lib/types';
import SongCard from './SongCard';
import SongCardSimple from './SongCardSimple';

export function GridOfSongs({
  songs,
  children,
  columns = [1, 1, 2],
  showSimpleSongCard,
  hideSimpleSongCardTitle,
  ...delegated
}: BoxProps & {
  songs: Song[];
  columns?: number[];
  showSimpleSongCard?: boolean;
  hideSimpleSongCardTitle?: boolean;
}) {
  const { makeHref } = Filters.useContainer();
  return (
    <SimpleGrid {...delegated} gap="4" columns={columns}>
      {songs?.map((song) => (
        <Box key={song.id} position="relative">
          {showSimpleSongCard ? (
            <SongCardSimple
              cursor="pointer"
              h="full"
              song={song}
              hideSimpleSongCardTitle={hideSimpleSongCardTitle}
            />
          ) : (
            <SongCard cursor="pointer" h="full" song={song} card />
          )}
          <Link key={song.id} href={makeHref({ id: song.id })} shallow>
            <ChakraLink
              position="absolute"
              top="0"
              right="0"
              bottom="0"
              left="0"
              overflow="hidden"
              whiteSpace="nowrap"
              zIndex="0"
            />
          </Link>
        </Box>
      ))}

      {children}
    </SimpleGrid>
  );
}
