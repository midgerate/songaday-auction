import { AspectRatio, Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Footer from '../components/Footer';

const VoucherExplained: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Song Voucher Explained | SongADay World"
        description="Find out how and why SongADay uses vouchers for minting."
      />
      <Container centerContent p={8}>
        <VStack spacing={6}>
          <Heading fontSize="4xl" color="teal">
            What the Heck is a Song Voucher?
          </Heading>

          <Box w={{ base: 'full', md: '2xl' }}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/J59Ck0xgDyw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encr ypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Text fontSize="md" color="gray.500" mt={2} textAlign="center">
              You can read my explanation, or just listen to my song. Or both!
            </Text>
          </Box>

          <Text>
            A song voucher is an answer to a super interesting question: how do I mint a large
            number of NFTs that have a very specific order without costing the creator or consumer a
            lot of gas?
          </Text>

          <Text>
            The Voucher is an ERC-721 token that reserves your song for you. Ideally, you mint a
            Voucher (or mint a bunch!) and you immediately redeem them for Song A Day NFTs. But you
            don’t have to. Maybe you want to wait until gas is less expensive, or maybe your cat
            walked across your keyboard. Or maybe you like savoring the surprise!
          </Text>

          <Text>
            When you redeem it at songaday.world/mint, we use the Power of Math™ to figure out which
            song is yours, so it’s a surprise until then. Which song you get is determined when the
            Voucher is created, so no one else can steal your song from you if you don’t redeem it
            immediately. 1 Song = 1 Voucher.
          </Text>

          <Text>
            Even after the big S.A.D. Drop is over, you’ll still be able to turn in a Voucher, if
            you’ve been holding onto it for that long. But I wouldn’t wait forever- the only way to
            join SongADAO is with an actual Song A Day NFT!
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default VoucherExplained;
