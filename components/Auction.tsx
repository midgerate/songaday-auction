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
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SongADay, SongADay__factory } from '../types';
import { RESERVE_PRICE, SONGADAY_CONTRACT_ADDRESS, SONG_CHAIN_ID } from '../utils/constants';
import fetchGraph from '../web3/fetchGraph';
import { formatAddress, formatToken, parseTokenURI } from '../web3/helpers';
import { useContract } from '../web3/hooks';
import Footer from './Footer';
import AuctionSongCard from './AuctionSongCard';
import { BigNumberish, BigNumber, ethers } from 'ethers';
import { DateTime } from 'luxon';
import { getSongAttributeValue } from '../utils/helpers';
import { SongMetadata } from '../lib/types';
import { convertSecondsToDay } from '../lib/helpers';
import { useWallet } from '../web3/WalletContext';
import { AuctionHouse } from '@zoralabs/zdk';

const SONG_BY_NUMBER = `
query SongByNumber($token: String) {
  reserveAuctions(
    first: 1,
    where: {token: $token}
  ) {
    id
    tokenId
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
    where: {tokenContract: $tokenContract, approved: true},
    orderBy: approvedTimestamp,
    orderDirection: desc
  ) {
    id
    tokenId
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
  tokenId: string;
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
  const [previousSong, setPreviousSong] = useState<Song>();
  const [nextSong, setNextSong] = useState<Song>();
  const [songMetadata, setSongMetadata] = useState<SongMetadata>();
  const [duration, setDuration] = useState<{
    days?: string;
    hours?: string;
    minutes?: string;
    years?: string;
    seconds?: string;
  }>({});

  const { contract: songContract } = useContract(SONGADAY_CONTRACT_ADDRESS, SongADay__factory, {
    useStaticProvider: true,
  });

  const { provider } = useWallet();

  const [auctionHouseContract, setAuctionHouseContract] = useState<AuctionHouse>();
  useEffect(() => {
    if (provider) {
      const auctionHouseContract = new AuctionHouse(provider?.getSigner(), SONG_CHAIN_ID);
      setAuctionHouseContract(auctionHouseContract);
    }
  }, [provider]);

  const createBid = async (auctionId: string, amount: BigNumberish) => {
    console.log('bidding');
    try {
      const bidTx = await auctionHouseContract?.createBid(auctionId, amount);
      await bidTx?.wait();
      console.log('bidding done');
    } catch (error) {
      console.log(error);
      console.log('bidding failed');
    }
  };

  const fetchSong = async (songNbr?: string, latest?: boolean) => {
    try {
      const _song = await fetchSongFromSubgraph(songNbr as string, latest);
      if (_song.tokenId) {
        setSong(_song);
        const tokenURI = await (songContract as SongADay)?.tokenURI(_song.tokenId);
        if (tokenURI) {
          const songMetadata = await fetchMetadata(tokenURI);
          setSongMetadata(songMetadata);
        }
      }
    } catch (error) {
      return null;
    }
  };

  const fetchPreviousSong = async (songNbr) => {
    try {
      const _song = await fetchSongFromSubgraph(songNbr as string, false);
      if (_song.tokenId) {
        setPreviousSong(_song);
      }
    } catch (error) {
      return null;
    }
  };

  const fetchNextSong = async (songNbr) => {
    try {
      const _song = await fetchSongFromSubgraph(songNbr as string, false);
      if (_song.tokenId) {
        setNextSong(_song);
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchSong((songNbr as string) ?? '', latest);
  }, [songNbr ?? '', songContract?.address ?? '']);

  useEffect(() => {
    const calculateDuration = () => {
      const now = new Date().getTime(); // current datetime as milliseconds
      const msDiff = (Number(song?.approvedTimestamp) + Number(song?.duration)) * 1000 - now;
      const duration = convertSecondsToDay(msDiff / 1000);
      setDuration(duration);
    };

    // Calculate first time
    calculateDuration();

    const interval = setInterval(() => {
      calculateDuration();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [song]);

  useEffect(() => {
    if (song?.tokenId) {
      fetchPreviousSong((Number(song.tokenId) - 1).toString());
      fetchNextSong((Number(song.tokenId) + 1).toString());
    }
  }, [song?.tokenId]);

  const fetchMetadata = async (tokenURI: string) => {
    try {
      const URI = parseTokenURI(tokenURI);
      const response = await fetch(URI);
      const songmeta = await response.json();
      return songmeta;
    } catch (e) {
      console.log('metaData fatch error', e);
    }
  };

  const date = DateTime.fromFormat(
    getSongAttributeValue(songMetadata?.attributes, 'Date') ?? '',
    'yyyy-MM-dd',
  );

  // TODO : handle errors coming from zora while bidding
  // TODO: handle previous bids when its the first bid
  // TODO: handle when the auction has no bids
  // TODO: refresh when the bid is done.

  const subtitleDateString = date.toLocaleString(DateTime.DATE_FULL);
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
        <Box display="flex" justifyContent="center" alignItems="center">
          {songMetadata ? (
            <AuctionSongCard song={songMetadata} />
          ) : (
            <Spinner thickness="4px" speed="0.56s" emptyColor="teal.100" size="xl" color="teal" />
          )}
        </Box>
        {songMetadata ? (
          <Box>
            <Text fontSize="md" fontWeight="medium">
              {subtitleDateString}
            </Text>
            <Flex alignItems="center">
              <Heading as="h1" fontSize="4xl">
                Song {Number(song.tokenId).toLocaleString()}
              </Heading>
              <Flex pl="6">
                <Text fontSize="4xl">{previousSong ? '←' : ''}</Text>
                <Text fontSize="4xl" opacity="0.4" pl="2.5">
                  {nextSong ? '→' : ''}
                </Text>
              </Flex>
            </Flex>

            <Stack spacing={{ base: '8', lg: '12' }} pt="6" direction={['column', 'row']}>
              <Flex flexDir="column">
                <Text>Current Bid</Text>
                <Heading as="h2" fontSize="3xl" fontWeight="bold">
                  Ξ{formatToken(song?.currentBid?.amount.toString()) ?? '0'}
                </Heading>
              </Flex>
              <Flex flexDir="column">
                <Text>Ends In</Text>
                <Heading as="h2" fontSize="3xl" fontWeight="bold">
                  {duration.hours}h {duration.minutes}m {parseInt(duration.seconds)}s
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
                min={Number(formatToken(song?.currentBid?.amount.toString()) ?? RESERVE_PRICE)}
                onChange={(valueString) => setBidValue(parse(valueString))}
                value={format(bidValue)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                ml="3"
                size="lg"
                onClick={() => createBid(song.id, ethers.utils.parseEther(bidValue))}
              >
                Place bid
              </Button>
            </Flex>

            <Stack spacing={2} pt="6">
              {song?.currentBid && (
                <Flex justify="space-between" px="3" py="2" bgColor="white" rounded="sm">
                  <Flex align="center">
                    <Image
                      borderRadius="full"
                      boxSize="24px"
                      src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                      alt="Segun Adebayo"
                    />
                    <Text pl="4">{formatAddress(song?.currentBid?.bidder.id)}</Text>
                  </Flex>
                  <Flex align="center">
                    <Text pr="3" fontWeight="semibold">
                      Ξ {formatToken(song?.currentBid.amount.toString())}
                    </Text>
                    <ExternalLinkIcon /> {/** TODO: link to transaction hash */}
                  </Flex>
                </Flex>
              )}
              <>
                {song.previousBids.map((bid) => {
                  return (
                    <Flex
                      key={bid.id}
                      justify="space-between"
                      px="3"
                      py="2"
                      bgColor="white"
                      rounded="sm"
                    >
                      <Flex align="center">
                        {/** TODO: get user's icon blokkies / ens if present */}
                        <Image
                          borderRadius="full"
                          boxSize="24px"
                          src="https://avatars1.githubusercontent.com/u/99944?s=400&v=4"
                          alt="Segun Adebayo"
                        />
                        <Text pl="4">{formatAddress(bid.bidder.id)}</Text>
                      </Flex>
                      <Flex align="center">
                        <Text pr="3" fontWeight="semibold">
                          Ξ {formatToken(bid.amount.toString())}
                        </Text>
                        <ExternalLinkIcon />
                      </Flex>
                    </Flex>
                  );
                })}
              </>
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
                      Song {Number(song.tokenId).toLocaleString()}
                    </Heading>

                    <Stack spacing={2} pt="6">
                      {song?.currentBid && (
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
                            <Text pl="4">{formatAddress(song?.currentBid?.bidder.id)}</Text>
                          </Flex>
                          <Flex align="center">
                            <Text pr="3" fontWeight="semibold">
                              Ξ {formatToken(song?.currentBid.amount.toString())}
                            </Text>
                            <ExternalLinkIcon />
                          </Flex>
                        </Flex>
                      )}
                      <>
                        {song.previousBids.map((bid) => {
                          return (
                            <Flex
                              key={bid.id}
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
                                <Text pl="4">{formatAddress(bid.bidder.id)}</Text>
                              </Flex>
                              <Flex align="center">
                                <Text pr="3" fontWeight="semibold">
                                  Ξ {formatToken(bid.amount.toString())}
                                </Text>
                                <ExternalLinkIcon />
                              </Flex>
                            </Flex>
                          );
                        })}
                      </>
                    </Stack>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        ) : (
          <Spinner thickness="4px" speed="0.56s" emptyColor="teal.100" size="xl" color="teal" />
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default Auction;
