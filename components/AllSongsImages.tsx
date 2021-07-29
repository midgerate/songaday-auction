import { AspectRatio, Box, SimpleGrid } from '@chakra-ui/react';
import { times } from 'lodash-es';
import Image from 'next/image';
import Link from 'next/link';

export function AllSongsImages({ songGridColumns }: { songGridColumns?: number[] }) {
  return (
    <Box py="8" px={{ base: '2', xl: '8' }}>
      <SimpleGrid gap="4" columns={songGridColumns}>
        {times(730, (i) => {
          const songId = i + 1;
          return (
            <Link key={songId} href={`/song/${songId}`}>
              <a>
                <AspectRatio ratio={4 / 3}>
                  <Image src={`/generated/${songId}.png`} layout="fill" objectFit="cover" />
                </AspectRatio>
              </a>
            </Link>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
