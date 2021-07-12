import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { OpenSeaPort } from 'opensea-js';
import React, { useState } from 'react';
import { Account } from '../containers/Account';
import { OpenSeaSong } from '../lib/types';

interface SongBuyCardProps {
  song: OpenSeaSong;
  songNumber: string;
  name: string;
  price: number;
  openSeaPort: OpenSeaPort;
  mutate: (data?: any, shouldRevalidate?: boolean) => Promise<any>;
}

export function SongBuyCard({
  song,
  songNumber,
  name,
  price,
  openSeaPort,
  mutate,
}: SongBuyCardProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const { account } = Account.useContainer();
  const toast = useToast();

  const buyAsset = async () => {
    if (openSeaPort) {
      setIsLoading(true);
      toast({
        title: 'Transaction Started',
        description: 'Please confirm the transaction from your Wallet',
        status: 'success',
        position: 'bottom-right',
      });
      try {
        const order = await openSeaPort?.api.getOrder({
          side: 1,
          token_id: song.token_id,
          asset_contract_address: song.asset_contract.address,
        });
        await openSeaPort?.fulfillOrder({ order, accountAddress: account });
        toast({
          title: 'Transaction Successful!',
          description: 'Thank you for your purchase',
          status: 'success',
          position: 'bottom-right',
        });
        setIsLoading(false);
        mutate((cache) => {
          const newAssets = cache.assets.filter((asset) => asset.token_id !== song.token_id);
          return {
            assets: newAssets,
          };
        }, false);
      } catch (error) {
        setIsLoading(false);
        toast({
          title: 'An error has occurred',
          description: error.message,
          status: 'error',
          position: 'bottom-right',
        });
      }
    }
  };

  return (
    <Box mt="4" pt="3" pb="6" borderWidth="1px" borderColor="gray.200" borderRadius="md">
      <Flex justifyContent="space-between" px="4" mb="7" fontSize="xs">
        <Text>{songNumber}</Text>
      </Flex>
      <Box textAlign="center">
        <Image src={song.image_url} alt={song.name} width={512} height={220} />
      </Box>
      <Box px="4">
        <Text mt="4" lineHeight="6" fontWeight="semibold" isTruncated>
          {name}
        </Text>
        <Button
          mt="4"
          size="sm"
          colorScheme="blue"
          isLoading={isLoading}
          isDisabled={!account}
          onClick={buyAsset}
        >
          {account ? `Buy: ${price} Ξ` : 'Connect Wallet'}
        </Button>
      </Box>
    </Box>
  );
}
