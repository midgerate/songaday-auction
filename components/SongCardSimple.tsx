import { AspectRatio, BoxProps, Heading, Skeleton, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Song } from '../lib/types';

interface SongCardSimpleProps {
  song: Song;
  hideSimpleSongCardTitle?: boolean;
}

function SongCardSimple({
  song,
  hideSimpleSongCardTitle,
  ...delegated
}: BoxProps & SongCardSimpleProps) {
  return (
    <VStack
      {...{
        borderWidth: '1px',
        borderColor: 'gray.200',
        borderRadius: 'sm',
        _hover: { shadow: 'sm' },
        transition: 'all 100ms linear',
      }}
      spacing="2"
      alignItems="stretch"
      bg="white"
      {...delegated}
    >
      {!hideSimpleSongCardTitle &&
        (song ? (
          <Heading as="h3" px="2" py="3" fontSize="sm" fontWeight="semibold" isTruncated>
            {song.title}
          </Heading>
        ) : (
          <Skeleton h="6" w="full" />
        ))}

      {song ? (
        // <Image src={`/generated/${song.id}.png`} width={1792} height={768} />
        <AspectRatio ratio={4 / 3}>
          <Image src={`/generated/${song.id}.png`} layout="fill" objectFit="cover" />
        </AspectRatio>
      ) : (
        <Skeleton h="full" w="full" />
      )}
    </VStack>
  );
}

export default SongCardSimple;
