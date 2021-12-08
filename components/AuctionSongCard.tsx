import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React, { useMemo } from 'react';
import { SongMetadata } from '../lib/types';
import { SONGADAY_CONTRACT_ADDRESS } from '../utils/constants';
import { getSongAttributeValue, youTubeGetID } from '../utils/helpers';
import { parseTokenURI } from '../web3/helpers';
import YoutubeEmbed from './YoutubeEmbed';

const SHOULD_AUTOPLAY = process.env.NODE_ENV === 'production';

// The contract address for all the songs on OpenSea.

interface SongCardProps {
  song: SongMetadata;
}

function AuctionSongCard({ song }: BoxProps & SongCardProps) {
  const date = DateTime.fromFormat(getSongAttributeValue(song?.attributes, 'Date'), 'yyyy-MM-dd');

  const subtitleDateString = useMemo(() => date.toLocaleString(DateTime.DATE_FULL), [date]);

  // Get the `tokenId` from the url param if it exists, otherwise try and
  // get it from the generated list of ids.
  const finalTokenId = song.token_id;

  // const { data, loading: niftyLoading, isHydrating, error, openSeaUri } = useNifty(finalTokenId);

  // const ownedByJonathan = data?.ownerships[0]?.owner?.id === JONATHAN_ID;

  // const { account, provider } = Account.useContainer();
  // const [isBuyLoading, setIsBuyLoading] = useState(false);
  // const [showBuyButton, setShowBuyButton] = useState(false);

  // useEffect(() => {
  //   setShowBuyButton(finalTokenId && openSeaPort && ownedByJonathan);
  // }, [openSeaPort, ownedByJonathan, finalTokenId]);

  // const buyAsset = async () => {
  //   if (openSeaPort && showBuyButton) {
  //     setIsBuyLoading(true);
  //     setIsModalOpen(true);
  //     try {
  //       const order = await openSeaPort?.api.getOrder({
  //         side: 1,
  //         token_id: finalTokenId,
  //         asset_contract_address: ASSET_CONTRACT_ADDRESS,
  //       });
  //       await openSeaPort?.fulfillOrder({ order, accountAddress: address });
  //       toast({
  //         title: 'Transaction Successful!',
  //         description: 'Thank you for your purchase',
  //         status: 'success',
  //         position: 'top',
  //       });
  //       setIsBuyLoading(false);
  //       setIsModalOpen(false);
  //       setShowBuyButton(false);
  //     } catch (error) {
  //       setIsBuyLoading(false);
  //       setIsModalOpen(false);
  //       toast({
  //         title: 'An error has occurred',
  //         description: error.message,
  //         status: 'error',
  //         position: 'top',
  //       });
  //     }
  //   }
  // };

  return (
    <VStack
      {...{
        borderWidth: '1px',
        borderColor: 'gray.200',
        borderRadius: 'md',
        _hover: {
          shadow: 'lg',
          transform: 'scale(1.02)',
        },
        transition: 'all 200ms ease-out',
      }}
      spacing="2"
      alignItems="stretch"
      bg="white"
    >
      <HStack p={3} justify="space-between" spacing="4">
        <VStack align="stretch" flex="1" minW="0">
          <Heading as="h3" fontSize="2xl" isTruncated>
            {song.name}
          </Heading>

          <Text as="h4" fontSize="xs" isTruncated>
            {subtitleDateString}
          </Text>
        </VStack>
        <VStack
          borderRadius="1"
          borderColor="black"
          justifyContent="center"
          alignItems="self-start"
        >
          <Text fontWeight="bold" fontSize="xl">
            #{song.token_id}
          </Text>

          {/* <Text whiteSpace="nowrap" fontSize="sm" textTransform="uppercase">
            {calendarDateString}
          </Text> */}
        </VStack>
      </HStack>

      <AspectRatio ratio={16 / 9}>
        {song.youtube_url ? (
          <YoutubeEmbed id={youTubeGetID(song.youtube_url)} autoPlay={SHOULD_AUTOPLAY} />
        ) : (
          <Image w="full" h="full" src={parseTokenURI(song.image)} />
        )}
      </AspectRatio>

      <VStack flex="1" p="2" spacing={4} align="stretch">
        <Text>{song.description}</Text>

        <Wrap>
          {song?.attributes?.map((attribute) => (
            <Button key={attribute.value} as="a" zIndex="1" size="xs">
              {attribute.trait_type}: {attribute.value}
            </Button>
          ))}
        </Wrap>

        <HStack justifyContent="space-between">
          <Button
            as="a"
            size="xs"
            variant="ghost"
            href={`https://testnets.opensea.io/assets/${SONGADAY_CONTRACT_ADDRESS}/${finalTokenId}`}
            target="_blank"
            rel="noopener noreferrer"
            zIndex="1"
          >
            See on OpenSea
          </Button>
        </HStack>
      </VStack>

      {/* margin collapse fix */}
      <Box />
    </VStack>
  );
}

export default AuctionSongCard;
