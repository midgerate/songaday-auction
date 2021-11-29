import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import { SongADay__factory } from '../types';
import { useContract, useReadContract, useWriteContract } from '../web3/hooks';
import { useWallet } from '../web3/WalletContext';

export default function Mint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const maxMint = 5;
  const songCost = 0.2;
  const BATCH_TOKEN_IDS = [
    1513,
    1952,
    3025,
    3591,
    4140,
    4406,
    4410,
    4421,
    4434,
    4446,
    4454,
    4458,
    4467,
    4486,
    4487,
    4493,
    4494,
    4511,
    4515,
    4534,
    4538,
    4546,
    4563,
    4587,
    4593,
    4606,
    4666,
  ];

  const BATCH_OWNERS = [
    '0x3d9456Ad6463a77bD77123Cb4836e463030bfAb4',
    '0x3d9456Ad6463a77bD77123Cb4836e463030bfAb4',
    '0x3d9456Ad6463a77bD77123Cb4836e463030bfAb4',
    '0x9b9DfFAAd17Cd0215e454dc0a6E221E7b6A16062',
    '0x6301add4fb128de9778b8651a2a9278b86761423',
    '0x6301Add4fb128de9778B8651a2a9278B86761423',
    '0x6186290B28D511bFF971631c916244A9fC539cfE',
    '0x0a690B298f84D12414F5c8dB7de1EcE5a4605877',
    '0xf476Cd75BE8Fdd197AE0b466A2ec2ae44Da41897',
    '0xf3860788D1597cecF938424bAABe976FaC87dC26',
    '0x7D602b32acD5942A619f49e104b20C0553c93405',
    '0x696Ef7ffa70b25666e394A095B0d46b2c17A2662',
    '0xE0719aF1123a4f6Beff552d5fB963CB278Ca1aE2',
    '0x1d4B9b250B1Bd41DAA35d94BF9204Ec1b0494eE3',
    '0xbd88526A40BD28aCb6761A238D7751d3F1bB5Fb8',
    '0x54BeCc7560a7Be76d72ED76a1f5fee6C5a2A7Ab6',
    '0x46b2bD5C888E6d57a839c559FD6076F2c15A8cB1',
    '0xED53514155887F28f926F7Dd7AE02cf34191d927',
    '0xbd88526A40BD28aCb6761A238D7751d3F1bB5Fb8',
    '0xea94C9a3Bcc2bf5a3c08e3de1Ccc64c6B6049710',
    '0x3612b2e93b49F6c797066cA8c38b7f522b32c7cb',
    '0x399e0Ae23663F27181Ebb4e66Ec504b3AAB25541',
    '0x08797952462b82dB639DDBFdeF2ab1718ffa7676',
    '0xa2C62a66F6660166838B95DB60f234dFB59e765e',
    '0xa2C62a66F6660166838B95DB60f234dFB59e765e',
    '0xEC6d36A487d85CF562B7b8464CE8dc60637362AC',
    '0x3d9456Ad6463a77bD77123Cb4836e463030bfAb4',
  ];

  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const { contract } = useContract(contractAddress, SongADay__factory);

  const { connectWallet } = useWallet();
  const [mintAmount, setMintAmount] = useState(1);
  const [mintError, setMintError] = useState(null);
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
    if (error) {
      setWaiting(false);
      setMintError(error?.data?.message || error.message);
      onOpen();
      console.log(error?.data?.message || error.message);
    }
  };

  const [batchMint] = useWriteContract(contract, 'batchMint', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleMint, // txn has been accepted on chain / in pool
  });

  const [mint] = useWriteContract(contract, 'publicMint', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleMint, // txn has been accepted on chain / in pool
  });

  const [flipSale] = useWriteContract(contract, 'toggleSale', {
    onConfirmation: handleConfirmation, // when txn is confirmed on chain
    onError: handleError, // txn had an err
    onResponse: handleMint, // txn has been accepted on chain / in pool
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
                setMintError(null);
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
          <Button size="lg" style={{ color: 'white' }} onClick={onOpen}>
            Open modal
          </Button>
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            scrollBehavior="inside"
            motionPreset="slideInBottom"
            closeOnOverlayClick={isOpen && waiting ? false : true}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              {isOpen && waiting ? null : <ModalCloseButton />}
              <ModalBody>
                <Stack alignItems="center" spacing="8">
                  <Heading fontSize="2xl">
                    {isOpen && waiting
                      ? 'Minting...give us a second!'
                      : mintError
                      ? 'Something went wrong!'
                      : 'Minted!'}
                  </Heading>
                  {isOpen && waiting ? <Spinner size="xl" color="teal.500" /> : null}
                  {/* TODO: Make dynamic */}
                  {isOpen && waiting ? (
                    <NextLink
                      href="https://etherscan.io/tx/0xf59b5ed41d971b07ce3c2bb85ce2d96dcaf230130c25c65cf13573b5fa120223"
                      passHref
                    >
                      <Link isExternal color="teal">
                        Watch the transaction on Etherscan
                      </Link>
                    </NextLink>
                  ) : mintError ? (
                    <Text>{mintError}</Text>
                  ) : (
                    <NextLink
                      href="https://etherscan.io/tx/0xf59b5ed41d971b07ce3c2bb85ce2d96dcaf230130c25c65cf13573b5fa120223"
                      passHref
                    >
                      <Link isExternal color="teal">
                        View your new song in collections
                      </Link>
                    </NextLink>
                  )}
                </Stack>
              </ModalBody>
              <ModalFooter>
                {isOpen && waiting ? null : <Button onClick={onClose}>Close</Button>}
              </ModalFooter>
            </ModalContent>
          </Modal>

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
                await batchMint(BATCH_TOKEN_IDS, BATCH_OWNERS);
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
