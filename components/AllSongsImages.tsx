import { AspectRatio, Box, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import allSongs from '../generated/db';

export function AllSongsImages({
  songGridColumns,
  hideTitle,
}: {
  songGridColumns?: number[];
  hideTitle?: boolean;
}) {
  return (
    <Box py="8" px={{ base: '2', xl: '8' }}>
      <SimpleGrid gap="4" columns={songGridColumns}>
        {allSongs.map((song) => {
          return (
            <Link key={song.id} href={`/song/${song.id}`}>
              <a>
                {!hideTitle && (
                  <Text fontSize={['xs', 'xs', 'sm']} mb="2" mt="4" isTruncated>
                    {song.title}
                  </Text>
                )}
                <AspectRatio ratio={4 / 3}>
                  <Image src={`/generated/${song.id}.png`} layout="fill" objectFit="cover" />
                </AspectRatio>
              </a>
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
