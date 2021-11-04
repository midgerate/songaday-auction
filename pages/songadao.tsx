import { Box, Container, SimpleGrid } from '@chakra-ui/layout';
import { Button, Center, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import Footer from '../components/Footer';
import NextLink from 'next/link';

// function FullWidthHeading(props: { heading: string; subHeading: string; anchorId: string }) {
//   return (
//     <Box
//       bgColor="brand.lightTeal"
//       p={8}
//       id={props.anchorId}
//       mx={pageSpacing.negative}
//       px={pageSpacing.positive}
//       my={3}
//     >
//       <Stack spacing={2}>
//         <Heading as="h2" fontSize="3xl">
//           {props.heading}
//         </Heading>
//         <Text fontSize="lg">{props.subHeading}</Text>
//       </Stack>
//     </Box>
//   );
// }

const pageSpacing = {
  positive: { base: 0, md: 8 },
  negative: [-8],
};
export default function SongADAO() {
  return (
    <>
      <Stack
        direction="row"
        w="full"
        pos="relative"
        minH="420px"
        mb={{ base: 40, md: 0 }}
        justifyItems="center"
      >
        <Image
          src="/assets/music-rainbow.png"
          width="520px"
          pos="absolute"
          top="32"
          left="0"
          alignSelf="end"
          justifySelf="start"
          display={{
            sm: 'none',
            xl: 'block',
          }}
        />
        <Box pos="absolute" w="full" textAlign="center" p={4}>
          <Heading
            as="h1"
            fontSize={['3xl', '4xl']}
            textAlign="center"
            fontWeight="bold"
            letterSpacing="wider"
            mt={16}
          >
            Hi! I’m Jonathan Mann.
          </Heading>
          <Text lineHeight="short" textAlign="center" fontSize="2xl" fontWeight="medium" pt="6">
            I've been writing a song a day for
            <Text as="span" px="2" fontWeight="bold">
              12 years and 267 days.
            </Text>
            That's
            <Text as="span" px="2" fontWeight="bold">
              4,647 songs!
            </Text>
          </Text>
          <NextLink href="/available-songs">
            <Button size="lg" w={['full', 48]} my={8}>
              Buy Song
            </Button>
          </NextLink>

          <Text lineHeight="short" textAlign="center" fontSize="2xl" fontWeight="medium">
            What do I do with all these songs?
          </Text>
          <Text lineHeight="short" textAlign="center" fontSize="2xl" fontWeight="medium" pt="6">
            The question is, what will
            <Text as="span" px="2" fontWeight="bold">
              YOU
            </Text>
            do?
          </Text>
        </Box>
        <Image
          src="/assets/jmann-illustrated.png"
          w="360px"
          bottom="0"
          right="0"
          pos="absolute"
          alignSelf="end"
          display={{
            sm: 'none',
            xl: 'block',
          }}
        />
      </Stack>

      <Box mx={pageSpacing.positive}>
        <Box
          bgColor="brand.lightTeal"
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          h={52}
          mt={16}
        >
          <Center>
            <Box pos="relative">
              <Text
                pos={{ base: 'relative', md: 'absolute' }}
                mt={6}
                top={{ base: -20, md: 0 }}
                textAlign={{ base: 'center', md: 'left' }}
                left={{ base: 0, md: -12 }}
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Introducing
              </Text>
              <Image src="/assets/songADAOLogo.png" alt="SongADao Logo" mt={-8} w="sm"></Image>
            </Box>
          </Center>
        </Box>
        <Box
          textAlign="center"
          pt={{ base: '20', md: null }}
          pb={{ base: '10', md: null }}
          px={{ base: 8, lg: 40 }}
        >
          <Text
            as="h1"
            fontWeight="bold"
            lineHeight="tall"
            fontSize={{ base: '2xl', md: '4xl' }}
            mt={[24, 16]}
          >
            SongADAO is a group of humans who support one song a day, forever.
          </Text>
          <Text fontSize={{ base: 'lg', md: '2xl' }} mt={4} lineHeight="shorter">
            Most artists are stuck with a
            <Link
              href="https://www.vulture.com/2019/04/how-indie-artists-actually-make-money-in-2019.html"
              borderColor="brand.teal"
              borderBottom="2px"
              _hover={{
                textDecoration: 'none',
                borderBottom: '0px',
              }}
              mx="1"
              color="brand.teal"
              isExternal
            >
              very convoluted business model
            </Link>
            if they want to earn a living making music. Using decentralized technology, I think we
            can do better. By empowering the people who support music, we can make sure that the
            people who make, promote, and appreciate music directly benefit from it.
          </Text>
        </Box>
        <SimpleGrid mb={16} mt={24} spacing={{ base: 32, md: 20 }} columns={[1, 1, 1, 3]}>
          <Box
            mx="auto"
            maxW={{ lg: 'full', md: 96 }}
            bgColor="brand.lightTeal"
            px={3}
            pb="12"
            rounded="md"
          >
            <Center>
              <Container mt={-12} centerContent>
                <Image src="/assets/agreement-hands.png" alt="Agreement Hands" h={24}></Image>
                <Text textAlign="center" fontSize="2xl" fontWeight="medium" mt={3}>
                  SongADAO owns 100% of the rights to — and revenue from — all Song A Day songs.
                </Text>
              </Container>
            </Center>
          </Box>
          <Box
            mx="auto"
            maxW={{ lg: 'full', md: 96 }}
            bgColor="brand.lightTeal"
            px={3}
            pb="12"
            rounded="md"
          >
            <Center>
              <Container mt={-12} centerContent>
                <Image src="/assets/bullhorn-hands.png" alt="Agreement Hands" h={24}></Image>
                <Text textAlign="center" fontSize="2xl" fontWeight="medium" mt={3}>
                  Members decide how to use those rights and revenue to grow the value of Song A
                  Day.
                </Text>
              </Container>
            </Center>
          </Box>
          <Box
            mx="auto"
            maxW={{ lg: 'full', md: 96 }}
            bgColor="brand.lightTeal"
            px={3}
            pb="12"
            rounded="md"
          >
            <Center>
              <Container mt={[-12, -20]} centerContent>
                <Image src="/assets/smiling-award-cup.png" alt="Agreement Hands" h={32}></Image>
                <Text textAlign="center" fontSize="2xl" fontWeight="medium" mt={3}>
                  As Song A Day gets more successful, so does the DAO!
                </Text>
              </Container>
            </Center>
          </Box>
        </SimpleGrid>

        <Stack px={{ base: 8, lg: 40 }} alignItems="center" textAlign="center">
          <Heading
            as="h1"
            fontWeight="bold"
            lineHeight="tall"
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            Why a DAO?
          </Heading>
          <Text fontSize={{ base: 'lg', md: '2xl' }} mt={6} lineHeight="shorter">
            Because I believe that people genuinely love art, and want it to thrive. But the economy
            around music has
            <Link
              href="https://www.grunge.com/227415/insane-times-music-artists-were-screwed-over-by-their-recording-companies/"
              borderColor="brand.teal"
              borderBottom="2px"
              _hover={{
                textDecoration: 'none',
                borderBottom: '0px',
              }}
              mx="1"
              color="brand.teal"
              isExternal
            >
              been screwed up
            </Link>
            for hundreds of years. That’s a deeply entrenched system.
          </Text>
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            pt={4}
            pb={{ base: 4, sm: 12 }}
            lineHeight="shorter"
          >
            SongADAO is a new twist; it’s a registered co-op LCA, so legally, it’s a company. But it
            runs like a collective, so that everyone who supports Song A Day benefits from its
            success. The goal is equity; everyone gets their fair share.
          </Text>
          <Link
            href="https://anchor.fm/digitallyrare/episodes/The-Song-That-Owns-Itself-e1558he"
            passRef
            isExternal
            _hover={{
              textDecoration: 'none',
              borderBottom: '0px',
            }}
          >
            <Button variant="outline" size="lg" w={['full', 52]} mt={4}>
              The Future Of Music
            </Button>
          </Link>
        </Stack>

        <Box
          bgColor="brand.lightTeal"
          p={8}
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          my={6}
          mt="16"
          textAlign="center"
        >
          <Stack py="12" px={{ base: 8, sm: 12 }} spacing={4}>
            <Heading
              as="h1"
              fontWeight="bold"
              lineHeight="tall"
              fontSize={{ base: '2xl', md: '4xl' }}
            >
              How do I join?
            </Heading>
            <Text fontSize={{ base: 'lg', md: '2xl' }} lineHeight="shorter">
              Joining is as easy as owning a Song A Day NFT.
            </Text>
            <Text fontSize={{ base: 'lg', md: '2xl' }} lineHeight="shorter">
              As long as you own at least one, you’re eligible to be a member.
            </Text>
            <NextLink href="/available-songs" passHref>
              <Button size="lg" w={['full', 52]} mt={4} alignSelf="center">
                Get Your NFT
              </Button>
            </NextLink>
          </Stack>
        </Box>

        <Box
          bgImage="/assets/location_lakewelch.png"
          p={8}
          mx={pageSpacing.negative}
          px={pageSpacing.positive}
          my={6}
          textAlign="center"
          pb="20"
        >
          <Stack pb="10" spacing={2} textAlign="center">
            <Heading
              pb="8"
              as="h1"
              fontWeight="bold"
              lineHeight="tall"
              fontSize={{ base: '2xl', md: '4xl' }}
            >
              What do members do?
            </Heading>
            <SimpleGrid spacing={{ base: 10, xl: 20 }} columns={[1, 1, 1, 3]}>
              <Box
                p={8}
                px={{ base: 16, md: 8 }}
                mx="auto"
                maxW={{ lg: 'full', md: 96 }}
                rounded="md"
                bg="brand.lightTeal"
              >
                <Stack spacing={4} textAlign="center">
                  <Heading as="h2" fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
                    Community
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    textAlign="left"
                    lineHeight="short"
                    fontWeight="medium"
                  >
                    This project is not about flipping for a quick buck. It’s about hodling and
                    building something, together. We’re dedicated to all acts of creation, big and
                    small.
                  </Text>
                </Stack>
              </Box>
              <Box
                p={8}
                px={{ base: 16, md: 8 }}
                mx="auto"
                maxW={{ lg: 'full', md: 96 }}
                rounded="md"
                bg="brand.lightTeal"
              >
                <Stack spacing={2} textAlign="center">
                  <Heading as="h2" fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
                    Patronage Activity
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    textAlign="left"
                    lineHeight="short"
                    fontWeight="medium"
                  >
                    Just buying an NFT is a big help. But you can also get paid working for the DAO!
                    Members pick what kinds of work gets rewarded, so proactive members can have a
                    big impact.
                  </Text>
                </Stack>
              </Box>
              <Box
                p={8}
                px={{ base: 16, md: 8 }}
                mx="auto"
                maxW={{ lg: 'full', md: 96 }}
                rounded="md"
                bg="brand.lightTeal"
              >
                <Stack spacing={2}>
                  <Heading as="h2" fontWeight="bold" fontSize={{ base: 'lg', md: '2xl' }}>
                    Scalability
                  </Heading>
                  <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    textAlign="left"
                    lineHeight="short"
                    fontWeight="medium"
                  >
                    <Link
                      href=""
                      borderColor="brand.teal"
                      borderBottom="2px"
                      _hover={{
                        textDecoration: 'none',
                        borderBottom: '0px',
                      }}
                      mx="1"
                      color="brand.teal"
                      isExternal
                    >
                      This is an experiment that’s meant to be replicated.
                    </Link>
                    If this model works, other creators will be able to adopt it too, and they’ll
                    need our help to do it.
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
          <Link
            href="/constitution"
            _hover={{
              textDecoration: 'none',
              borderBottom: '0px',
            }}
            passHref
          >
            <Button size="lg" w={['full', 52]} mt={4}>
              Our Constitution
            </Button>
          </Link>
        </Box>

        <Box my={16} px={{ base: 8, sm: 8 }} textAlign="center">
          <Heading
            as="h2"
            fontWeight="bold"
            pb="8"
            lineHeight="tall"
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            How do I learn more?
          </Heading>
          <Stack fontSize="lg" spacing="8" pb="8" alignItems="center">
            <Text fontSize="2xl" textAlign="left" lineHeight="short" fontWeight="medium">
              You can
              <Link
                href="https://twitter.com/songadaymann"
                borderColor="brand.teal"
                borderBottom="2px"
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '0px',
                }}
                mx="1"
                color="brand.teal"
                isExternal
              >
                reach out on Twitter
              </Link>
              , or
              <Link
                href="/nitty-gritty"
                borderColor="brand.teal"
                borderBottom="2px"
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '0px',
                }}
                mx="1"
                color="brand.teal"
              >
                read the nitty gritty
              </Link>
              about how SongADAO works.
            </Text>
            <Text fontSize="2xl" textAlign="left" lineHeight="short" fontWeight="medium">
              Ok if you learn by doing, just try it! Buy a song and you’re in.
            </Text>
          </Stack>
          <NextLink href="/" passHref>
            <Button size="lg">Buy An NFT</Button>
          </NextLink>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
