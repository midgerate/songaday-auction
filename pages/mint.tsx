import { Box, Button, Container, Heading, Text, HStack, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { useContract, useReadContract, useWriteContract } from '../web3/hooks';
import { useWallet } from '../web3/WalletContext';
import { SongADay__factory } from '../types';

export default function Mint() {
  const maxMint = 5;
  const songCost = 0.2;

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const { contract } = useContract(contractAddress, SongADay__factory);

  const { address, provider } = useWallet();
  const [mintAmount, setMintAmount] = useState(1);

  const { response: priceAmount } = useReadContract(contract, 'priceAmount');

  // TODO: Set up loading ui when txn is being processed
  const [waiting, setWaiting] = useState(false);

  const handleConfirmation = async () => {
    console.log('Minted');
    setWaiting(false); // create waiting state variable - utilize modal
  };

  const handleHarvested = async () => {
    console.log('Waiting for transaction to finish');
  };

  const handleError = (error: any) => {
    console.log(error?.data?.message || error.message);
  };

  // const [batchMint] = useWriteContract(contract, 'batchMint', {
  //   onConfirmation: handleConfirmation, // when txn is confirmed on chain
  //   onError: handleError, // txn had an err
  //   onResponse: handleHarvested, // txn has been accepted on chain / in pool
  // });

  const [mint] = useWriteContract(contract, 'publicMint', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleHarvested, // txn has been accepted on chain / in pool
  });

  const [flipSale] = useWriteContract(contract, 'toggleSale', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleHarvested, // txn has been accepted on chain / in pool
  });

  const SongNotes = () => {
    const notes = new Array(maxMint).fill('🎙');
    return (
      <>
        <HStack py={8}>
          {notes.map((note, index) => {
            return (
              <Text key={index} fontSize={36} opacity={index < mintAmount ? '1' : '.2'}>
                {note}
              </Text>
            );
          })}
        </HStack>
      </>
    );
  };

  console.log('price Amount', priceAmount?.toString());
  return (
    <>
      <Container centerContent p={8}>
        <Stack textAlign="center">
          <Heading>Mint random songs</Heading>
          <Text>
            Hit the big button and you’ll mint a random NFT from the pool of available songs. Each
            song costs Ξ{songCost}, plus gas.
          </Text>
        </Stack>
        <SongNotes />
        <HStack spacing={8} pb={6}>
          <Button
            variant="outline"
            disabled={mintAmount === 1}
            onClick={() => setMintAmount((prevMintAmount) => prevMintAmount - 1)}
          >
            ← Less
          </Button>
          <Heading>{mintAmount}</Heading>
          <Button
            variant="outline"
            disabled={mintAmount === maxMint}
            onClick={() => setMintAmount((prevMintAmount) => prevMintAmount + 1)}
          >
            More →
          </Button>
        </HStack>
        <Box textAlign="center">
          <Button
            size="lg"
            style={{ color: 'white' }}
            onClick={async () => {
              try {
                setWaiting(true);
                await mint(mintAmount, { value: priceAmount.mul(mintAmount) });
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            Mint {mintAmount} {mintAmount === 1 ? 'song' : 'songs'}
          </Button>
          <Text>Estimated cost: Ξ{(mintAmount * songCost).toPrecision(1)}</Text>
          <Text fontSize="sm" opacity=".75">
            (gas not included)
          </Text>
          {/* <Button
            size="lg"
            style={{ color: 'white' }}
            onClick={async () => {
              try {
                setWaiting(true);
                await batchMint(mintAmount, { value: priceAmount.mul(mintAmount) });
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            Batch mint
          </Button> */}
        </Box>
        <Box backgroundColor="gray.100" w="full" textAlign="center" my="4" p={4}>
          <Text color="red">⚠ REMOVE FOR PROD ⚠</Text>
          <Button
            variant="ghost"
            onClick={async () => {
              try {
                setWaiting(true);
                await flipSale();
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            Flip sale
          </Button>
        </Box>{' '}
      </Container>
      <Footer />
    </>
  );
}
