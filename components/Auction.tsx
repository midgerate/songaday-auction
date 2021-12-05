import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RESERVE_PRICE, SONGADAY_CONTRACT_ADDRESS, SONG_CHAIN_ID } from '../utils/constants';
import fetchGraph from '../web3/fetchGraph';
import Footer from './Footer';
import SongCard from './SongCard';

const SONG_BY_NUMBER = `
query SongByNumber($token: String) {
  reserveAuctions(
    first: 1,
    where: {token: $token}
  ) {
    id
    transactionHash
    approved
    duration
    expectedEndTimestamp
    tokenOwner
    status
    currentBid {
      id
      transactionHash
      amount
      bidder
      bidType
      createdAtTimestamp
    }
    previousBids {
      id
      transactionHash
      amount
      bidder
      bidType
      createdAtTimestamp
    }
    approvedTimestamp
    createdAtTimestamp
    finalizedAtTimestamp
  }
}
`;

const LATEST_SONG = `
query Song($tokenContract: String) {
  reserveAuctions(
    first: 1,
    where: {tokenContract: $tokenContract, approved: true}
    orderBy: approvedTimestamp
    orderDirection: desc
  ) {
    id
    transactionHash
    approved
    duration
    expectedEndTimestamp
    tokenOwner {
      id
    }
    status
    currentBid {
      id
      transactionHash
      amount
      bidder {
        id
      }
      bidType
      createdAtTimestamp
    }
    previousBids {
      id
      transactionHash
      amount
      bidder {
        id
      }
      bidType
      createdAtTimestamp
    }
    approvedTimestamp
    createdAtTimestamp
    finalizedAtTimestamp
  }
}
`;

type Bid = {
  id: string;
  transactionHash: string;
  amount: number;
  bidder: User;
  bidType: string;
  createdAtTimestamp: number;
};

type User = {
  id: string;
};

type Song = {
  id: string;
  transactionHash: string;
  approved: boolean;
  duration: number;
  expectedEndTimestamp: number;
  tokenOwner: User;
  status: string;
  currentBid: Bid;
  previousBids: Bid[];
  approvedTimestamp: number;
  createdAtTimestamp: number;
  finalizedAtTimestamp: number;
};

type SongData = {
  reserveAuctions: Song[];
};

const fetchSongFromSubgraph = async (songNbr?: string, latest?: boolean) => {
  if (!latest && !songNbr) {
    return undefined;
  }
  if (latest) {
    const { data } = await fetchGraph<SongData, { tokenContract: string }>(
      SONG_CHAIN_ID,
      LATEST_SONG,
      {
        tokenContract: SONGADAY_CONTRACT_ADDRESS,
      },
    );
    return data.reserveAuctions[0];
  } else {
    const { data } = await fetchGraph<SongData, { token: string }>(SONG_CHAIN_ID, SONG_BY_NUMBER, {
      token: `${SONGADAY_CONTRACT_ADDRESS}-${songNbr}`,
    });
    return data.reserveAuctions[0];
  }
};

