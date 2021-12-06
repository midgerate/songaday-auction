import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '../components/Footer';
import MintedSongModal from '../components/modals/songs/MintedSongModal';
// import ReservingSongModal from '../components/modals/songs/ReservingSongModal';
import { SongADay__factory } from '../types';
import { useContract, useReadContract, useWriteContract } from '../web3/hooks';
import { useWallet } from '../web3/WalletContext';

export default function Mint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const maxMint = 5;
  const songCost = 0.2;

  const TOKEN_IDS = process.env.NEXT_PUBLIC_TOKENS.split(',');
  const OWNERS = process.env.NEXT_PUBLIC_OWNERS.split(',');

  const contractAddress = process.env.NEXT_PUBLIC_SONGADAY_CONTRACT_ADDRESS;
  const { contract } = useContract(contractAddress, SongADay__factory);

  const { connectWallet } = useWallet();
  const [mintAmount, setMintAmount] = useState(1);
  const [mintError, setMintError] = useState('');
  // const [showModal, setShowModal] = useState(false);

  const { response: priceAmount } = useReadContract(contract, 'priceAmount');

  // TODO: Set up loading ui when txn is being processed
  const [waiting, setWaiting] = useState(false);

  const handleConfirmation = async () => {
    console.log('Minted');
    setWaiting(false); // create waiting state variable - utilize modal
    onOpen();
  };

  const handleMint = async () => {
    onOpen();
    console.log('Waiting for transaction to finish');
  };

  const handleError = (error: any) => {
    setWaiting(false);
    setMintError(error?.data?.message || error.message);
    onOpen();
    console.log(error?.data?.message || error.message);
  };

  const [batchMint] = useWriteContract(contract, 'batchMint', {
    onConfirmation: handleConfirmation,
    onError: handleError,
    onResponse: handleMint,
  });

  const [mint] = useWriteContract(contract, 'publicMint', {
    onConfirmation: handleConfirmation,
    onError: handleError,
    onResponse: handleMint,
  });

  const [flipSale] = useWriteContract(contract, 'toggleSale', {
    onConfirmation: handleConfirmation,
    onError: handleError,
    onResponse: handleMint,
  });

  const SongNotes = (props) => {
    const notes = new Array(maxMint).fill('🎙');
    return (
      <>
        <HStack py={8} {...props}>
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

  // console.log('price Amount', priceAmount?.toString());
  // console.log('mint Amount', mintAmount);
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
        <SongNotes display={{ base: 'flex', md: 'none' }} />
        <HStack spacing={6} pb={6}>
          <Button
            variant="outline"
            disabled={mintAmount === 1}
            onClick={() => setMintAmount((prevMintAmount) => prevMintAmount - 1)}
          >
            ← Less
          </Button>
          <SongNotes display={{ base: 'none', md: 'flex' }} />
          {/* <Heading>{mintAmount}</Heading> */}
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
                setMintError('');
                await connectWallet();
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

          {/* <ReservingSongModal voucherAmount={mintAmount} isOpen={isOpen} onClose={onClose} /> */}
          {/* <ReadyForMintModal
            voucherAmount={mintAmount}
            totalUserVouchers={12}
            isOpen={isOpen}
            onClose={onClose}
          /> */}
          {/* <MintingSongModal
            totalUserVouchers={6}
            isOpen={isOpen}
            onClose={onClose}
            mintTxnLink="https://etherscan.io"
          /> */}
          <MintedSongModal
            songs={[
              {
                number: 702,
                title: 'The Continuing Adventures of Steve The Hippo',
              },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 1370,
              //   title: 'IOS Maps Song',
              // },
              // {
              //   number: 4706,
              //   title: 'I Wanna Play Actraiser',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
              // {
              //   number: 4717,
              //   title: 'Fuck The Hustle & Grind (cuz WAGMI)',
              // },
            ]}
            isOpen={isOpen}
            onClose={onClose}
            collectionLink="https://etherscan.io"
          />

          <Text>Estimated cost: Ξ{(mintAmount * songCost).toPrecision(1)}</Text>
          <Text fontSize="sm" opacity=".75">
            (gas not included)
          </Text>
          <Button
            size="lg"
            style={{ color: 'white' }}
            onClick={async () => {
              try {
                setMintError(null);
                await connectWallet();
                setWaiting(true);
                await batchMint(TOKEN_IDS, OWNERS);
              } catch (e) {
                console.log(e);
                setWaiting(false);
              }
            }}
          >
            Batch mint
          </Button>
        </Box>
        <Box backgroundColor="gray.100" w="full" textAlign="center" my="4" p={4}>
          <Text color="red">⚠ REMOVE FOR PROD ⚠</Text>
          <Button
            variant="ghost"
            onClick={async () => {
              try {
                setMintError(null);
                await connectWallet();
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
