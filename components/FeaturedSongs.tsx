import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Box,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { times } from 'lodash-es';
import { EventType, Network, OpenSeaPort } from 'opensea-js';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { Account } from '../containers/Account';
import fetcher from '../lib/fetcher';
import { OpenSeaSellOrder, OpenSeaSong } from '../lib/types';
import { SongBuyCard } from './SongBuyCard';
import SongCard from './SongCard';

interface SplitSongName {
  name: string;
  songNumber: string;
}

function formatBigNumber(bigNumber: number): number {
  return bigNumber / Math.pow(10, 18);
}

function parseSongName(name: string): SplitSongName {
  const splitName = name.split(' | ');
  return {
    name: splitName[0],
    songNumber: splitName[1],
  };
}

function getPrice(sellOrders: OpenSeaSellOrder[]): number {
  if (!sellOrders) {
    return 0;
  }
  const sellOrder = sellOrders[0];
  return formatBigNumber(parseInt(sellOrder?.current_price || '0'));
}

export function FeaturedSongs({ gridSize = 4 }: { gridSize?: number }): JSX.Element {
  const { provider } = Account.useContainer();
  const [openSeaPort, setOpenSeaPort] = useState<OpenSeaPort>();

  const [transactionStarted, setTransactionStarted] = useState(false);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const onAlertClose = () => setIsAlertOpen(false);
  const cancelRef = useRef();

  useEffect(() => {
    if (provider) {
      const seaport = new OpenSeaPort(provider, {
        networkName: Network.Main,
      });
      setOpenSeaPort(seaport);
    }
  }, [provider]);

  useEffect(() => {
    if (openSeaPort && openSeaPort.addListener) {
      openSeaPort.addListener(EventType.TransactionCreated, () => {
        setTransactionStarted(true);
      });
      openSeaPort.addListener(EventType.TransactionConfirmed, ({ event }) => {
        // Only reset your exchange UI if we're finishing an order fulfillment or cancellation
        if (event == EventType.MatchOrders || event == EventType.CancelOrder) {
          setTransactionStarted(false);
        }
      });
    }
  }, [openSeaPort]);

  // Get the assets from OpenSea. We set the `owner` to Jonathan's address
  // so that we only fetch songs that have not been sold.
  const url = `https://api.opensea.io/api/v1/assets?${new URLSearchParams({
    collection: 'song-a-day',
    limit: '50', // API is capped to 50
    order_by: 'visitor_count',
    owner: '0x3d9456ad6463a77bd77123cb4836e463030bfab4', // Jonathan's address
  })}`;

  const { data, error, mutate } = useSWR(url, fetcher);

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
        {!data && !error && times(gridSize, (i) => <SongCard key={i} song={undefined} card />)}
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
              openSeaPort={openSeaPort}
              mutate={mutate}
              setIsAlertOpen={setIsAlertOpen}
            />
          );
        })}
      </SimpleGrid>
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onAlertClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent textAlign="center">
            <AlertDialogHeader mt="3" fontSize="lg" fontWeight="bold">
              {transactionStarted ? 'Your transaction has started' : 'Completing the trade...'}
            </AlertDialogHeader>
            <AlertDialogBody>
              {transactionStarted ? (
                <>
                  <Spinner color="blue.500" size="lg" />{' '}
                  <Text my="6" lineHeight="7">
                    The Ethereum network is processing your transaction, which can take a little
                    while.
                  </Text>
                </>
              ) : (
                <Text mb="4">Please confirm the transaction from your Wallet.</Text>
              )}
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
