import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  CloseButton,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { truncateHash } from '../lib/helpers';

interface BuySongModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionStarted: boolean;
}

export function BuySongModal({
  isOpen,
  onClose,
  transactionStarted,
}: BuySongModalProps): JSX.Element {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size="xl"
    >
      <AlertDialogOverlay>
        <AlertDialogContent textAlign="center">
          <AlertDialogHeader mt="3" position="relative" fontSize="lg" fontWeight="bold">
            <Text>
              {transactionStarted ? 'Your transaction has started' : 'Completing the trade...'}
            </Text>
            <CloseButton
              position="absolute"
              top="0px"
              right="12px"
              ref={cancelRef}
              onClick={onClose}
            />
          </AlertDialogHeader>
          <AlertDialogBody textAlign="left">
            {transactionStarted ? (
              <>
                <Spinner color="blue.500" size="lg" />{' '}
                <Text my="6" lineHeight="7">
                  The Ethereum network is processing your transaction, which can take a little
                  while.
                </Text>
              </>
            ) : (
              <>
                <Text mt="2" fontWeight="semibold">
                  Please confirm the transaction from your Wallet.
                </Text>
                <Text mt="4" lineHeight="6">
                  The smart contract for this transaction was created from the OpenSea Marketplace.
                  Once purchased, you can view your song on OpenSea!
                </Text>
                <SimpleGrid mt="5" p="5" bg="gray.100" borderRadius="md" columns={2}>
                  <Text>Contract Address: </Text>
                  <Text textAlign="right">
                    <Link
                      color="blue.500"
                      href="https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e"
                      isExternal
                    >
                      {truncateHash('0x495f947276749Ce646f68AC8c248420045cb7b5e')}
                    </Link>
                  </Text>
                  <Text mt="5">Marketplace: </Text>
                  <Text mt="5" textAlign="right">
                    <Link color="blue.500" href="https://opensea.io/assets/song-a-day" isExternal>
                      OpenSea.io
                    </Link>
                  </Text>
                  <Text mt="5">Blockchain: </Text>
                  <Text mt="5" textAlign="right">
                    Ethereum
                  </Text>
                </SimpleGrid>
                <Text my="5">
                  Please contact{' '}
                  <Link color="blue.500" href="https://twitter.com/songadaymann" isExternal>
                    Jonathan Mann
                  </Link>{' '}
                  if you have any questions!
                </Text>
              </>
            )}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