const Auction: React.FC<{ latest?: boolean }> = ({ latest }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const format = (val) => `Ξ` + val;
  const parse = (val) => val.replace(/^Ξ/, '');
  const [bidValue, setBidValue] = useState(RESERVE_PRICE);
  const router = useRouter();
  const { songNbr } = router.query;

  const [song, setSong] = useState<Song>();

  const fetchSong = async (songNbr?: string, latest?: boolean) => {
    const song = await fetchSongFromSubgraph(songNbr as string, latest);
    setSong(song);
  };

  useEffect(() => {
    fetchSong((songNbr as string) ?? '', latest);
  }, [songNbr ?? '']);

  console.log({ song });

  return (
    <>
      <Grid
        templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={{ base: '4', sm: '8', lg: '32' }}
        px={{ base: '4', sm: '16', lg: '32', xl: '56' }}
        py={8}
        bgColor="brand.lightTeal"
      >
        <Box>
          <SongCard song={undefined} card />
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="medium">
            December 15, 2021
          </Text>
          <Flex alignItems="center">
            <Heading as="h1" fontSize="4xl">
              Song 4,051
            </Heading>
            <Flex pl="6">
              <Text fontSize="4xl">←</Text>
              <Text fontSize="4xl" opacity="0.4" pl="2.5">
                →
              </Text>
            </Flex>
          </Flex>

          <Stack spacing={{ base: '8', lg: '12' }} pt="6" direction={['column', 'row']}>
            <Flex flexDir="column">
              <Text>Current Bid</Text>
              <Heading as="h2" fontSize="3xl" fontWeight="bold">
                Ξ125.00
              </Heading>
            </Flex>
            <Flex flexDir="column">
              <Text>Ends In</Text>
              <Heading as="h2" fontSize="3xl" fontWeight="bold">
                24h 56m 42s
              </Heading>
            </Flex>
          </Stack>

          <Flex pt="8">
            <NumberInput
              maxW={32}
              size="lg"
              bgColor="white"
              placeholder="ETH amount"
              step={0.01}
              defaultValue={Number(RESERVE_PRICE)}
              min={Number(RESERVE_PRICE)}
              onChange={(valueString) => setBidValue(parse(valueString))}
              value={format(bidValue)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {/* TODO: Check what nework the user is on to determine hwn to show toast */}
            <Button
              ml="3"
              size="lg"
              onClick={() =>
                toast({
                  description:
                    'Make sure your wallet is connected to the Rinkeby Test Network! These auctions are on the testnet.',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                  position: 'top-right',
                })
              }
            >
              Place bid
            </Button>
          </Flex>

          <Stack spacing={2} pt="6">
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">0x987...3m0k</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">0x987...3m0k</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
            <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                  alt="Segun Adebayo"
                />
                <Text pl="4">hazmatsuit.eth</Text>
              </Flex>
              <Flex align="center">
                <Text pr="3" fontWeight="semibold">
                  Ξ 125.00
                </Text>
                <ExternalLinkIcon />
              </Flex>
            </Flex>
          </Stack>

          <Box pt={4}>
            <Button mt="3" fontWeight="medium" variant="link" onClick={onOpen}>
              See full bid history →
            </Button>
            <Modal
              onClose={onClose}
              isOpen={isOpen}
              isCentered
              scrollBehavior="inside"
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Bid History</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Heading as="h1" fontSize="4xl">
                    Song 4,051
                  </Heading>
                  <Stack spacing={2} pt="6">
                    <Flex
                      justify="space-between"
                      px="3"
                      py="2"
                      bgColor="brand.lightTeal"
                      rounded="sm"
                    >
                      <Flex align="center">
                        <Image
                          borderRadius="full"
                          boxSize="24px"
                          src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                          alt="Segun Adebayo"
                        />
                        <Text pl="4">0x987...3m0k</Text>
                      </Flex>
                      <Flex align="center">
                        <Text pr="3" fontWeight="semibold">
                          Ξ 125.00
                        </Text>
                        <ExternalLinkIcon />
                      </Flex>
                    </Flex>
                    <Flex
                      justify="space-between"
                      px="3"
                      py="2"
                      bgColor="brand.lightTeal"
                      rounded="sm"
                    >
                      <Flex align="center">
                        <Image
                          borderRadius="full"
                          boxSize="24px"
                          src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                          alt="Segun Adebayo"
                        />
                        <Text pl="4">0x987...3m0k</Text>
                      </Flex>
                      <Flex align="center">
                        <Text pr="3" fontWeight="semibold">
                          Ξ 125.00
                        </Text>
                        <ExternalLinkIcon />
                      </Flex>
                    </Flex>
                    <Flex
                      justify="space-between"
                      px="3"
                      py="2"
                      bgColor="brand.lightTeal"
                      rounded="sm"
                    >
                      <Flex align="center">
                        <Image
                          borderRadius="full"
                          boxSize="24px"
                          src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                          alt="Segun Adebayo"
                        />
                        <Text pl="4">hazmatsuit.eth</Text>
                      </Flex>
                      <Flex align="center">
                        <Text pr="3" fontWeight="semibold">
                          Ξ 125.00
                        </Text>
                        <ExternalLinkIcon />
                      </Flex>
                    </Flex>
                    <Flex
                      justify="space-between"
                      px="3"
                      py="2"
                      bgColor="brand.lightTeal"
                      rounded="sm"
                    >
                      <Flex align="center">
                        <Image
                          borderRadius="full"
                          boxSize="24px"
                          src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                          alt="Segun Adebayo"
                        />
                        <Text pl="4">hazmatsuit.eth</Text>
                      </Flex>
                      <Flex align="center">
                        <Text pr="3" fontWeight="semibold">
                          Ξ 125.00
                        </Text>
                        <ExternalLinkIcon />
                      </Flex>
                    </Flex>
                  </Stack>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default Auction;
