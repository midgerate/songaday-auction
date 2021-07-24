import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Box, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { times } from 'lodash-es';
import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { OpenSeaSellOrder, OpenSeaSong } from '../lib/types';
import { useTestOpenSeaPort } from '../lib/useTestOpenSeaPort';
import { BuySongModal } from './BuySongModal';
import { SongBuyCard } from './SongBuyCard';
import SongCard from './SongCard';

/**
 * Constants & Helpers
 */

interface SplitSongName {
  name: string;
  songNumber: string;
}

function formatBigNumber(bigNumber: number): number {
  return bigNumber / Math.pow(10, 18);
}

function parseSongName(name: string): SplitSongName {
  const splitName = name.split(' | ');
  let songNumber;
  if (splitName && splitName.length === 2) {
    const splitSongNumber = splitName[1].split('#');
    songNumber = splitSongNumber[1];
  }
  return {
    name: splitName[0],
    songNumber,
  };
}

function getPrice(sellOrders: OpenSeaSellOrder[]): number {
  if (!sellOrders) {
    return 0;
  }
  const sellOrder = sellOrders[0];
  return formatBigNumber(parseInt(sellOrder?.current_price || '0'));
}

// Get the assets from OpenSea. We set the `owner` to Jonathan's address
// so that we only fetch songs that have not been sold.
function getApiKey(): string {
  const url = `https://rinkeby-api.opensea.io/api/v1/assets?${new URLSearchParams({
    // collection: 'song-a-day-test',
    owner: '0x7271C5398456Dae6b6AB6Ac94C41A6522a3c4cBf', // Jonathan's address
  })}`;
  return url;
}

/**
 * Component
 */

export function TestFeaturedSongs({
  gridSize = 4,
  showAllSongs,
}: {
  gridSize?: number;
  showAllSongs?: boolean;
}): JSX.Element {
  // Max number of pages currently is `6`.
  // After that, there are no more songs.
  const [page, setPage] = useState(0);

  const {
    openSeaPort,
    transactionStarted,
    isModalOpen,
    setIsModalOpen,
    onModalClose,
  } = useTestOpenSeaPort();

  const { data, error, mutate } = useSWR(getApiKey(), fetcher);

  function loadNextSongs() {
    setPage((prevPage) => {
      if (prevPage <= 5) {
        return prevPage + 1;
      }
    });
  }

  function loadPreviousSongs() {
    setPage((prevPage) => {
      if (prevPage > 0) {
        return prevPage - 1;
      }
    });
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );
  }

  return (
    <Box>
      <SimpleGrid gap="4" columns={{ base: 1, md: 2, lg: gridSize }}>
        {!data && !error && times(gridSize * 2, (i) => <SongCard key={i} song={undefined} card />)}
        {data?.assets.map((song: OpenSeaSong) => {
          const price = getPrice(song.sell_orders);
          if (!song.name || price === 0) {
            return null;
          }
          const { name, songNumber } = parseSongName(song.name);
          const date = song.traits.find((trait) => trait.trait_type === 'DATE');
          return (
            <SongBuyCard
              key={song.id}
              song={song}
              songNumber={songNumber}
              name={name}
              price={price}
              date={date}
              mutate={mutate}
              openSeaPort={openSeaPort}
              setIsModalOpen={setIsModalOpen}
            />
          );
        })}
      </SimpleGrid>
      {showAllSongs && (
        <Center
          mt="6"
          py="3"
          bg="gray.50"
          border="1px"
          borderColor="gray.200"
          position="sticky"
          bottom="0px"
          zIndex="sticky"
        >
          {page > 0 && (
            <Button
              colorScheme="blue"
              variant="outline"
              mx="4"
              size="sm"
              isDisabled={!data}
              leftIcon={<ArrowBackIcon />}
              onClick={loadPreviousSongs}
            >
              Previous Songs
            </Button>
          )}
          {page <= 5 && (
            <Button
              colorScheme="blue"
              variant="outline"
              mx="4"
              size="sm"
              isDisabled={!data}
              rightIcon={<ArrowForwardIcon />}
              onClick={loadNextSongs}
            >
              Next Songs
            </Button>
          )}
        </Center>
      )}
      <BuySongModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        transactionStarted={transactionStarted}
      />
    </Box>
  );
}
